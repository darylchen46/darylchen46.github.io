function openSidebar() {
    let id = null;
    var sideBar = document.getElementById("sidebar");
    let pos = -250;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            sideBar.style.display = "block";
            pos+= 10; 
            sideBar.style.left = pos + "px"; 
        }
    }
}

function closeSidebar() {
    let id = null;
    var elem = document.getElementById("sidebar");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == -250) {
            clearInterval(id);
        } else {
            pos -= 10; 
            elem.style.left = pos + "px";  
        }
    }
}

function y1s1() {
    window.scroll(0, 120);
    closeSidebar();
}

function y1s2() {
    window.scroll(0, 605);
    closeSidebar();
}