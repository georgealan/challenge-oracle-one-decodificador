# Challenge Oracle ONE - Text Encrypt

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-01.gif)

This project was developed for the Oracle ONE course challenge. I used it to practice manipulating DOM elements with JavaScript, so I went beyond what was asked in the exercise. I didn't work on a Figma file to create the design because, since it was a very simple exercise, I didn't see the need for it. The only thing I did was some initial sketches on paper, a basic wireframe to help put what I wanted to do on paper and visualize the system as a whole. This helped me come up with the final design.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/sketch-wireframe.jpg)

## Wireframe
After sketching out what I had in mind for the project, I began developing the HTML structure along with the CSS and JS. I tested my ideas on paper to see if they were possible, and all of them were achievable using JS.

## Development Steps
I developed the entire core of the system with JS, and once everything was functioning properly, I uploaded the system without styles or responsiveness to this GitHub repository. The final step was to style the system with two color themes: light and dark. I used a monochromatic color system, which is simpler to work with in simple projects. After styling the colors and elements, I started working on adjusting the responsiveness for mobile devices. This was a simple step, where I needed to make small adjustments to some parts. If you look at the code, the @media query is very small. Creating a well-organized structure from the beginning helps a lot in structuring the layout for mobile later, even if you don't follow mobile-first. Additionally, CSS Flexbox is very flexible and easy to work with.

The central functionality of this system is to save DOM elements in localStorage, simulating a database. I created a login screen so that all the elements the user saves on the screen are related only to them. Therefore, when you create an account, access the system, and save the encryption results, they will be saved to your user. If you log out and create another account, the new account will be empty, without any elements. But if you log in to the previous account that had elements, they will be loaded again in the DOM because they are saved in your browser's localStorage. I also did validations in the sign-in and sign-out form fields, all with the following validations:

### Form Sign In:
* Verifies if the username and/or password are correct. If they are not, an error message is displayed below the form field.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-02.gif)

### Form Sign Out:
* Checks if the user already exists in the localStorage, thus avoiding creating duplicate users. 
* Verifies if the password has at least 8 characters, and at least 1 uppercase letter, 1 special character, and 1 numeric digit. 
* Checks the password confirmation.

If all these validations are correct, you are redirected to the system.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-03.gif)

## Textarea Validation
The main system contains two textarea fields. One is locked for input and is the encryption result field. The top field is where the user types in the text. The field handles the exceptions required in the challenge and displays a warning when they are broken by the user's input.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-04.gif)

## The left Panel
The left panel is where the user's saved results are displayed. Simply click on the "save" button to create a new element in the DOM with the data obtained from the result field, all done within JavaScript.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-05.gif)

## Saved Boxes Icons Functionalities
Each saved box has three icons with functions to view, copy, and delete the boxes. I also created exceptions to prevent the saving of boxes with duplicate content, so it is not possible to save the same result more than once. If a box is deleted, you can still save it normally. The system knows that it is no longer in the DOM, and this was done with an array of results that is updated whenever a box is added or deleted. This mechanism was created to detect dynamically repeated divs.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-06.gif)

## Modal Visualizations
I created a modal for the user to view the complete result. In case the text is too large, I limited the display of text in the box div. You can only see the complete content if you click on the eye icon, which will open a modal with the complete text. There is also an option to copy the text.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-07.gif)

## Sections of the Save Results Panel
I separated each result into a section dedicated to each action performed, we have two: encrypt and decrypt. When you perform a decryption and save, a new box is created in the decrypt section, and the same occurs for encrypt. The sidebar has two buttons for switching between result views.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-08.gif)

## Color Themes
I created two color themes: a light and a dark one. They are also saved in the user's browser localStorage.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-09.gif)

## Responsiveness
The project is fully responsive and was the last task for me to complete the work. This is usually the easiest part for me, even though I didn't follow the mobile-first methodology. If you do a good job with CSS Flexbox or Grid, it's guaranteed to be easy to adapt to smaller screens with just a few adjustments to make.

![](https://raw.githubusercontent.com/georgealan/challenge-oracle-one-decodificador/main/assets/img-readme/gif-10.gif)

## Login Validations
I implemented login validations. If you try to access the system without logging in, by simply typing the system.html file path in the address bar, you will be redirected to the login screen. To access the system, it is necessary to log in first. The logout actually works. If you log out, you will be taken back to the login screen and will not be able to enter. Of course, it's just a game, it's not really secure.

## Conclusion
With this I exercised many concepts of DOM manipulation, logic, data manipulation, and much more. It was worth the effort! I successfully consolidated more knowledge!

