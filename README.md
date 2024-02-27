# _Portfolio_

#### By _**Patrick Dolan**_

#### _A portfolio website built in React including my projects and some background information._

## Deployed Site

[Deployed Site](https://patrickdolan.dev/)

## Technologies Used

* _React.js 18_
* _Material UI_
* _EmailJs_
* _React-Router_

## Description

_A portfolio website for myself. This site includes information on me and my coding projects as well as useful links to my social accounts._

## Devlog

Challenge 1:  
Create a skills section using SVGs.  

I've used the standard image types you run into often enough before things like jpegs, pngs, and gifs but wanted to try my hand at something new and learned a bit about SVGs. Vector graphics have always been something I wanted to learn about since they're infinitely scalable and from what I've read about SVGs they're incredibly efficient too.
 
I felt the need to do a good bit of research on SVGs and the different ways you can use them since I had never touched them before. I found a few different methods, some involving downloading dependencies like SVGR, using an image tag with an src prop, or creating a component for the SVG and importing it into your other components.
 
Creating components sounded like the most interesting method to me and since I found some info on SVGR working under the hood of create react app, which is what this project was built with, I decided this would be my method of using them. The only thing I really kept forgetting was to change the prop names in the svg tags to be camelcasing.

Challenge 2:  
Create a functioning interactive contact form.  

Creating a contact form was something I had done before but never got connected and actually ran to get an email response. I also hadn't actually used MUI to create a form before so I was excited to see what I could build and how it would look. I ended up deciding to build a simple form with just a name, email, and message. I wanted to explore more of the MUI field types but decided I should focus on function and the site needs not my desire to explore MUI.

To facilitate the form without needing to build a back end I did some googling and found EmailJS. I read through the docs and it seemed easy enough to use. I skimmed through a YouTube video and decided to jump in with it. It was quite easy to set up and get running but I felt like the form needed to give the user some kind of confirmation that the message was sent or that it had failed.

Thus I started working with MUI Snackbars. Snackbars were the most challenging part of the project and I probably sent myself about 10 emails before deciding to comment out the email code and put in a few alerts to test instead. Getting the snackbar to show was easy but setting up the auto-hide system to make it fade away after a specific time just didn't want to work. It ended up being a simple state issue with my useState hook and its use in the function that handled closing dialog.

Challenge 3:  
Set up links to work like anchors

I have experience with react-router and naturally decided to look into using it for this project as well. The big difference here is that I'm not conditionally rendering anything so instead of taking the user to different pages I wanted anchor functionality to smoothly transition the user from point to point.
 
I had to do some digging on this type of functionality and found a solution in the react router hash link package on npm. It does exactly what I wanted it to do and has a few useful props you can use to make links act instantly or smoothly. This was one of those tasks I thought would be a lot harder but feel like I got lucky with a solution being so quick and easy to find.
 
I think the biggest challenge here was styling the links so they wouldn't look like links and retaining their button feel with MUI. This was solved easily enough but it did take me a bit of time just working through trial and error with how I was nesting the jsx tags and figuring out how to add my styling.

## Known Bugs

* _No known issues_

## Contact Me

_Let me know if you run into any issues or have questions, ideas or concerns:_
_dolanp1992@gmail.com_

## License

_MIT_

Copyright (c) _2024_ _Patrick Dolan_
