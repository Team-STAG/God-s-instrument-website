"use strict";

var headerProps = {
   menuOpened: false
}


function menu(){

   if(headerProps.menuOpened){

      closeMenu();


   }else{

      openMenu();


   }


}

function closeMenu(){
   var mobileLinkButton =  Ele(".mobile-link-button"),
      mobileLinks = Ele(".mobile-links");
      

      mobileLinks.style.right = "-500px";
      headerProps.menuOpened = false;
}


function openMenu(){
   var mobileLinkButton =  Ele(".mobile-link-button"),
      mobileLinks = Ele(".mobile-links");

      mobileLinks.style.right = "0px";

      headerProps.menuOpened = true;

}

function scrollToElement(hash){

   var links = All(".link a");

   if(Ele(hash)){


      var scrollVertical = (Ele(hash).offsetTop - 80);

      links.forEach((link)=>{

         link.removeAttribute("id");
         // console.log(link.hash);

         if(link.hash === hash){

            link.setAttribute("id", "active-link")
         }

         
      });


      if(scrollVertical < 0){
         scrollVertical = 0;
      }

      window.scrollTo({
         top: scrollVertical,
         left: 0
      })

      closeMenu();

      
      // console.dir(scrollVertical)
   }
}

function setActiveLink(sentLink){
   
   var links = All(".link a"),
      hash = "#" + sentLink;

      // console.log(hash)

   links.forEach((link)=>{

      link.removeAttribute("id");
      // console.log(link.hash);

      if(link.hash === hash){

         link.setAttribute("id", "active-link")
      }

      
   });
   // location.hash = sentLink;

}

window.addEventListener("load", ()=>{
   var mobileLinkButton =  Ele(".mobile-link-button"),
      links = All(".link a");

   mobileLinkButton.addEventListener("click", menu)

   links.forEach((element)=>{
      element.addEventListener("click", (e)=>{
         e.preventDefault();

         var hash = e.target.hash,
            hashFiltered = e.target.hash.split("#")[1];

         if(!Ele(hash)){
            hash = '#home';
            hashFiltered = 'home'
         
         }

         location.hash = hashFiltered;

         scrollToElement(hash)

         // console.log(e);
         // console.log(hash);

      })
   })




   if(location.hash !== ""){
      var hash = location.hash;
      // console.log(location.hash);
      if(!Ele(hash)){
         hash = '#home';
      }

      scrollToElement(hash);
   }

   window.addEventListener("hashchange", (e)=>{
      e.preventDefault();

      var hash = location.hash;
      // console.log(location.hash);
      if(!Ele(hash)){
         hash = '#home';
      
      }
      scrollToElement(hash);



   });

   window.addEventListener("scroll", ()=>{

      if(Ele("#about") && Ele("#pastevents") && Ele("#contact") && Ele("#musics")){

         var windowScrolled = window.scrollY,
            aboutScroll = (Ele("#about").offsetTop - 80),
            eventScroll = (Ele("#pastevents").offsetTop - 80),
            contactScroll = (Ele("#contact").offsetTop - 80),
            musicScroll = (Ele("#musics").offsetTop - 80);
   
            
   
            if(windowScrolled >= 0 && windowScrolled  < aboutScroll){
               // console.log(aboutScroll)
               setActiveLink("home");
   
            }else if(windowScrolled >= aboutScroll && windowScrolled  < eventScroll){
   
               setActiveLink("about");
            }else if(windowScrolled >= eventScroll && windowScrolled  < musicScroll){
   
               setActiveLink("pastevents");
            }else if(windowScrolled >= musicScroll && windowScrolled  < contactScroll){
   
               setActiveLink("musics");
            }else if(windowScrolled >= contactScroll){
   
               setActiveLink("contact");
            }
      }


   })

})