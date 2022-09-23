"use strict";

window.addEventListener("load", ()=>{
    
    function animateContainer(){
        var bannerContent = Ele(".banner-content"),
            aboutContent = Ele(".about-container"),
            headerHeight = 80,
            browserHeight = window.innerHeight;

        if(bannerContent.getBoundingClientRect().top < (browserHeight - (bannerContent.getBoundingClientRect().height / 2)) && bannerContent.getBoundingClientRect().bottom > headerHeight){

            bannerContent.style.transform = "scale(1)";
        }else{
            
            bannerContent.style.transform = "scale(0.8)";
        }   


        if(aboutContent.getBoundingClientRect().top < (browserHeight - 100) && aboutContent.getBoundingClientRect().bottom > headerHeight + 200){

            aboutContent.style.transform = "scale(1)";
            aboutContent.style.marginTop = "0px";
            aboutContent.style.opacity = "1";

        }else{
            
            aboutContent.style.transform = "scale(0.95)";
            aboutContent.style.marginTop = "20px";
            aboutContent.style.opacity = "0.5";
        }   

        // console.log(aboutContainer.getBoundingClientRect().bottom)

        

    }

    setTimeout(()=>{
        animateContainer();
    }, 500)
    

    window.addEventListener("scroll", ()=>{

        animateContainer();
        
    })

})