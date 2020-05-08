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

function removeYouTube(){

    var list = document.querySelectorAll("yt-formatted-string")
    for (var i = 0; i < list.length; i++) {
        replaceText(list[i])
        if (contains){
            a = list[i].closest("ytd-video-renderer")
            if (a != null){
                a.style.display = "none"
            }
            a = list[i].closest("ytd-rich-shelf-renderer")
            if (a != null){
                a.style.display = "none"
            }
            if (list[i] != null){
                list[i].style.display = "none"
            }
        }
        contains = false
    }
    
}

window.setInterval(removeYouTube, 1000)