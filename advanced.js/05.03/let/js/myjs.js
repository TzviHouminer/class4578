let result = "";
const table = () => {
    for (let index=1; index<=10; index++){
        for (let index2=1; index2<=10; index2++){
            result += `<td>${index * index2}</td>`;
        };
        result += '<br/>';
    };
    console.log(result);
    document.getElementById("body").innerHTML = result;
};
table();