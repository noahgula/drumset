function wclicked() {
    // alert('W button clicked');
    new Audio('sounds/crash.mp3').play()
}

function aclicked() {
    new Audio('sounds/kick-bass.mp3').play()
}

function sclicked() {
    new Audio('sounds/snare.mp3').play()
}

function dclicked() {
    new Audio('sounds/tom-1.mp3').play()
}

function jclicked() {
    new Audio('sounds/tom-2.mp3').play()
}

function kclicked() {
    new Audio('sounds/tom-3.mp3').play()
}

function lclicked() {
    new Audio('sounds/tom-4.mp3').play()
}

document.addEventListener('keydown', function(e) {

    if (e.key == "w") {
        wclicked();
    } else if (e.key == "a") {
        aclicked();
    } else if (e.key == "s") {
        sclicked();

    } else if (e.key == "d") {
        dclicked()
    } else if (e.key == "j") {
        jclicked()
    } else if (e.key == "k") {
        kclicked()
    } else if (e.key == "l") {
        lclicked()
    }
});