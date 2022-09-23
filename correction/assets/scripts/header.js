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

})