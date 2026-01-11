let records = [];

function borrowBook() {
    let book = document.getElementById("book").value;
    let student = document.getElementById("student").value;
    let error = document.getElementById("error");

    if (book === "" || student === "") {
        error.textContent = "Fadlan buuxi dhammaan xogta";
        return;
    }

    error.textContent = "";

    records.push({
        bookName: book,
        studentName: student
    });

    displayRecords();

    document.getElementById("book").value = "";
    document.getElementById("student").value = "";
}

function displayRecords() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    records.forEach(item => {
        let li = document.createElement("li");
        li.textContent =
            item.studentName + " borrowed \"" + item.bookName + "\"";
        list.appendChild(li);
    });
}