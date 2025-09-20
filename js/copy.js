function delayClassAdd(element, className, addRemove, index, interval) {
    const delay = index * interval;

    setTimeout(function() {
        if (addRemove) {
            element.classList.add(className)
        } else {
            element.classList.remove(className)
        }
    }, delay);
}

function resetButtonText() {
    document.getElementById('copybutton').innerHTML = 'Copy email again?';

    document.getElementById('main-text').classList.remove("copy-success");
    document.getElementById('site-body').style.background = "#122"
    
    var buttons = document.getElementsByClassName("color-lines-box"),
        len = buttons !== null ? buttons.length : 0,
        i = 0;
    for(i; i < len; i++) {
        delayClassAdd(buttons[i], "copy-success-lines", false, i, 100)
    }
}

function copyEmail() {
    const email = 'handwingdesign@gmail.com'
    navigator.clipboard.writeText(email);

    document.getElementById('copybutton').innerHTML = 'Copied!';
    document.getElementById('main-text').classList.add("copy-success");
    document.getElementById('site-body').style.background = "rgb(27, 90, 46)"

    var buttons = document.getElementsByClassName("color-lines-box"),
        len = buttons !== null ? buttons.length : 0,
        i = 0;
    for(i; i < len; i++) {
        delayClassAdd(buttons[i], "copy-success-lines", true, len - i, 30)
    }

    setTimeout(function() {
        document.getElementById('site-body').style.background = "#122";
    }, 1000);
    setTimeout(resetButtonText, 5000);
}


