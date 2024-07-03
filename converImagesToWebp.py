import os
from PIL import Image, ExifTags

def rotate_image_based_on_exif(img):
    try:
        # Get the orientation tag code
        for orientation in ExifTags.TAGS.keys():
            if ExifTags.TAGS[orientation] == 'Orientation':
                break

        # Get EXIF data from image
        exif = img._getexif()
        
        if exif is not None:
            # Get orientation value and rotate accordingly
            exif = dict(exif.items())
            orient = exif.get(orientation)

            if orient == 3:
                img = img.rotate(180, expand=True)
            elif orient == 6:
                img = img.rotate(270, expand=True)
            elif orient == 8:
                img = img.rotate(90, expand=True)
    except (AttributeError, KeyError, IndexError):
        # cases: image don't have getexif
        pass

    return img

def convert_images_to_webp(directory):
    # Define the new directory for WEBP images
    webp_directory = os.path.join(directory, "photography_webp")
    
    # Create the WEBP directory if it does not exist
    if not os.path.exists(webp_directory):
        os.makedirs(webp_directory)

    # List all files in the directory
    files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    image_files = [f for f in files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif'))]
    
    for index, filename in enumerate(image_files):
        filepath = os.path.join(directory, filename)
        with Image.open(filepath) as img:
            # Correct the orientation based on EXIF data
            img = rotate_image_based_on_exif(img)

            # Create the new filename and path in the WEBP directory
            new_filename = f"img_{index}.webp"
            new_filepath = os.path.join(webp_directory, new_filename)
            img.save(new_filepath, 'webp')

        print(f"Converted {filename} to {new_filename} in {webp_directory}")

if __name__ == "__main__":
    # Adjust the source directory path as needed
    source_directory = r"C:\Users\c1bra\Documents\GitHub\website\public\photography_jpg"
    convert_images_to_webp(source_directory)
    print("Conversion complete.")
