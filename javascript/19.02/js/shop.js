var products = [];

const addProduct = () => {
    var item = new Object();
    item.name = document.getElementById("pName").value;
    item.price = document.getElementById("pPrice").value;
    item.category = document.getElementById("pCategory").value;
    item.photoLink = document.getElementById("pPhoto").value;
    
    products.push(item);

    document.getElementById("myForm").reset();
    makeTable();
};

const makeTable = () => {
    var result = ""
    products.map((item) => {
        result += `
        <tr>
        <td><input type="button" value="X" onclick="eraseRow('${item.name}')"/></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.category}</td>
        <td><img src="${item.photoLink}" width="100"/></td>
        </tr>
        `
    });
    document.getElementById("tableBody").innerHTML = result;
};

const eraseRow = (name) => {
    products = products.filter((item) => item.name != name);
    makeTable();
};