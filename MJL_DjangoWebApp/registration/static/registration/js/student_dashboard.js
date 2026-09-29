async function loadStudents() {
    const loadingMessage = document.getElementById("loading-message");
    const errorMessage = document.getElementById("error-message");
    const studentCount = document.getElementById("student-count");
    const tableBody = document.getElementById("student-table-body");

    try {
        if (loadingMessage) loadingMessage.textContent = "Loading students...";
        if (errorMessage) errorMessage.textContent = "";

        const response = await fetch("/api/students/");

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication required. Please log in.");
            }
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        if (studentCount) studentCount.textContent = data.count;
        if (tableBody) tableBody.innerHTML = "";

        if (data.students.length === 0) {
            const row = document.createElement("tr");
            row.innerHTML = `<td colspan="5">No Student records found.</td>`;
            tableBody.appendChild(row);
        } else {
            data.students.forEach(student => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.student_name}</td>
                    <td>${student.program}</td>
                    <td>${student.year_level}</td>
                    <td>${student.email}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        if (loadingMessage) loadingMessage.textContent = "";
    } catch (error) {
        if (loadingMessage) loadingMessage.textContent = "";
        if (errorMessage) errorMessage.textContent = error.message;
        console.error("Student loading error:", error);
    }
}

loadStudents();