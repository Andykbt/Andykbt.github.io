window.addEventListener('load', fadeOnLoad); 
window.addEventListener('scroll', fadein)

function fadeOnLoad() {
    var elems = document.getElementsByClassName("fade-on-load");
    
    for (var i = 0; i < elems.length; i++) {
        console.log(elem)
        var elem = elems[i]
        elem.classList.add("show");
    }
}

function fadein() {
    var elems = document.getElementsByClassName("fade-in");

    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i]
        var dist = elem.getBoundingClientRect().top - window.innerHeight + 100;

        if (dist < 0) {
            elem.classList.add("show");
        } else {
            elem.classList.remove("show");
        }
    }
}

fadeOnLoad()
fadein()