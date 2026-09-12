from PIL import Image, ImageDraw

img = Image.open("public/images/hero-logistics-bg.jpg").convert("RGB")
w, h = img.size

# We want to create a clean backdrop on the left half for text
# Gradient from deep navy (10, 25, 49) at x=0 fading out around x=w*0.52
overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
draw = ImageDraw.Draw(overlay)

navy_rgb = (10, 25, 49)

fade_end = int(w * 0.52)
fade_start = int(w * 0.35)

for x in range(w):
    if x < fade_start:
        alpha = 255
    elif x < fade_end:
        # linear interpolate alpha from 255 down to 0
        ratio = (fade_end - x) / (fade_end - fade_start)
        alpha = int(255 * ratio)
    else:
        alpha = 0
    draw.line([(x, 0), (x, h)], fill=(navy_rgb[0], navy_rgb[1], navy_rgb[2], alpha))

result = Image.alpha_composite(img.convert("RGBA"), overlay)
result.convert("RGB").save("public/images/hero-clean-bg.jpg", quality=95)
print("Saved public/images/hero-clean-bg.jpg")
