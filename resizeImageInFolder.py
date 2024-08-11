from PIL import Image
import os

def scale_images(folder_path, scale_percent):
    # Ensure the scale_percent is between 1 and 100
    scale_percent = max(1, min(100, scale_percent))
    scale_factor = scale_percent / 100.0

    # Create a 'scaled' folder if it doesn't exist
    output_folder = os.path.join(folder_path, 'scaled')
    os.makedirs(output_folder, exist_ok=True)

    # Iterate through all files in the folder
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('.jpg', '.jpeg')):
            # Open the image
            img_path = os.path.join(folder_path, filename)
            with Image.open(img_path) as img:
                # Calculate new dimensions
                width, height = img.size
                new_width = int(width * scale_factor)
                new_height = int(height * scale_factor)

                # Resize the image
                resized_img = img.resize((new_width, new_height), Image.LANCZOS)

                # Save the scaled image
                output_path = os.path.join(output_folder, filename)
                resized_img.save(output_path, quality=95)

                print(f"Scaled: {filename}")

    print("All images have been scaled.")

if __name__ == "__main__":
    folder_path = r'C:\Users\c1bra\Documents\GitHub\website\public\bruh_2'  # Replace with the path to your folder
    scale_images(folder_path, 50)
