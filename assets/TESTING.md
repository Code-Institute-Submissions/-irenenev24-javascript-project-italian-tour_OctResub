# Manual Testing Links

## Tested on
- Windows 10
- Microsoft Edge
- Apple Macbook Project
- Samsung Galaxy Tab A 8.0
- Various devices screens available on DevTools


## Manual Testing

### Navigation Bar.
- For my navigation bar, I tried to use a basic nav bar design but decided to go with a version from w3schools that used javascript to make the nav bar responsive. 
I edited the code to change the color of the background. 
- I had to change some of the % for the linear-gradient image as the white section was undetectable. 
  Upon running the code again, I was happy with the result.

### Welcome Image.
- I used an image taken from Unsplash.com.
- I found that the image was very large and I found it difficult to resize it on smaller screens, I tried to resize using media queries but this led to the image looking out of place. I changed to a different image from the same site. I found this image was very out of focus. I tried a third image that just looked too dark for the site and I felt gave it a moodier tone than I wanted. I select the image I have now. This image was brighter and brought a better atmosphere to the site.
I tried to use the same code I used for the Rome, Abruzzo and Sicily images but I found that with this image it cut the top of the image off. So I searched the internet and came up with a solution from geeks4geeks.com which helped me center the image and 
overlay text on top. 

* The contact button on the welcome image was blue. I wanted to change this to a light green to match the nav bar. It wouldn't responding at first but I found when I added "!important" to the code it changed to the desired color. 
I added the contact button in the welcome image as a quick way to navigate to the contact form at the bottom of the page.

### Cards.
- I used cards from w3schools and edited the look and content.
- I added images  taken from unsplash and links to the wikipedia pages for each tourist attraction and for tripadvisor for the hotels.
- I found these to be responsive across all screen sizes.

### Contact Form
- Form was not sending when 'send message' button was pressed. I tried a few different ways of fixing this but ultimately I consulted tutor support who pointed me in the direction of my acc on emailJS. I realsied that the content I was trying to send did not match the content that the emailJS account was set up to recieve. 
( Hello {{to_name}},

You got a new message from {{from_first}} {{from_last}} who can be contacted at email: {{from_email}},

phone number: {{from_number}}:

{{from_message}}

Best wishes,
EmailJS team )

I realised I was trying to send {{ from_email_address }} instead of {{ from_email }},
I also hadnt set up the emailJS template to collect phone number information.

Once these were resolved I sent a new message and checked my inbox and the email was there with the correct information.

### Back to top button.
- Added as a means to navigate throught the site quickly.
Taken from w3schools and edited to suit the color, size etc that I wanted.
Found to be effective.

### Easy Site Navigation
- Throughout the site I have added features to make navigation through the site quick and easy. 
* 'Contact us' button in the hero image that links to the contact form.
* Back to top button that links to the top of the site.
* 'Go to map' link in each div that will link to the map. In future versions I would like this to be
 a Javascript button that will connect to and open the relevant infoWindow using an onclick event.
* 'Click here for more info' button on the infoWindows of the map linking to the appropiate information card.
* Navigation back that will take you to the selected section when clicked.


## User stories 

### Customer Goals

#### First Time Customer
* Clear purpose for the site. 
* Intuitive navigation throughout the site, responsive on smaller screens.
* Clear information on attractions in each place linking to a page that gives detailed information on the specific attraction.
* Clear information on hotels and how to book using a link to the relevant TripAdvisor page.
* Clear contact form to get more information if required which sends contact information through to emailJS account.
* A trustworthy, easy to navigate site that gives clear information about the featured areas.
* Multiple ways to contact the page admin's including links to social media pages and a contact form.

#### Do First Time Customer Goals meet requirements?
- I believe that the aim of this site is clear with clear information and pathways to more information and booking site.
- Navigation is intuitive throughout the website and various features specified above help the user to transverse through the site with ease.
- Clear information is available for each of the attractions that are featured on the site. 
- Clear, easy to use link to TripAdvisor available for each hotel.
- Clear contact form is available for users to contact the site.
- I find the site to be trustworthy, friends who tested the site for me also said it was a trustworthy easy to navigate site with a clear purpose.
- All social links found to be working making using social media a possibilty if this were a real company.

#### Repeat customers
* If I have more questions can I easily contact them?
* Can I use this site to book a hotel?
* Can I follow this business on social media?

#### Do Repeat customer goals meet requirements?
- Yes the site can be easily contacted via contact form.
- Yes repeat customers can easily find a hotel and book using the link to TripAdvisor.
- Yes were this a real company all social media links are available in the footer section.

### Business Goals

#### Owner
* Build on and extend the awareness around these areas.
* Showcase attractions and hotels in each area. 
* Beach holiday in Sicily, nature lovers holiday in wild Abruzzo and finally a city of culture break in Rome.
* Using links to wikipedia and tripadvisor, potential clients have access to multiple information 
   sources to help plan their holiday.
* Promote social media pages to build awareness of these areas and the site.

#### Do the business goals meet requirements
* I believe that the site does build more awareness around these areas with potential to build 
an even large site using more areas in Italy, Europe and beyond.
* I believe it does showcase the attractions and hotels using cards with info, a map with infoWindows and links
to relevant sites for more info and booking. 
* 
* Links are in working order and go to relevant pages so the user can easily book which may encourage the user 
to return for more information and to book through this site.
* Social media links are all active and would help to promote the site. 


## Validation
[HTML](https://validator.w3.org/)
[HTML](assets/images/html-validator.png)


* Ran HTML code through HTML Validator.
 - Two warnings for "The type attribute is unnecessary for JavaScript resources". Deleted both after check they really were not necessary.
 - Warning for about section lacks heading. As this section only contains an image and a short paragraph, a heading is not necessary.
 - Received an error because I had a-tag as a descendant of the button element. Styled the a-tag as a button and deleted the button element.

[CSS](https://jigsaw.w3.org/css-validator/)
[CSS](assets/images/css-validation.png)

* Ran HTML code through HTML Validator.
 - No errors found.

[JAVASCRIPT](https://jshint.com/)

* Passed all code through JSHINT.
 - No errors found.

### Code

I used a code beautifier to help format code before submission.