import os
from PIL import Image, ImageChops, ImageFilter, ImageOps

os.makedirs("public/images", exist_ok=True)

# 1. Process Logo from media_1789201856533.png
logo_path = r"C:\Users\user\.gemini\antigravity\brain\1354f7ad-960f-4c4a-8f81-c38d881969b7\.user_uploaded\media_1789201856533.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    w, h = img.size
    print(f"Original logo image size: {w}x{h}")
    
    # The logo badge is centered horizontally and vertically
    # Let's find the bounding box of non-white / non-light-gray pixels in the central region
    # Center is approximately w//2, h//2
    # In a 1280x720 image, the logo is roughly in x:[360, 920], y:[140, 650]
    box = (360, 140, 920, 650)
    cropped_logo = img.crop(box)
    
    # Save a high-res cropped logo
    cropped_logo.save("public/images/tomphil-logo-raw.png")
    
    # Let's make the background transparent
    # The background is very light (near white #FDFDFD or #FFFFFF)
    datas = cropped_logo.getdata()
    new_data = []
    for item in datas:
        # If pixel is very close to white/light-gray background of WhatsApp
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    
    cropped_logo.putdata(new_data)
    cropped_logo.save("public/images/tomphil-logo.png")
    print("Saved public/images/tomphil-logo.png")

# 2. Process Hero & Fleet Images from media_1789201844037.jpg
ref_path = r"C:\Users\user\.gemini\antigravity\brain\1354f7ad-960f-4c4a-8f81-c38d881969b7\.user_uploaded\media_1789201844037.jpg"
if os.path.exists(ref_path):
    ref_img = Image.open(ref_path)
    rw, rh = ref_img.size
    print(f"Reference image size: {rw}x{rh}")
    
    # Hero section is roughly from y: 88 to y: 525 (in a ~1000px height image)
    # Let's inspect proportion: rw x rh
    hero_top = int(rh * 0.09)
    hero_bottom = int(rh * 0.525)
    hero_crop = ref_img.crop((0, hero_top, rw, hero_bottom))
    hero_crop.save("public/images/hero-logistics-bg.jpg", quality=95)
    print("Saved public/images/hero-logistics-bg.jpg")
    
    # Customs fleet strip (the cars & port containers section in bottom half)
    # In the reference image, the car fleet is around y: 0.73 to 0.94, x: 0.35 to 0.68
    fleet_box = (int(rw * 0.35), int(rh * 0.73), int(rw * 0.68), int(rh * 0.94))
    fleet_crop = ref_img.crop(fleet_box)
    fleet_crop.save("public/images/customs-fleet.jpg", quality=95)
    print("Saved public/images/customs-fleet.jpg")

    # Save full og-preview
    ref_img.save("public/images/og-preview.jpg", quality=90)
    print("Saved public/images/og-preview.jpg")

print("Asset processing complete!")
