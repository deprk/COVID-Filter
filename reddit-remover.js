var contains = false

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi) || element.textContent.match(/covid-19/gi) || 
    element.textContent.match(/covid/gi)) {
        contains = true;
    }
  }
}

var list = document.getElementsByClassName("_1poyrkZ7g36PawDueRza-J");
for (var i = 0; i < list.length; i++) {
  // this will remove the node from the pageif (list[i].hasChildNodes()) {}
  replaceText(list[i])
  if (contains) {
      list[i].style.display = "none";
  }
  contains = false; 
}


var list2 = document.getElementsByClassName("_1poyrkZ7g36PawDueRza-J");
for (var i = 0; i < list2.length; i++) {
  // this will remove the node from the pageif (list[i].hasChildNodes()) {}
  replaceText(list2[i])
  if (contains) {
      list2[i].style.display = "none";
  }
  contains = false; 
}