**Interactive Photo Gallery**

This project is an interactive photo gallery designed to be responsive and work seamlessly on both desktop and mobile devices. 
It includes features such as image thumbnail navigation, full-size image viewing, and other interactions specified in the designs.

**Features**
•  Responsive design for desktop and mobile devices.

•  Full-size image viewing with overlay.

•  Image scaling and shadow effect on hover.

•  Smooth transitions and animations.


**Setup Instructions**
**Prerequisites**
Make sure you have the following installed:

•	A web browser (e.g., Chrome, Firefox, Safari)

•	A code editor (e.g., VS Code, Sublime Text)

****Project Structure****
The project consists of the following files:
•	index.html: The main HTML file.

•	styles.css: The CSS file for styling the HTML content.

•	script.js: The JavaScript file for interactivity.

**Approach**

**1. Structure**
The HTML structure includes a gallery container (.gallery) that holds the thumbnails and the full-size image.
 The thumbnails are displayed in a flex container (.thumbnails), and the full-size image is displayed in a separate container (.full-image).
 An overlay (.overlay) is used for full-size image viewing.

**3. Styling**
   
•	Reset and Body Styles: Basic reset for margin, padding, and box-sizing, along with setting the background color and font family.

•	Gallery Layout: The gallery is styled to be centered with flexbox. Thumbnails are displayed in a wrap container with a hover effect.

•	Full Image and Overlay: The full-size image is centered and has a click event to trigger the overlay.
 The overlay is positioned fixed and covers the entire viewport, with a close button to hide it.
 
**5. Interactivity**
   
JavaScript is used to handle the interactivity:
•	Thumbnail Click: Clicking a thumbnail updates the source of the full-size image.

•	Full Image Click: Clicking the full-size image shows the overlay with the same image.

•	Overlay Close: Clicking the close button or the overlay background hides the overlay.

**Conclusion**
This setup provides a responsive and interactive photo gallery that works seamlessly on both desktop and mobile devices.
 It includes thumbnail navigation, full-size image viewing, and smooth transitions, ensuring a user-friendly and visually appealing experience.
