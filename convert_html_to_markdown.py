import html2text
import sys
import os

def convert_html_to_markdown(html_content):
    h = html2text.HTML2Text()
    h.ignore_links = False  # Keep links
    h.ignore_images = False # Keep images
    return h.handle(html_content)

def main():
    html_file = 'index.html'  # Change this to your HTML file name
    markdown_file = 'README.md'  # Output markdown file

    if os.path.exists(html_file):
        with open(html_file, 'r') as file:
            html_content = file.read()

        markdown_content = convert_html_to_markdown(html_content)

        with open(markdown_file, 'w') as md_file:
            md_file.write(markdown_content)
        print(f"Successfully converted {html_file} to {markdown_file}")
    else:
        print(f"HTML file {html_file} not found.")

if __name__ == "__main__":
    main()
