const lessons = {
    beginner: [
        {
            title: "Introduction to Programming",
            description: "Understand what programming is and how programs work.",
            exercise: "Write a program to display Hello World.",
            lab: "Create your first simple calculator."
        },
        {
            title: "Variables and Data Types",
            description: "Learn variables, strings, numbers and Boolean values.",
            exercise: "Create variables for name, age and salary.",
            lab: "Build a basic student information system."
        }
    ],

    intermediate: [
        {
            title: "Functions",
            description: "Understand reusable functions and parameters.",
            exercise: "Create a function to calculate two numbers.",
            lab: "Build a calculator using functions."
        },
        {
            title: "Arrays and Objects",
            description: "Learn how to store and manage multiple values.",
            exercise: "Create an array of student names.",
            lab: "Create a student record management system."
        }
    ],

    advanced: [
        {
            title: "Object Oriented Programming",
            description: "Learn classes, objects, inheritance and polymorphism.",
            exercise: "Create a class for employee details.",
            lab: "Build an employee management application."
        },
        {
            title: "Exception Handling",
            description: "Learn how to handle errors in programs.",
            exercise: "Handle invalid user input.",
            lab: "Build an error-handling application."
        }
    ],

    expert: [
        {
            title: "System Design",
            description: "Learn scalable architecture and system design principles.",
            exercise: "Design a URL shortening system.",
            lab: "Create a scalable application architecture."
        },
        {
            title: "Performance Optimization",
            description: "Learn efficient algorithms and performance improvement.",
            exercise: "Analyze the time complexity of sorting algorithms.",
            lab: "Optimize a sample application."
        }
    ]
};


function showLevel(level) {

    const content = document.getElementById("lesson-content");

    if (!content) return;

    content.innerHTML = `<h2>${level.toUpperCase()} LEVEL</h2>`;

    lessons[level].forEach((lesson, index) => {

        content.innerHTML += `
            <div class="lesson-card">

                <h3>${index + 1}. ${lesson.title}</h3>

                <p><strong>Lesson:</strong> ${lesson.description}</p>

                <p><strong>Exercise:</strong> ${lesson.exercise}</p>

                <p><strong>Practical Lab:</strong> ${lesson.lab}</p>

                <label>
                    <input type="checkbox">
                    Mark as Completed
                </label>

            </div>
        `;
    });
}


// Interview questions

const questions = {

    beginner: [
        {
            question: "What is programming?",
            answer: "Programming is the process of writing instructions that a computer executes to perform specific tasks."
        },
        {
            question: "What is a variable?",
            answer: "A variable is a named storage location used to hold data in a program."
        },
        {
            question: "What are data types?",
            answer: "Data types define the kind of value a variable can store, such as integers, strings and Boolean values."
        }
    ],

    intermediate: [
        {
            question: "What is a function?",
            answer: "A function is a reusable block of code designed to perform a particular task."
        },
        {
            question: "What is an array?",
            answer: "An array is a data structure used to store multiple values in an ordered collection."
        }
    ],

    advanced: [
        {
            question: "What is inheritance?",
            answer: "Inheritance is an OOP concept where one class acquires properties and methods from another class."
        },
        {
            question: "What is polymorphism?",
            answer: "Polymorphism allows objects to use a common interface while providing different implementations."
        }
    ],

    expert: [
        {
            question: "What is system design?",
            answer: "System design is the process of defining the architecture, components and interactions required to build a reliable and scalable system."
        },
        {
            question: "What is microservices architecture?",
            answer: "Microservices architecture structures an application as a collection of independently deployable services."
        }
    ]
};


function showQuestions(level) {

    const content = document.getElementById("question-content");

    if (!content) return;

    content.innerHTML = `<h2>${level.toUpperCase()} INTERVIEW QUESTIONS</h2>`;

    questions[level].forEach((item, index) => {

        const card = document.createElement("div");
        card.className = "question-card";

        const heading = document.createElement("h3");
        heading.textContent = `${index + 1}. ${item.question}`;

        const button = document.createElement("button");
        button.textContent = "Show Answer";

        const answer = document.createElement("p");
        answer.className = "answer";
        answer.textContent = item.answer;
        answer.hidden = true;

        button.addEventListener("click", () => {
            answer.hidden = !answer.hidden;
            button.textContent = answer.hidden
                ? "Show Answer"
                : "Hide Answer";
        });

        card.append(heading, button, answer);
        content.appendChild(card);
    });
}


// Load default content

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("lesson-content")) {
        showLevel("beginner");
    }

    if (document.getElementById("question-content")) {
        showQuestions("beginner");
    }
});