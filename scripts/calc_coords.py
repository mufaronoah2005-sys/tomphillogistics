from PIL import Image

img = Image.open("public/images/hero-clean-bg.jpg")
w, h = img.size
print(f"Hero dimensions: {w}x{h}")

# The airplane is approximately in x: [480, 780], y: [10, 140]
# In percentage of 1024x297:
# x%: 480/1024 = 46.875% to 780/1024 = 76.17%
# y%: 10/297 = 3.36% to 140/297 = 47.13%

# The truck is approximately in x: [455, 650], y: [95, 275]
# x%: 455/1024 = 44.43% to 650/1024 = 63.47%
# y%: 95/297 = 32.0% to 275/297 = 92.59%

print(f"Airplane box: x: {480/w*100:.2f}% to {780/w*100:.2f}%, y: {10/h*100:.2f}% to {140/h*100:.2f}%")
print(f"Truck box: x: {455/w*100:.2f}% to {650/w*100:.2f}%, y: {95/h*100:.2f}% to {275/h*100:.2f}%")
