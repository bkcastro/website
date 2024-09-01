import os

def rename_files_in_folder(folder_path):
    # Get a list of all files in the folder
    files = sorted(os.listdir(folder_path))

    # Filter out directories from the list
    files = [f for f in files if os.path.isfile(os.path.join(folder_path, f))]

    # Rename each file
    for i, filename in enumerate(files, start=1):
        # Get the file extension
        file_extension = os.path.splitext(filename)[1]

        # Create the new filename
        new_name = f"{i}{file_extension}"

        # Get the full path for old and new filenames
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_name)

        # Rename the file
        os.rename(old_file, new_file)
        print(f"Renamed: {filename} -> {new_name}")

# Replace 'your_folder_path_here' with the path to your folder
folder_path = 'public\photography_webp'
rename_files_in_folder(folder_path)
