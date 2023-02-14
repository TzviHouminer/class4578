function addToTable(){
    var user = document.getElementById("user").value;
    var age = document.getElementById("age").value;
    var addr = document.getElementById("address").value;
    tableContent.innerHTML += `<tr>
    <td>${user}</td>
    <td>${age}</td>
    <td>${addr}</td>
    </tr>`
}