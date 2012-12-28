---
layout: post
title: Building Mobile Websites
published: false

---
Designing and Developing for the mobile web is a tricky process that requires fore thought, patience and flexibility. The major issues that you have to deal with are multiple-platforms, browsers with poor HTML/CSS support and various small screen sizes.

-general strategy
-segments
-design considerations
-general advice

SEGMENTATION
-low end
Basic XHTML markup, maximum screen width 176px, basic CSS support (text color, background color, font size) no JavaScript. 

-mid range
Basic XHTML markup, average screen width of 240px, medium CSS support (box model, images), basic JavaScript support (validation, redirection, dialog windows)

-high end
XHTML or HTML 4 markup, aveage screen width of 240px, advanced CSS, support (similar to desktops), Ajax and DOM support, optional touch support, optional orientation change support (for an average screen width of 320px)

-advanced smartphones
HTML 5, large screen size and high resolution, touch support, support for CSS extensions (animations, effects) and Ajax, storage, geolocation

-old devices (probably won't have to support this)
WML

SEGMENTATION METHODS
-ua string detection
-CSS media queries
-JavaScript

GENERAL STRATEGY
1. Identify as many phones as possible and categorize them into the groups above. 
2. Build an outline of the information for each page and build our markup around that. 
3. Build a design for each level of phones we have around that markup and avoid too much variation. 
4. Build a segmentation platform based on the list. 
5. Test and revise. 

DESIGN CONSIDERATIONS
-width
The best way to deal with multiple width browsers is to align most of the elements to the left and then as the browser gets bigger let elements expand out to the right. Trying to get everything to scale based on screen size is impractical and potentially risky.

An extra caveat to all of this is to stay away from elements that highly rely on boxing into a particular width. In this case staying away from borders is highly recommended.  

-vertical layout
Stacking items is the way to go, on low/mid range devices the best/only way to create columns or elements that are side by side is with tables which is prone to failure. Sometimes images can be floated left or right but that is about it. 

-typography
We need to standardize the font-size, color and line height across Sprint mobile sites and stick to it. My recommendation is for 15px/1.3em #333. This is going to be legible and fits within the Sprint web guidelines

-text images
These should generally be avoided because some browsers will downsample images (making them look pixelated and colors wrong), large images take longer to download and if a client has images turned off they will miss the message. 

-large amounts of text
These should be broken up into multiple pages if there's a lot of text. 

-background colors and images
Background images must be avoided except on high-end/advanced devices. In place of them we can use background colors. 
 
-navigation features
For Sprint we have a pretty consistent footer navigation and a very flat site map so for now we don't have to worry to much. In the future if these sites grow we may want to reconsider how we build a nav into sites. 

Additionally, it is in the best interest of the us to continue using the '<BACK' design pattern and we may want to consider using a 'Go To Top of the Page' pattern as well.

GENERAL ADVICE
-provide a link back to a desktop version if there is one
-compress images, 3G isn't that fast