import os
from PIL import Image

def halve_image_size(image_path):
    with Image.open(image_path) as img:
        # Calculate the new size
        new_size = (img.width // 2, img.height // 2)
        # Resize the image
        resized_img = img.resize(new_size, Image.LANCZOS)
        # Save the resized image
        resized_img.save(image_path)

def halve_images_in_folder(folder_path):
    # Iterate through all files in the folder
    for filename in os.listdir(folder_path):
        if filename.endswith(".webp"):
            file_path = os.path.join(folder_path, filename)
            print(f"Processing {file_path}")
            halve_image_size(file_path)

if __name__ == "__main__":
    halve_images_in_folder(r"C:\Users\c1bra\Documents\GitHub\website\public\photography_webp")
    print("Processing complete.")
