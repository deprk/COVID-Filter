var contains = false


function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi) || element.textContent.match(/covid-19/gi) || 
    element.textContent.match(/covid/gi)) {
      contains = true
    }
  }
}

function cnnRemove(){
  var list = document.getElementsByClassName("cd__wrapper");
  for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
      list[i].style.display = "none";
    }
    contains = false; 
  }

  var list = document.getElementsByClassName("cnn-search__result");
  for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
      list[i].style.display = "none";
    }
    contains = false; 
  }
}




window.setInterval(cnnRemove, 1000);
