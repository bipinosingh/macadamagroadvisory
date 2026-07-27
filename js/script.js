const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuButton){

menuButton.addEventListener("click",()=>{

    if(navLinks.style.display==="flex"){

        navLinks.style.display="none";

    }
    else{

        navLinks.style.display="flex";

    }

});

}



document.querySelectorAll('a[href^="#"]').forEach(link=>{


link.addEventListener("click",function(e){


const target=document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});