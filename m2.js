function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Marks of " + name + " <br> Operating system = 10 <br> Web Programming = 09 <br> Maths = 11 " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}
