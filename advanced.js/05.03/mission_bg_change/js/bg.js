const colors = {
    0:'#1e81b0',
    1:'#154c79',
    2:'#eeeee4',
    3:'#e28743',
    4:'#eab676',
    5:'#76b5c5',
    6:'#21130d',
    7:'#873e23',
    8:'#abdbe3',
    9:'#063970'
};
// setInterval(() => {
//     document.body.style.backgroundColor = colors[Math.floor(Math.random(10)*10)];
// }, 1000);
const speedChange = () => {
    let speed = document.getElementById("slider").value;
    setInterval(() => {
        document.body.style.backgroundColor = colors[Math.floor(Math.random(10)*10)]
    }, speed);
};
speedChange();