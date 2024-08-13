document.querySelector("#btn").addEventListener("click", function() {
    let sid = document.querySelector("#sid").value;
    let sname = document.querySelector("#sname").value;
    let age = document.querySelector("#age").value;
    let gender = document.querySelector("#male").checked ? "Male" : "Female";
    let course = document.querySelector("#course").value;
    let newRow = `<tr>
                    <td>${sid}</td>
                    <td>${sname}</td>
                    <td>${age}</td>
                    <td>${gender}</td>
                    <td>${course}</td>
                  </tr>`;
    document.querySelector("tbody").insertAdjacentHTML('beforeend', newRow);
    document.querySelector("#sid").value = '';
    document.querySelector("#sname").value = '';
    document.querySelector("#age").value = '';
    document.querySelector("#male").checked = false;
    document.querySelector("#female").checked = false;
    document.querySelector("#course").value = 'BCA'; 
    document.querySelector("table").style.visibility="visible";
});


 