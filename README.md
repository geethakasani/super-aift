![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab | Super Over Static

## Task:
In this code-along lesson, you will build the static page of the super over game using HTML and CSS.

There is no Boilerplate for this project. The project will be built from scratch. Image links are provided below
[Strike](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/so-strike-button.png)     
[reset](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/so-reset-button.png)      
[logo](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/so-logo.png)          
[background](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/superover-bg.png)
# Super Over Web Page

This project is a simple web page that simulates a cricket super over scenario. The page includes various elements like logos, scorecards, and buttons to strike and reset the game. Below is a description of the different HTML elements used in the page, particularly focusing on the `div` elements and their respective IDs.

## Structure and IDs

### 1. `team1` Div
- **ID:** `team1`
- **Description:** This `div` represents the first team in the Super Over scenario. It is styled with a blue background (`rgb(0, 95, 162)`).
- **Contents:**
  - **Score:** The score of Team 1 is displayed within this `div`, using the ID `score-team1`.
  - **Wickets:** The number of wickets lost by Team 1 is shown here, using the ID `wickets-team1`.

### 2. `team2` Div
- **ID:** `team2`
- **Description:** This `div` represents the second team in the Super Over scenario. It is styled with a green background (`rgb(31, 168, 61)`).
- **Contents:**
  - **Score:** The score of Team 2 is displayed within this `div`, using the ID `score-team2`.
  - **Wickets:** The number of wickets lost by Team 2 is shown here, using the ID `wickets-team2`.

### 3. Logo
- **ID:** `logo`
- **Description:** The logo of the Super Over is centered on the page. It should display the image `so-logo.png`.

### 4. Strike and Reset Buttons
- **ID (Strike):** `strike`
- **Description:** This button allows the user to simulate a ball being bowled in the Super Over.
- **ID (Reset):** `reset`
- **Description:** This button resets the Super Over, clearing the scores and wickets.

## Additional Elements

- **Background Image:** The page has a background image set to `superover-bg.png`, giving it a thematic appearance suitable for a cricket game.

## Running the Tests

The web page includes a set of Jasmine tests to ensure that all elements are correctly implemented. The tests check for the presence and proper configuration of each element described above.

Happy Coding Kalvium ❤️
