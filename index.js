function hover(img) {
  img.src =
    "https://thumbs.gfycat.com/PreciousAllAmurratsnake-size_restricted.gif";
}
function msoff(img) {
  img.src =
    "https://www.thrashermagazine.com/images/image/Features/2019/MiltonArticle/CV1TH1219_750px_2x.jpg";
}
function Welcome() {
  alert("This site says...\n\t\t\t\t Welcome!");
}

function TxtChange() {
  document.getElementById("demo").innerHTML = "Text Changed";

  document.getElementById("demo").style.fontSize = "30px";

  document.getElementById("demo").style.background = "white";
}
var i = 0;

function divchange() {
  var divtag = document.getElementById("container");
  var colors = ["red ", "blue", "green", "purple"];
  divtag.style.backgroundColor = colors[i];
  i = i + 1;
}

let myInterval = setInterval(divchange, 2000);

function stopInterval() {
  clearInterval(myInterval);
}

function checkRadio() {
  var kolekcija = document.getElementsByName("gender");
  var j = 0;
  prikaz = "Selected gender: ";
  for (var i = 0; i < kolekcija.length; i++) {
    var prov = kolekcija[i].checked;
    if (prov === true) {
      prikaz += kolekcija[i].value;
      document.getElementById("span1").innerHTML = prikaz;
      j = 1;
    }

    if (j === 0) {
      var neither = "Neither gender was selected";
      document.getElementById("span1").innerHTML = neither;
    }
  }
}

function ShowInput() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var favAnimal = document.getElementById("favouriteAnimal").value;

  document.getElementById("spanFirst").innerHTML = firstName;
  document.getElementById("spanLast").innerHTML = lastName;
  document.getElementById("spanAnimal").innerHTML = favAnimal;
}
function nazad() {
  window.history.back();
}
