let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.onclick = function(){
    sidebar.classList.toggle("active");
    if(sidebar.classList.contains("active")){
        sidebarBtn.classList.replace("bx-menu-al-right");
    }
    else
    sidebarBtn.classList.replace("bx-menu-alt-right","bx-menu");
}

//dark theme javascript start here.....

