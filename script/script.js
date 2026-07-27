document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){
    
    let target=document.querySelector(this.getAttribute("href"));
    
    if(target){
    
    e.preventDefault();
    
    target.scrollIntoView({
    
    behavior:"smooth"
    
    });
    
    }
    
    });
    
    
    });