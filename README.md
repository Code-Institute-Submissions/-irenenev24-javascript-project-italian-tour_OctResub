# **Italian Tours 2020.**

This website is used to promote three different areas in Italy.
Rome, Abruzzo and Sicily.

## UX

## Who is this website for?

* This website is for people who are thinking of visiting Italy and want more information.
* This website is for people based worldwide looking to travel for a holiday or extended stay.
* Three different types of holidays:
  - Rome - City break
  - Abruzzo - Nature lovers holiday.
  - Sicily - Beach lovers holiday
* It is aimed at people aged 18+ with disposable income.

### What do visitors want?

* Clear information on the three featured areas.
* Information on attractions in each place.
* Information on hotels and how to book.
* IClear contact form to get more information if required.
* A trustworthy, easy to navigate site that gives clear information about the  
  bar.
* Multiple ways to contact the page admin's including links to social media pages.


### Business Goals:

1. Build on and extend the awareness around these areas.
1. Showcase attractions and hotels in each area. 
1. Promote Italy as a destination for every kind of holiday, relaxing beach break in Sicily.
   Nature lovers holiday in wild Abruzzo and finally a city of culture break in Rome.
1. Using links to wikipedia and tripadvisor, potential clients have access to multiple information 
   sources to help plan their holiday.
1. Promote social media pages.

### Customer Goals:

#### First time customer

1. Is this site trusthworthy and easy to navigate?
1. Is the purpose of this site clear?
1. Do I understand the information provided by the site?
1. Is the information provided relevant to my needs?
1. How can I contact them to ask for more information?
1. Can I see some of the sights I can expect to see in these areas?
1. Can I look at potential hotels?
1. Can I follow this site on social media for more updates?

#### Repeat customers

1. If I have more questions can I easily contact them?
1. Can I leave an online review?
1. Can I use this site to book a hotel?
1. Can I follow this business on social media?

### Strategy

* An easy to navigate website to promote the tourism web page and its social media accounts.
* Promote the three regions to help boost tourism in the specific areas by highlighting the 
  attractions located in each.

### Scope

* How to book hotels?.
* What the regions have to offer? 
  Rome - City break
  Abruzzo - Nature lovers holiday.
  Sicily - Sun worshippers holiday.
* A gallery to show pictures of the items on offer here.
* How to contact for further information.
* A review section.
* An about section to give a brief history of the business.

### Structure

* A minimalist site with clear sections for each region and hotels for those regions.
* A clear easy to use contact form and social media links.
* Good flow through the page so the user knows what to expect and how to find information.
* An easy to find and use contact form, with a button on the hero image that links straight
  to the contact form making it more convienent for repeat users.
* Multiple social media links to appeal to more users.

### Skeleton

* Nav bar featuring links to various areas in the site.
* Hero image with a welcome paaragraph about Italy featuring a contact button for ease of use..
* Clickable links to tripadvisor and wikipedia for hotel bookings and info.
* Contact for with email address, message, phone number, name.
* Section with address, e-mail and telephone number.
* Footer with social media links, legal info.

### Surface

* Colors used:
 - #36454f charcoal,
 - #ffffec cream,
 - #f2f2f2 off-white,
 - rgb(193, 238, 253) lightblue,
 - rgb(0, 204, 255) blue,
 - red 
* Fonts used:
 - "Dancing Script", cursive
 - "Roboto", sans-serif
* Images:
 - All from Unsplash.com

## Features 

### Hero Image
* A home page with a hero image and company logo in the nav bar.
* About us section with details of opening hours, address, e-mail address and phone number.
* A review section featuring customers reviews and images.

### Rome
* Hero image with info text.
* Image with link to Wikipedia info page for attractions.
* Image with link to Tripadvisor info page for hotels.

### Abruzzo
* Hero image with info text.
* Image with link to Wikipedia info page for attractions.
* Image with link to Tripadvisor info page for hotels.


### Sicily
* Hero image with info text.
* Image with link to Wikipedia info page for attractions.
* Image with link to Tripadvisor info page for hotels.

### Contact Form
* Featuring an area for users to request info if needed.

### Google Map
* Interactive map featuring markers with info windows.
  
 ## Features left to implement

In the future I would like to build on to this site by adding:
  - An online booking system.
  - A section for users to post their pictures to the page.


## Technologies used:
* HTML5
* CSS3 
* Bootstrap 4
* JS
* jQuery
* Font Awesome
* Google Fonts
* Google Maps

### Testing

* W3Schools HTML/CSS validator. 
  - Picked up a few small errors eg: extra > and unclosed CSS tags in two areas.
    Fixed these issues and ran again. This returned a "Congratulations, no error found" message.
    ![w3schools-css-validator]("assets/images/screenshotw3s.png").

