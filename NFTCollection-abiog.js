/*
Assessment Requirements
1. Create a variable that can hold the student information (e.g., school IDs). What type of variable might this be?
2. Create an object inside your `addStudent` function that will hold the student information. 
   The metadata values will be passed to the function as parameters. When the student is added, 
   you will store it in the variable created in step 1.
3. Your `listStudents()` function will print all student data to the console (i.e. console.log("Name: " + student.name)).
4. The `getTotalStudents()` should return the number of students added.
*/

// create a variable to hold your students' data
const studentList = []; // Array to store student information

// Function to add a student to the studentList
function addStudent (studentName, studentID, yearLevel, course) {
    // Create a student object using the provided parameters
    const studentInfo = {
        studentName: studentName,
        studentID: studentID,
        yearLevel: yearLevel,
        course: course
    };
    
    // Add the student object to the studentList array
    studentList.push(studentInfo);
    
    // Log the success message to the console
    console.log("Student added: " + studentName);
}

// Function to list all students in the studentList
function listStudents () {
    console.log("\nListing all students...\n");

    // Check if the student list is empty
    if (studentList.length === 0) {
        console.log("No students found.");
    } else {
        // Loop through the studentList array and print each student's details
        for (let i = 0; i < studentList.length; i++) {
            console.log(`Student #${i + 1}`);
            console.log("Name: \t\t" + studentList[i].studentName);
            console.log("ID: \t\t" + studentList[i].studentID);
            console.log("Year Level: \t" + studentList[i].yearLevel);
            console.log("Course: \t" + studentList[i].course);
            console.log("----------------------");
        }
    }
}

// Function to get the total number of students
function getTotalStudents() {
    console.log("Total number of students: " + studentList.length);
}

// Call the functions below to test the functionality

console.log("Adding students...\n");
addStudent("John Doe", "2023001", "1st Year", "Computer Science");
addStudent("Jane Smith", "2023002", "2nd Year", "Information Technology");
addStudent("Mark Johnson", "2023003", "3rd Year", "Software Engineering");
addStudent("Emily Davis", "2023004", "4th Year", "Data Science");

console.log("\nAll students have been added successfully!\n");

// List all students
listStudents();

// Get total number of students
getTotalStudents();

console.log("\nScript execution finished.");
