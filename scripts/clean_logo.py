from PIL import Image, ImageDraw

img = Image.open("public/images/tomphil-logo.png").convert("RGBA")
w, h = img.size

# Let's create a smooth alpha mask for the outer circle
mask = Image.new('L', (w, h), 0)
draw = ImageDraw.Draw(mask)

# The badge is slightly wider than tall: left/right wings of the ribbon extend slightly
# Let's check bounding box of non-transparent pixels
bbox = img.getbbox()
print("BBox:", bbox)

# Create a clean mask based on color and boundary
datas = img.getdata()
new_data = []
for item in datas:
    # If the pixel is close to the yellowish/greenish fringe (r > 200, g > 200, b > 180)
    if item[0] > 190 and item[1] > 200 and item[2] > 180:
        new_data.append((255, 255, 255, 0))
    elif item[3] == 0:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)

img.putdata(new_data)
img.save("public/images/tomphil-logo.png")
print("Cleaned fringe on tomphil-logo.png")
