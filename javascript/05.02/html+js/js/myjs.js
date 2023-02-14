function calculateCharity(){
    var sal = +document.getElementById("salary").value;
    console.log(sal);
    maaser.innerHTML = "For Maaser, you need to pay: " + sal*0.1;
    homesh.innerHTML = "For Homesh, you need to pay: " + sal*0.2;
}