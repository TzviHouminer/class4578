var chores = [];

const addChore = ()=>{
    var chore = document.getElementById("newChore").value;
    chores.push(chore);
    document.getElementById("myForm").reset();
    makeTable()
    localStorage.setItem("lastChores", JSON.stringify(chores));
};

const makeTable = () => {
    var result = "";
    chores.map((item) => {
        result += `
        <tr>
        <td><input type="checkbox"/>${item}</td>
        </tr>
        `
    });
    document.getElementById("choresTable").innerHTML = result
};

const retrieveData = () => {
    history = JSON.parse(localStorage.getItem("lastChores"));
    if (history){
        chores = history
        makeTable();
    }
};
retrieveData();