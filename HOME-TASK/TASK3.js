
let tasks = [];

const addTask = (task, callback) => {
    tasks.push(task);
    console.log(`Task added: "${task}"`);
    callback();
};


const printTasks = () => {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};




const addMultipleTasks = function (...newTasks) {
    newTasks.forEach(task => {
        tasks.push(task);
    });
    console.log(`${newTasks.length} tasks added.`);
};

function scopeExample() {
    let localTask = "Read book"; // Local scope variable
    console.log("Inside function - localTask:", localTask);
    console.log("Inside function - tasks:", tasks); // Access global
}
console.log("Outside function - global tasks:", tasks);

addTask("Complete homework", printTasks);         
addMultipleTasks("Wash dishes", "Code project");  
printTasks();                                     
scopeExample();                                   
