var friendList = [];
var counter = 0

const getData = () => {
  var fName = document.getElementById("fName").value;
  var fTel = document.getElementById("fTel").value;
  var fPhoto = document.getElementById("fImg").value;

  var newFriend = new Object();
  newFriend.name = fName;
  newFriend.tel = fTel;
  newFriend.photo = fPhoto;

  friendList.push(newFriend);
  document.getElementById("friendForm").reset();
  document.getElementById("tableRow").innerHTML += `
  <tr>
  <td>${friendList[counter].name}</td>
  <td>${friendList[counter].tel}</td>
  <td><img scr="${friendList[counter].photo}"/></td>
  </tr>`;
  counter++;
};