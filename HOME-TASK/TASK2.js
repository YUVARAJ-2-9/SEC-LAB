function isValidNumber(input) {
    return !isNaN(input) && input.trim() !== "";
}

let choice;
do {
    console.log("----- MENU -----");~
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    choice = prompt("Enter your choice (1-5):");


    if (!["1", "2", "3", "4", "5"].includes(choice)) {
        console.log(" Invalid choice. Please enter a number between 1 and 5.");
        continue; 
    }

    if (choice === "5") {
        console.log(" Exiting the calculator...");
        break;
    }

    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");


    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        console.log(" Invalid input. Please enter valid numbers.");
        continue; 
    }


    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

  
    switch (choice) {
        case "1":
            console.log(` Result: ${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "2":
            console.log(` Result: ${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "3":
            console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
            break;
        case "4":
            if (num2 === 0) {
                console.log("Division by zero is not allowed.");
            } else {
                console.log(`Rsult: ${num1} / ${num2} = ${num1 / num2}`);
            }
            break;
    }

} while (true);
