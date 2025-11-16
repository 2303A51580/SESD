// Business Logic Layer

function addCourse() {
    const courseName = document.getElementById('courseName').value.trim();
    if (courseName === "") {
        alert("Please enter a course name!");
        return;
    }
    courses.push(courseName);
    document.getElementById('courseName').value = "";
    updateCourseList();
    updateCourseDropdown();
}

function enrollStudent() {
    const studentName = document.getElementById('studentName').value.trim();
    const courseSelected = document.getElementById('courseSelect').value;

    if (studentName === "" || courseSelected === "") {
        alert("Please enter all details!");
        return;
    }

    students.push({ name: studentName, course: courseSelected });
    document.getElementById('studentName').value = "";
    updateStudentList();
}

// Presentation Updates
function updateCourseList() {
    const list = document.getElementById('courseList');
    list.innerHTML = "";
    courses.forEach((course, index) => {
        list.innerHTML += `<li>${index + 1}. ${course}</li>`;
    });
}

function updateCourseDropdown() {
    const dropdown = document.getElementById('courseSelect');
    dropdown.innerHTML = "<option value=''>Select Course</option>";
    courses.forEach(course => {
        dropdown.innerHTML += `<option value="${course}">${course}</option>`;
    });
}

function updateStudentList() {
    const list = document.getElementById('studentList');
    list.innerHTML = "";
    students.forEach((student, index) => {
        list.innerHTML += `<li>${index + 1}. ${student.name} → ${student.course}</li>`;
    });
}
