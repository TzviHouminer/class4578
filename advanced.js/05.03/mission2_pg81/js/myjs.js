colors = [];

const chosen = () => {
    const obj = new Object();
    obj.index = colors.length + 1
    obj.color = document.getElementById("colorChosen").value;
    colors.push(obj);
    
    setTimeout(() => {
        colors.map((item)=>{
            alert(`
            total times: ${colors.length}
            event index: ${item.index}
            current color: ${colors[colors.length - 1].color}
            event color: ${item.color}
            `);
        })
        }, 1000);
};