document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function(event) {
        event.preventDefault(); 
        addData();
    });
});

function addData() {
    var course = document.getElementById("course").value;
    var specialty = document.getElementById("specialty").value;
    
    var currentYear = new Date().getFullYear();
    var startYear = currentYear - course + 1;
    var endYear = startYear + 3; 
    
    var groupName = specialty[0] + '-' + (startYear % 100); // Використовуємо перші дві літери спеціальності та останні дві цифри року

    var table = document.getElementById("resultsTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();
    newRow.innerHTML = `<td>${course}</td><td>${specialty}</td><td>${startYear}</td><td>${endYear}</td><td>${groupName}</td>`;
}
