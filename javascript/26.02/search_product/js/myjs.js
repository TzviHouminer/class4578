const items = ['milk', 'bread', 'broccoli', 'apple', 'apple watch'];

const search = () => {
    const keys = document.getElementById("searchKeys").value;
    var result = '';
    items.filter((item) => item.includes(keys)).map((item)=> result += item + '<br/>');
    document.getElementById("list").innerHTML = result;
}