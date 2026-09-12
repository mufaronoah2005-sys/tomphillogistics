from PIL import Image

logo_path = r"C:\Users\user\.gemini\antigravity\brain\1354f7ad-960f-4c4a-8f81-c38d881969b7\.user_uploaded\media_1789201856533.png"
img = Image.open(logo_path).convert('RGB')
w, h = img.size

# Let's inspect x range 250 to 800, y range 100 to 520
min_x, max_x = 800, 250
min_y, max_y = 520, 100

for y in range(100, 520):
    for x in range(250, 800):
        r, g, b = img.getpixel((x, y))
        # Deep navy blue of the emblem badge
        if r < 50 and g < 50 and b > 70:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Emblem bounds: left={min_x}, top={min_y}, right={max_x}, bottom={max_y}, width={max_x-min_x}, height={max_y-min_y}")
pad = 10
box = (min_x - pad, min_y - pad, max_x + pad, max_y + pad)
cropped = img.crop(box).convert("RGBA")

# Make background transparent
cw, ch = cropped.size
cx, cy = cw / 2.0, ch / 2.0
radius = min(cw, ch) / 2.0

datas = cropped.getdata()
new_data = []
for idx, item in enumerate(datas):
    px = idx % cw
    py = idx // cw
    dist = ((px - cx)**2 + (py - cy)**2)**0.5
    # The badge has a circular outline
    if dist > radius + 2:
        new_data.append((255, 255, 255, 0))
    elif item[0] > 230 and item[1] > 230 and item[2] > 230:
        # Check if inside emblem or outside
        # If far from center, it's outside background
        if dist > radius - 20:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    else:
        new_data.append(item)

cropped.putdata(new_data)
cropped.save("public/images/tomphil-logo.png")
print("Saved public/images/tomphil-logo.png")
