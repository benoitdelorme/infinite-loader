setInterval(function() {
    document.querySelector("body").style.setProperty('--randomColor', "#"+Math.floor(Math.random()*16777215).toString(16));
}, 1500)
