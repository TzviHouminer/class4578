var products =[];

const addItems = () => {
    var pName = document.getElementById("pName").value;
    var pQuan = document.getElementById("pQuan").value;
    var pPrice = document.getElementById("pPrice").value;
    var pPhoto = document.getElementById("pPhoto").value;

    var item = new Object();
    item.name = pName;
    item.quantity = pQuan;
    item.price = pPrice;
    item.photo = pPhoto;

    products.push(item);
    printTable()
    document.getElementById("itemForm").reset();
};
const printTable = () => {
    var result = "";
    var total = 0
    for (var index=0; index < products.length; index++){
        var priceForAll = products[index].price * products[index].quantity
        result += `
                <tr>
                <td><input type="checkbox" id="checkbox"/></td>
                <td><img src="${products[index].photo}" width="100"/></td>  <!--link to pic-->
                <td>${products[index].name}</td>                          <!--name of product-->
                <td>${products[index].quantity}</td>                      <!--quantity wanted-->
                <td>${products[index].price}</td>                         <!--price of one product-->
                <td>${priceForAll}</td>                                   <!--price for all quantity-->
                </tr>`;
                total += priceForAll;
        };
    document.getElementById("productTable").innerHTML = result;
    document.getElementById("sum").innerHTML = total
};