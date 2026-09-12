import os
from PIL import Image, ImageDraw, ImageFilter

hero_img = Image.open("public/images/hero-clean-bg.jpg").convert("RGBA")
w, h = hero_img.size
print(f"Hero size: {w}x{h}")

# ==========================================
# 1. PRECISE AIRPLANE EXTRACTION
# ==========================================
# Airplane is located in x: [475, 785], y: [0, 155]
# Let's create an alpha mask using color difference from sky
ap_crop = hero_img.crop((475, 0, 785, 155))
aw, ah = ap_crop.size

# Sky in this region is cyan/blue: High Blue, Medium Green, Low Red
ap_mask = Image.new("L", (aw, ah), 0)
ap_pixels = ap_crop.load()
mask_pixels = ap_mask.load()

for y in range(ah):
    for x in range(aw):
        r, g, b, a = ap_pixels[x, y]
        # Check if it's the plane:
        # Fuselage is white (r,g,b all > 175 and close to each other)
        # Tail is navy (r < 70, g < 90, b > 70)
        # Engines and landing gear are dark gray (r < 80, g < 80, b < 90)
        # Underside is shadow gray (r: 100-150, g: 110-160, b: 130-180)
        # Sky is: b > 190, b - r > 35, or b - g > 15
        is_plane = False
        diff_br = b - r
        diff_bg = b - g
        
        # If clearly blue sky:
        if diff_br > 32 and r < 185:
            is_plane = False
        elif diff_br > 22 and diff_bg > 10 and r < 190:
            is_plane = False
        elif y < 10 and diff_br > 15:
            is_plane = False
        else:
            # Plane pixels
            # Filter out top background sky and bottom containers
            if y > 140 and (r > 120 and g < 100): # orange/red containers below
                is_plane = False
            else:
                is_plane = True
                
        if is_plane:
            mask_pixels[x, y] = 255

# Feather the mask slightly for smooth edges
ap_mask = ap_mask.filter(ImageFilter.GaussianBlur(1.2))
ap_crop.putalpha(ap_mask)
ap_crop.save("public/images/hero-airplane.png")
print("Saved hero-airplane.png")

# ==========================================
# 2. PRECISE TRUCK EXTRACTION
# ==========================================
# Truck is located in x: [455, 650], y: [90, 275]
# Let's crop the exact truck region
truck_crop = hero_img.crop((455, 90, 650, 275))
tw, th = truck_crop.size

truck_mask = Image.new("L", (tw, th), 0)
t_pixels = truck_crop.load()
t_mask_pixels = truck_mask.load()

for y in range(th):
    for x in range(tw):
        r, g, b, a = t_pixels[x, y]
        # Truck has:
        # - Blue corrugated container: deep blue/navy (b > r, b > 80)
        # - White cab: bright white (r > 180, g > 180, b > 180)
        # - Black grille: dark (r < 60, g < 60, b < 60)
        # - Wheels and chassis at bottom
        # Surrounding:
        # - Above: sky / crane (sky is blue with r < 160, b > 200, y < 10)
        # - Left: background crane/light flare (x < 15 and bright yellow/white flare)
        # - Right: stacked containers (red/navy containers)
        # - Bottom: asphalt road (y > 175 is road asphalt)
        is_truck = True
        
        # Above the container:
        if y < 8:
            is_truck = False
        # Left of the container:
        elif x < 5 and y < 130:
            is_truck = False
        # Right of the cab:
        elif x > 188:
            is_truck = False
        # Below the tires:
        elif y > 172:
            is_truck = False
            
        if is_truck:
            t_mask_pixels[x, y] = 255

truck_mask = truck_mask.filter(ImageFilter.GaussianBlur(1.0))
truck_crop.putalpha(truck_mask)
truck_crop.save("public/images/hero-truck.png")
print("Saved hero-truck.png")
