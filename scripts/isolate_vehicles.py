import os
from PIL import Image, ImageFilter, ImageDraw

# Load hero background
hero_path = "public/images/hero-clean-bg.jpg"
img = Image.open(hero_path).convert("RGBA")
w, h = img.size

# ========================================================
# 1. ISOLATE AIRPLANE
# ========================================================
# Airplane bounds in 1024x297 image:
# x: 470 to 785, y: 0 to 135
ap_box = (470, 0, 785, 135)
ap_crop = img.crop(ap_box)
aw, ah = ap_crop.size

# Create transparency mask for airplane
# The sky around the airplane has blue hue (b > r + 20 and b > g + 5) or bright cyan
ap_rgba = ap_crop.copy()
pixels = ap_rgba.load()

# Let's inspect background fill:
# In the sky region, we can determine background vs airplane
# Airplane fuselage is white (r>180, g>180, b>180 and |r-g|<30), 
# wings are grey/white, engines are dark grey, tail is dark navy blue
for y in range(ah):
    for x in range(aw):
        r, g, b, a = pixels[x, y]
        
        # Check if sky pixel:
        # Sky is distinctly blue: b > r + 15, and r < 195
        # Also cloud white vs plane white:
        # Plane has distinct structural lines and dark landing gear / engine / tail
        is_sky = False
        if b > r + 25 and r < 190:
            is_sky = True
        elif b > r + 15 and b > g + 5 and r < 185:
            is_sky = True
        elif y < 20 and (b > 180 and r < 170):
            is_sky = True
            
        # Top-right corner is clear sky
        if is_sky:
            pixels[x, y] = (r, g, b, 0)

# Save rough airplane
ap_rgba.save("public/images/hero-airplane-raw.png")
print("Saved hero-airplane-raw.png")
