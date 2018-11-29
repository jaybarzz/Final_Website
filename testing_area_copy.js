//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function surprise() {
    alert("ARE YOU READY FOR A GREAT ASSIGNMENT?!?!?!??!");
}
