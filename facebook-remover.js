function removeFb() {
    var newsFeed = document.querySelector('[role="feed"]');
    var feedItems = newsFeed.getElementsByTagName("div");

    for (var i = 0; i < feedItems.length; ++i) {
        if (replaceText(feedItems[i], false)) {
            feedItems[i].style.display = "none";
        }
    }
}

function replaceText(element, rcsn) {
    if (rcsn) {
        return true;
    } else {
        rcsn = textMatch(element.innerHTML);
        if (element.hasChildNodes() && !rcsn) {
            for (var i = 0; i < element.childNodes.length; ++i) {
                replaceText(element.childNodes[i], rcsn);
            }
        }
    }
    return rcsn;
}

function textMatch(txt) {
    if (txt == undefined) {
        return false;
    } else {
        if (txt.match(/coronavirus/gi)) {
            return true;
        } else if (txt.match(/covid/gi)) {
            return true;
        } else {
            return false;
        }
    }
}

window.setInterval(removeFb, 2500);

