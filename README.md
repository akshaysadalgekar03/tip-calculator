# Tip Calculator

This is a simple Tip Calculator built using HTML, CSS, and JavaScript. It allows you to calculate the tip amount and total bill amount based on the bill amount, tip percentage, and number of people sharing the bill.

# How to Use
1. Enter the total bill amount in the "Bill Amount" input field.
2. Select the desired tip percentage by clicking on the predefined tip percentage buttons or enter a custom tip percentage in the "Custom" input field.
3. Enter the number of people sharing the bill in the "Number of People" input field.
4. The tip amount and total bill amount per person will be displayed instantly.
5. To reset the calculator, click the "Reset" button.

# Technologies Used
<p align="left">
<img  alt="HTML" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
<img  alt="CSS" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
<img  alt="JavaScript" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
</p>

# JavaScript Concepts Used

1. **DOM Manipulation:** The code uses DOM manipulation to interact with and modify elements on the web page. Concepts like `document.querySelector`, `addEventListener`, and `innerText` are used to update the displayed values and handle user interactions.

2. **Classes and Constructors:** The code demonstrates the use of classes and constructors to create a `Calculator` class. The class is used to encapsulate the logic for calculating tips and splitting bills among people.

3. **Event Handling:** The code uses event listeners to handle changes in the input fields (`billAmount`, `peopleCount`, `customValue`) and the tip percentage buttons. The `change` and `click` events trigger the appropriate functions to update the display and recalculate the tip.

4. **String Manipulation:** The `toLocaleString` method is used to format numbers as currency strings with proper currency symbols and locale-specific formatting.

5. **Conditional Statements:** Conditional statements are used to check if the custom tip value is a valid number and to handle events based on specific conditions, such as the class of the clicked element.

6. **Arithmetic Operations:** The code performs arithmetic operations to calculate tip amounts, tip per person, and total per person.

7. **Array Destructuring:** The code utilizes array destructuring to extract values from the array returned by the `billSplit` method and use them to update the display.

8. **Data Types and Type Conversion:** The code uses methods like `parseFloat` and `Number` to convert input values to the appropriate data types (floats and numbers) for calculations.

![Image](https://github.com/akshaysadalgekar03/tip-calculator/blob/main/Tip%20Calculator%20ScreenShot.png)

Feel free to customize and enhance the design and functionality to suit your preferences and needs! Happy coding!
