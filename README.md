# Code-quiz
A time based quiz based on the concepts of JavaScript.


## Description

This application is a quiz that will validated the user's response after each selection by the user. If the user selects an incorrect answer, a time penalty is applied.

In creating this application the following 
- Variables were declared for the elements of the HTML/CSS that will be amended by the JavaScript as well as the different multiple choice options
- A timer was deployed which would automatically stop at 0 if the quiz is not completed before that - an if function was used here
- If the quiz is completed before zero, then the timer stops - this was done using ClearInterval.
- Functions linking to one another were used to cycle through each of the questions.
- Where a user got a question wrong, they were notified below the options that their selction was incorrect and also a time penalty is applied.
- The input function was used to provide a field for users ot enter their initials following the quiz.
- The textContent function was used to obtian the timer value to concatenate the intials and the score.
- The set/get function were used to sotre/retrieve the scores.

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Usage

To view the website please follow this link: (https://nt399.github.io/Code-quiz/)

To use the website, please follow the steps below:
1. When you open the application, the timer starts
2. Click the selected answer, the page will then move to the next question.
3. Enter your initials at the end and click submit.


![Screenshot of the website] https://github.com/NT399/Code-quiz/blob/main/assets/quiz%20website.PNG

## Credits

The following links were helpful for the completion of this project:
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- https://www.w3schools.com/jsref/prop_text_value.asp
- https://www.w3schools.com/jsref/dom_obj_button.asp
- https://www.w3schools.com/js/js_htmldom_css.asp
- https://www.w3schools.com/tags/tag_input.asp

## License

MIT License

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
