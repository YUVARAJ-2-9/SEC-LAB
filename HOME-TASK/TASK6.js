// Day 6: Contact Management Module

// 1) Create an array of contact objects with properties and a method
let contacts = [
    {
        name: "Alice",
        phone: "9876543210",
        email: "alice@example.com",
        displayInfo: function () {
            console.log(`Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`);
        }
    },
    {
        name: "Bob",
        phone: "9123456780",
        email: "bob@example.com",
        displayInfo: function () {
            console.log(`Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`);
        }
    }
];

// 2) Use destructuring to extract contact info inside methods and other functions
function showContact({ name, phone, email }) {
    console.log(`(Destructured) Name: ${name}, Phone: ${phone}, Email: ${email}`);
}

// Test destructuring
showContact(contacts[0]);

// 3) Access contact properties using both dot and bracket notation
console.log("Dot Notation:", contacts[0].name);
console.log("Bracket Notation:", contacts[0]["phone"]);

// Iterate through the array of contacts
console.log("\nAll Contact Details:");
contacts.forEach(contact => contact.displayInfo());

// 4) Use the rest parameters to create a function that adds multiple contacts at once
function addContacts(...newContacts) {
    contacts.push(...newContacts);
}

// Adding multiple contacts
addContacts(
    {
        name: "Charlie",
        phone: "9988776655",
        email: "charlie@example.com",
        displayInfo: function () {
            console.log(`Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`);
        }
    },
    {
        name: "David",
        phone: "9090909090",
        email: "david@example.com",
        displayInfo: function () {
            console.log(`Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`);
        }
    }
);

// Print all after adding
console.log("\nAfter Adding New Contacts:");
contacts.forEach(contact => contact.displayInfo());

// 5) Use the spread operator to merge multiple contact arrays
let moreContacts = [
    {
        name: "Eve",
        phone: "8888888888",
        email: "eve@example.com",
        displayInfo: function () {
            console.log(`Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`);
        }
    }
];

contacts = [...contacts, ...moreContacts];
console.log("\nAfter Merging Arrays:");
contacts.forEach(contact => contact.displayInfo());

// 6) Demonstrate call(), apply(), and bind() by borrowing a display method
let contactUtils = {
    display: function (prefix) {
        console.log(`${prefix} Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`);
    }
};

let tempContact = { name: "Frank", phone: "7777777777", email: "frank@example.com" };

console.log("\nUsing call():");
contactUtils.display.call(tempContact, "CALL →");

console.log("Using apply():");
contactUtils.display.apply(tempContact, ["APPLY →"]);

console.log("Using bind():");
let boundFunc = contactUtils.display.bind(tempContact, "BIND →");
boundFunc();