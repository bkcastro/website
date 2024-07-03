import os
from PIL import Image

def create_thumbnails(directory, scale_factor=0.25):  # 25% of the original size
    # Define the directory to store thumbnails
    thumbnail_directory = os.path.join(directory, "photography_webp_thumb")
    
    # Create the thumbnail directory if it does not exist
    if not os.path.exists(thumbnail_directory):
        os.makedirs(thumbnail_directory)

    # List all files in the directory
    files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    
    # Filter files to include only .webp images
    image_files = [f for f in files if f.lower().endswith('.webp')]

    # Process each image
    for index, filename in enumerate(image_files):
        filepath = os.path.join(directory, filename)
        try:
            with Image.open(filepath) as img:
                # Calculate the new size based on the scale factor
                original_size = img.size
                new_size = (int(original_size[0] * scale_factor), int(original_size[1] * scale_factor))

                # Resize the image to the new size
                img.thumbnail(new_size)

                # Define the path for the thumbnail with index
                thumbnail_filename = f"img_thumb_{index}.webp"
                thumbnail_path = os.path.join(thumbnail_directory, thumbnail_filename)
                
                # Save the thumbnail in .webp format
                img.save(thumbnail_path, 'webp')
                print(f"Thumbnail created for {filename} at {thumbnail_path}")
        except Exception as e:
            print(f"Failed to create thumbnail for {filename}. Error: {e}")

if __name__ == "__main__":
    create_thumbnails(r"C:\Users\c1bra\Documents\GitHub\website\public\photography_webp")
    print("All thumbnails created successfully.")
