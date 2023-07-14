function openSidebar() {
    let id = null;
    var sideBar = document.getElementById("sidebar");
    var sideBarBlock = document.getElementById("sidebar-block");
    let pos = -250;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            sideBar.style.display = "block";
            sideBarBlock.style.display = "block";
            pos+= 10; 
            sideBar.style.left = pos + "px"; 
        }
    }
}

function closeSidebar() {
    let id = null;
    var elem = document.getElementById("sidebar");
    var sideBarBlock = document.getElementById("sidebar-block");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == -250) {
            clearInterval(id);
        } else {
            sideBarBlock.style.display = "none";
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

function y2s1() {
    window.scroll(0, 1227);
    closeSidebar();
}

function pr1150() {
    window.scroll(0, 685);
    closeSidebar();
}

function pr1151() {
    window.scroll(0, 1283);
    closeSidebar();
}

function pr1152() {
    window.scroll(0, 1881);
    closeSidebar();
}

function gea1000() {
    window.scroll(0, 2555);
    closeSidebar();
}

function sph1901() {
    window.scroll(0, 3000);
    closeSidebar();
}