# Manage Landing Page

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5).

Check out my other solutions on Frontend Mentor at [@kaseyvee](https://www.frontendmentor.io/profile/kaseyvee) or [frontend-mentor-challenges](https://github.com/kaseyvee/frontend-mentor-challenges).

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshots

#### Desktop View
![Desktop hero section](https://i.imgur.com/FOeLQug.png)

#### Mobile View
<p float="left">
  <img src="https://i.imgur.com/gZmbAFE.png" alt="Mobile hero section" width="305">
  <img src="https://i.imgur.com/wLU4Ehs.png" alt="Mobile testimonies section" width="305">
</p>

### Built with

- [React](https://reactjs.org/) - JS library
- Framer Motion - React animation library
- Sass
- Grid
- Flexbox
- Mobile-first workflow

### What I learned

The main challenge of this project were layout differences on different screens, and I felt quite proud of my ability to emulate the given designs. However, I've realized what all of my projects up until now have been lacking is accessibility. This isn't something I realized until the completion of this project, so it hasn't been completely optimized yet, but this is something I'd like to prioritize in future projects.

In the least, this website allows for keyboard navigation on all interactive elements, such as: navbar, mobile navbar, buttons, links, and the carousel.

I've also come to understand the importance of semantic HTML when it comes to accessibility- more importantly: screen readers. As tempting as it is to only work with divs, paragraphs, and spans, this only helps to alienate a significant audience. Grace Snow, an active member in the Frontend Mentor Slack community and accessibility advocate, provided a great list of automated accessibility checkers like:

- Google lighthouse
- W3C html validity checker
- Chrome extension: Accessibility Insights

This helps tackle the easiest issues. If you'd like to take it a step further, [The A11Y Project](https://www.a11yproject.com/checklist/) provides a great checklist that references [WCAG standards](https://www.w3.org/WAI/standards-guidelines/wcag/).