* Tested across multiple device sizes.
  - Found on smaller screen sizes (e.g: Galaxy Fold, iPhone 5,SE) the hero image and hero text were too large, 
    off center or at times took over the screen view. Also the reviewer images were distorted when skrunk down.
    After speaking with my mentor Brian Macharia, he suggested that maybe my image size was unsuitable for what 
    I was trying to do and how if I changed the size of my downloaded image it might suit better.
    I also added media queries at (max-300) and (max-400) to control the size of the text as the screen shrinks.

    - @media screen and (max-width: 400px) {       |       @media screen and (max-width: 300px) {
      .hero-text-h1 {                              |         .hero-text-h1{
          font-size: 3.4rem;                       |             font-size: 3rem;
          margin: 0;                               |              margin: 0;
        }                                          |           }
      }                                            |          }


  - Changing the image size also helped with the performance section in DevTool Lighthouse. My performance was 58 becasue my images 
    were too large. This is now 78 for the home page. 
    
* Also during testing I discovered that I needed to insert @media queries for my form and menu pages as they were not 
   responding correctly on small devices.
  - Form: 
     @media screen and (max-width: 800px) {
        input[type=text], input[type=email], select, textarea {
            width: 100%;
            margin-top: 0;
        }
        legend {
            font-size: 1.5rem;
        }
   }
  - Menu:
    @media screen and (max-width: 1200px) {
        .column {
            width: 100%;
        }
    }
    
* While doing a last test I noticed that my images on the small screen were too large to fit and so were sending my
   nav bar toggler icon to the left. About multiple attemps to resize the pics, which didnt work, I searched online and found an article 
   which suggested using flexbox to create a responsive gallery. This required rewriting the gallery code and adding media queries
   at two different screen sizes, (min-600px) and (min-1000px).
    
  -     @media screen and (min-width: 600px) {     |       @media screen and (min-width: 1000px) {
      .grid {                                      |         .cell {
          display: flex;                           |                width: 33%;
          flex-wrap: wrap;                         |                background-color: black;
          flex-direction: row;                     |                }
      }                                            |              }
      .cell {                                      |
          width: 50%;                              |
          background-color: black;                 |
            }                                      |
      }                                            |
   
   This causes the gallery to appear stacked in one single row on a phone screen,
   stacked in two rows on a tablet screen and as a grid of three rows on a desktop screen. 
   This also helped with the performance section of  DevTool Lighthouse which was at 68 but is now at 76.

* I also recieved feed-back about the font selection from friends who felt the font I had originally selected
   did not suit the site, so I changed it to "Courgette", cursive, "Roboto Slan", serif.

* While using DevTools Lighthouse it suggested I put description tags in the mate section. Also included are tag
  words which help with searches and accessibility.

### User stories ####################

* Customer Goals
 - 
* Business Goals 
 - 
* Repeat Customer Goals
 



 ### Manual Testing Links
 
 - 
 - 
## Tested on
- Windows 10
- Microsoft Edge
- Apple Macbook Project
- Samsung Galaxy Tab A 8.0
- Various devices screens available on DevTools

### Deployment 

## Deploy from GitHub
 - Sign into GitHub and access your repositories.
 - Select desired repository.
 - Once clicked on, this bring you to a code and deploy page which contains details of your READme.md, a description of the 
   repository details and other info.
 - Located near the top, under the repository name is a tool bar. At the end of this bar is a settings selector.
 - Click on settings and scrool down to GitHub Pages. Here you will click on the dropdown menu under source. (Currently showing "None"),
   click on this and select "Master", click save. Page will automatically refresh. Once refreshed, scroll down to find the link to your 
   website high-lighted in green.
 - Click on this or copy and paste into browser to access your site.

 ## Run project locally
 - If you have a GitHub account you will need to log in. If not you will need to sign up at https://www.GitHub.com/ to access this file.
 - To run project, go to the repository for that project and click on it.
 - Click the Green button to start the repositroy. This should only be clicked once as each time it is clicked it opens a new 
   copy of the GitHub workspace.
 - The workspace is now open to be viewed and edited locally.
 - 

## To clone repository so it can be used in different editors effectively
 - To clone select desired repository.
 - Once clicked on, this bring you to a code and deploy page which contains details of your READme.md, a description of the 
   repository details and other info.
 - Located beside the green gitpod button is a button with "Code" written on it. Here you will find a drop-down menu,
   that when selected gives you the option to clone or download the repository file.


### Credits

## Code used
* For my navbar I used code from W3Schools/bootstrap with jquery and popper.js.
* 
* CSS for the row and column class for the menu page was taken from W3Schools.
* The CSS for my hero-text was taken from W3Schools and amended to suit.
* 

## Images
* All images used in this project were taken from Unsplash.com
* All icons taken from font awesome.

### Content
* Content for this Milestone 2 Project was created by myself, Irene Neville, with help from the Code Institute
  and my mentor Brian Macharia, and other exceptions previously stated. 

### Media
* All media from Unsplash.com

### Acknowledgements

I would like to take this opportunity to thank my mentor Brian Macharia for all his help during this project
and to Anna Gilhespy and Haley Schafer for ideas on how to complete a READMEmd.

I would also like to thank the student support team, all on the CI Slack community and everyone at Code Institute for helpful
advise, videos and content.