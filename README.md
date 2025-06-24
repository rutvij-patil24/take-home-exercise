# QuaverEd Take Home Exercise

# Constitution Preamble Word Counter

## Overview

A JavaScript-based web application that analyzes the US Constitution Preamble to count words based on specific criteria. The application provides an interactive interface where users can select different counting options and see both numerical results and visual highlighting of matching words in the text.

## How to Run

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/rutvij-patil24/take-home-exercise.git
   ```

2. Navigate to the project directory and open `index.html` in any modern web browser.

3. The application will load automatically - simply check the boxes to see word counts and highlighting.

## Technical Approach

I began by selecting JavaScript for the core functionality and decided to create a simple HTML webpage that would display the Preamble text with checkboxes below for the three counting tasks. For styling, I chose Bootstrap CDN for easy component styling and spacing, along with Google Fonts (Montserrat and Poppins) for typography. The application structure focuses on user experience with dynamic result display and visual feedback through word highlighting in the original text.

## Problems Encountered & Solutions

I started by building the HTML layout and CSS styling using Bootstrap classes to create a clean, responsive interface. Once the layout was ready, I began developing the JavaScript functionality in `wordCount.js`. Initially, I hid the results section and made it appear only when checkboxes were selected.

My first approach was more traditional, where I split the preamble text into individual words, stored them in an array, and then looped through it to check the first and last characters. While this worked perfectly, I realized it wasn't the most efficient solution since I was creating intermediate arrays and performing multiple iterations.

After reconsidering the approach, I decided to implement a regex-based solution that allowed me to directly pattern-match words using expressions for words starting with 't' and ending with 'e'. This regex approach was significantly more performant because it eliminates the need for intermediate arrays and reduces multiple loops into single pattern-matching operations. The overall code also became cleaner and more maintainable.

Once the core functionality was working properly, I decided to enhance the user experience by going beyond just displaying numbers. I implemented a visual highlighting system with a color-coded approach where each category gets its own distinct visual treatment - blue underlines for words starting with 't', green overlines for words ending with 'e', and purple text color for words that meet both criteria.

This design choice serves multiple purposes: it provides immediate visual feedback so users can verify the accuracy of the counts, makes the application more interactive and engaging, and helps users understand exactly what the algorithm is detecting. The different visual styles also handle overlapping cases elegantly - for instance, if a word like 'the' appears, users can see both the blue underline and green overline along with the purple text, making it clear why it's counted in multiple categories. This approach transforms what could have been a simple numerical output into an engaging interface that builds user confidence in the results while making the application much more intuitive and transparent.

## Project Structure

```
take-home-exercise/
├── index.html          # Main HTML file with application structure
├── index.css           # Custom CSS styles and component theming
└── wordCount.js             # JavaScript functionality and word analysis logic
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3 (CDN)
- Google Fonts (Montserrat & Poppins)
- Regular Expressions (Regex)
