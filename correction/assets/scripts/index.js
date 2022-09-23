"use strict";

window.addEventListener("load", ()=>{
    
    function animateContainer(){
        var bannerContent = Ele(".banner-content"),
            aboutContent = Ele(".about-container"),
            eventContents = Ele(".events-container"),
            events = All(".events-container .events"),
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

        events.forEach((element, index) =>{

            if(element.getBoundingClientRect().top < (browserHeight - 100) && element.getBoundingClientRect().bottom > headerHeight + 200){
                element.style.opacity = "1";
                
            }else{
                element.style.opacity = "0.1";

            }
                
        })  

        // if(eventContents.getBoundingClientRect().top < (browserHeight - 100) && eventContents.getBoundingClientRect().bottom > headerHeight + 200){

        //     events.forEach((element, index) =>{
        //         var timeFrame = (index * 500);

        //         setTimeout(()=>{

        //             element.style.opacity = "1";

        //         }, timeFrame)
        //     })

        // }else{

        //     events.forEach((element) =>{
        //         element.style.opacity = "0.1";
                
        //     })

        // }

        // console.log(aboutContainer.getBoundingClientRect().bottom)

        

    }

    setTimeout(()=>{
        animateContainer();
    }, 500)
    

    window.addEventListener("scroll", ()=>{

        animateContainer();
        
    })

})