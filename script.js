document.addEventListener("DOMContentLoaded",function(){
    let menuToggle = document.getElementById("menu-toggle");
    let mobileNav = document.getElementById("mobile-nav");
    let barIcon = document.getElementById("bar-icon");
    let closeIcon = document.getElementById("close-icon");

    menuToggle.addEventListener("click",function(){
        // Thêm class active vào mobile nav
        // Nếu đã có active thì bỏ đi, nếu chưa có thì thêm vào
        mobileNav.classList.toggle("active");
        if(mobileNav.classList.contains("active")){
            barIcon.style.display = "none";
            closeIcon.style.display = "block";
        }else{
            barIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });

});