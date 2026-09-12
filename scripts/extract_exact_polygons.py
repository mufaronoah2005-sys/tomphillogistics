from PIL import Image, ImageDraw, ImageFilter

hero = Image.open("public/images/hero-clean-bg.jpg").convert("RGBA")
w, h = hero.size

# ==========================================
# 1. AIRPLANE POLYGON MASK
# ==========================================
# Draw on 4x supersampled mask for ultra-smooth subpixel antialiasing
scale = 4
mask_plane = Image.new("L", (w * scale, h * scale), 0)
draw = ImageDraw.Draw(mask_plane)

plane_poly = [
    (768, 42), (760, 36), (730, 31), (700, 35), (660, 48), (628, 64),
    (606, 12), (598, 8), (590, 14), (588, 55), (575, 78), (530, 88),
    (484, 97), (488, 102), (535, 112), (560, 120), (562, 146), (582, 148),
    (585, 130), (605, 138), (620, 138), (630, 128), (655, 145), (672, 172),
    (690, 174), (692, 150), (740, 166), (780, 174), (778, 168), (735, 120),
    (715, 96), (745, 72), (766, 52)
]

scaled_plane_poly = [(x * scale, y * scale) for x, y in plane_poly]
draw.polygon(scaled_plane_poly, fill=255)

# Downsample with high quality Lanczos filter for perfect antialiasing
mask_plane = mask_plane.resize((w, h), Image.Resampling.LANCZOS)
# Subtle 0.5px blur for photographic edge blend
mask_plane = mask_plane.filter(ImageFilter.GaussianBlur(0.8))

plane_cutout = hero.copy()
plane_cutout.putalpha(mask_plane)
plane_cutout.save("public/images/plane-isolated.png")
print("Saved plane-isolated.png")

# ==========================================
# 2. TRUCK POLYGON MASK
# ==========================================
mask_truck = Image.new("L", (w * scale, h * scale), 0)
draw_truck = ImageDraw.Draw(mask_truck)

# Truck points:
# Container top-left, top-right, cab roof, windshield, front bumper, wheels, bottom chassis
truck_poly = [
    (455, 168), (455, 128), (460, 125), (538, 98), (542, 98),
    (544, 115), (555, 112), (632, 120), (642, 140), (648, 165),
    (650, 195), (650, 248), (646, 260), (625, 268), (605, 276),
    (575, 276), (560, 270), (520, 266), (490, 262), (465, 256),
    (455, 250), (455, 168)
]

scaled_truck_poly = [(x * scale, y * scale) for x, y in truck_poly]
draw_truck.polygon(scaled_truck_poly, fill=255)

mask_truck = mask_truck.resize((w, h), Image.Resampling.LANCZOS)
mask_truck = mask_truck.filter(ImageFilter.GaussianBlur(0.8))

truck_cutout = hero.copy()
truck_cutout.putalpha(mask_truck)
truck_cutout.save("public/images/truck-isolated.png")
print("Saved truck-isolated.png")
