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

var list = document.getElementsByClassName("g");
for (var i = 0; i < list.length; i++) {
  // this will remove the node from the pageif (list[i].hasChildNodes()) {}
  replaceText(list[i])
  if (contains) {
      list[i].style.display = "none";
  }
  contains = false; 
}

var list2 = document.getElementsByClassName("mod");
for (var i = 0; i < list2.length; i++) {
  // this will remove the node from the pageif (list[i].hasChildNodes()) {}
  replaceText(list2[i])
  if (contains) {
      list2[i].style.display = "none";
  }
  contains = false; 
}

var list3 = document.getElementsByClassName("vnLNtd mnr-c P6OZi ptcLIOszQJu__wholepage-card wp-ms");
for (var i = 0; i < list3.length; i++) {
  // this will remove the node from the pageif (list[i].hasChildNodes()) {}
    list3[i].style.display = "none";
}

var list4 = document.getElementsByClassName("OeVqAd");
for (var i = 0; i < list4.length; i++) {
  // this will remove the node from the pageif (list[i].hasChildNodes()) {}
    list4[i].style.display = "none";
}

var list5 = document.getElementsByClassName("card-section");
for (var i = 0; i < list5.length; i++) {
  // this will remove the node from the pageif (list[i].hasChildNodes()) {}
  replaceText(list5[i])
  if (contains) {
      list5[i].style.display = "none";
  }
  contains = false; 
}

var list6 = document.getElementsByClassName("dbsr");
for (var i = 0; i < list6.length; i++) {
    // this will remove the node from the pageif (list[i].hasChildNodes()) {}
    replaceText(list6[i])
    if (contains) {
        list6[i].style.display = "none";
    }
    contains = false; 
  }

  var list7 = document.getElementsByClassName("fhQnRd");
  for (var i = 0; i < list7.length; i++) {
      // this will remove the node from the pageif (list[i].hasChildNodes()) {}
      replaceText(list7[i])
      if (contains) {
          list7[i].style.display = "none";
      }
      contains = false; 
    }
