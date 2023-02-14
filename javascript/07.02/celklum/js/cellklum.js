console.log("welcome to cellcom");

//create array for each department....
var lab = [];
var service = [];
var sales = [];

const addNumber = () => {
  const reqService = document.getElementById("reqService").value;
  const userTel = document.getElementById("userTel").value;
  //Sales, Service, Lab
  switch (reqService) {
    case "Sales":
      sales.unshift(userTel);
      createSales();
      break;
    case "Service":
      service.unshift(userTel);
      createService();
      break;
    case "Lab":
      lab.unshift(userTel);
      createLab();
      break;
  }document.getElementById("userTel").value = "";
};

const createSales = () => {
  var result = "";
  for (var index = sales.length - 1; index >= 0; index--) {
    result += `<tr><td><span class="myHeader">${sales[index]}</span></td></tr>`;
  }
  document.getElementById("tSales").innerHTML = result;
};

const createLab = () => {
  var result = "";
  for (var index = lab.length - 1; index >= 0; index--) {
    result += `<tr><td><span class="myHeader">${lab[index]}</span></td></tr>`;
  }
  document.getElementById("tLab").innerHTML = result;
};

const createService = () => {
  var result = "";
  for (var index = service.length - 1; index >= 0; index--) {
    result += `<tr><td><span class="myHeader">${service[index]}</span></td></tr>`;
  }
  document.getElementById("tService").innerHTML = result;
};

const nextSales = () => {
  var show = false;
  //get last cell in the array => number || undefined
  var nextNumber = sales.pop();
  //pointer to html element in our document...
  document.getElementById("s_sales").innerHTML =
  //short if => condition?true:false;
  nextNumber == undefined ? "FREE" : nextNumber;
  createSales();
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("s_sales").style.visibility = "visible";
  }, 5000);

  var cellBlink = setInterval(() => {
    show = !show;
    document.getElementById("s_sales").style.visibility = show
      ? "visible"
      : "hidden";
  }, 500);
};

const nextLab = () => {
  var show = false;
  var nextNumber = lab.pop();
  document.getElementById("s_lab").innerHTML =
  nextNumber == undefined ? "FREE" : nextNumber;
  createLab()
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("s_lab").style.visibility = "visible";
  }, 5000);

  var cellBlink = setInterval(() => {
    show = !show;
    document.getElementById("s_lab").style.visibility = show
      ? "visible"
      : "hidden";
  }, 500);
};

const nextService = () => {
  var show = false;
  var nextNumber = service.pop();
  document.getElementById("s_service").innerHTML =
  nextNumber == undefined ? "FREE" : nextNumber;
  createService()
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("s_service").style.visibility = "visible";
  }, 5000);
  var cellBlink = setInterval(() => {
    show = !show;
    document.getElementById("s_service").style.visibility = show
      ? "visible"
      : "hidden";
  }, 500);
};

//showing constant time (updating every 1000 ms = 1 sec)
setInterval(() => {
  document.getElementById("userTime").innerHTML =
  new Date().toLocaleString();
}, 1000);