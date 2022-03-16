function Onchange(e) {
  inp = document.getElementById("inp").value;
  const data = {
    name: e.target.inp.value,
  };
}
function run() {
  // Creating Our XMLHttpRequest object

  var xhr = new XMLHttpRequest();

  // Making our connection
  var url = "http://localhost:3000/posts";

  // function execute after request is successful
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // document.getElementById('ids').innerHTML = this.responseText;
      // console.log(xhr.responseText);
      // console.log('aaaaaaaaaaaa')
      let jsondata = xhr.responseText;
      console.log(jsondata);
      userdata(jsondata);
    }
  };
  xhr.open("post", url, true);
  // Sending our request
  xhr.send();
}

function userdata(jsondata) {
  const responsedata = JSON.parse(jsondata);
  var temp = "";
  var temp2 = "";

  Object.values(responsedata).forEach((user) => {
    temp += "<td>" + user.email + "</td>";
    temp2 += "<td>" + user.name + "</td>";
  });
  //close for loop
  document.getElementById("names").innerHTML = temp;
  document.getElementById("image").innerHTML = temp2;
}

run();

// fetch("https://jsonplaceholder.typicode.com/todos").then(
//     res => {
//         res.json().then(
//             data => {
//                 console.log(data);
//                 if (data.length > 0) {
//                     var temp = "";

//                     //start for loop
//                     data.forEach((user) => {
//                         temp += "<tr>";
//                         temp += "<td>" + user.id + "</td>"
//                         temp += "<td>" + user.title + "</td>"
//                         temp += "<td>" + user.userId + "</td>"
//                         temp += "</tr>"
//                     });

//                     //close for loop
//                     document.getElementById('data').innerHTML = temp;

//                 }
//             }
//         )
//     }
// )
