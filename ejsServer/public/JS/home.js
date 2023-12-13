const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar-menu");
const closeMenu = document.querySelector(".close-menu");
const body = document.body;
const buttons = document.querySelectorAll("[data-carousel-button]");
const carouselH2 = document.querySelector(".carousel-h2");
const carouselP = document.querySelector(".carousel-p");
const carouselButton = document.querySelector(".carousel-text-button");
const navHeader = document.querySelector("header");
let prevScrollPos = window.scrollY;



hamburger.addEventListener("click",function(){
    navMenu.classList.toggle("active");
    body.classList.toggle("active");

})

closeMenu.addEventListener("click",function(){
    navMenu.classList.toggle("active");
    body.classList.toggle("active");

})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        const currentIndex = [...slides.children].indexOf(activeSlide);
        

        let newIndex = currentIndex + offset;

        if(newIndex < 0 ) newIndex = slides.children.length -1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
        
        updateTextForActiveSlide();
    })
    
})


const slideData =[
    {
       title:"Ella's IPA",
       description:"Ella’s IPA (6,2%), vår prisbelönta IPA. Ella blev faktiskt utnämnd till Skånes bästa öl av tidningen Hallå. Ella har fått namnet av den tongivande humlesorten Ella från Australien. Ella är en fruktig och mycket trevlig IPA med en tydlig underton av aprikos, passionsfrukt och karamell.",
       color:"#9CFFFA",
       buttonClass:"ella-button",
       href:"/sortiment/Ella's%20IPA"
    },
    {
        title:"Fortets IPA",
        description:"Fortets IPA (6,6%) var det första ölet vi gjorde som nybörjare. Under åren har vi förfinat och förbättrat tills dess att vi fann, vad vi tycker är en bra balans mellan en tydlig beska och en aromatisk humleton, en hybrid mellan brittisk och amerikansk IPA. Namnet har Fortet fått från ett i Viken lokalt försvarsfort  som utgjorde en del av Per-Albin Hanssons skånska försvarslinje under andra världskriget. Fortet finns inte längre kvar men det gör ölet.",
        color:"#4464AD",
        buttonClass:"fortet-button",
        href:"/sortiment/Fortets%20IPA"
    },
    {
        title:"Isskeppet",
        description:"Isskeppet",
        color:"#fff",
        buttonClass:"isskeppet-button",
        href:"/sortiment/Isskeppet"
    },
    {
        title:"Neighbours Choice",
        description:"Neighbours choice",
        color:"#EC91D8",
        buttonClass:"neighbours-button",
        href:"/sortiment/Neighbours%20Choice"
    },
    {
        title:"Pilsner",
        description:"Pilsner",
        color:"#5FAD41",
        buttonClass:"pilsner-button",
        href:"/sortiment/Pilsner"
    },
    {
        title:"Summer Fusion",
        description:"Summer Fusion",
        color:"#F9A620",
        buttonClass:"summer-button",
        href:"/sortiment/Summer%20Fusion"
    },
    {
        title:"Svinbådan Lager",
        description:"Svinbådan lager (5,5%) är en klassisk lager med smak av knäckebröd, aprikos, örter och pomerans. Inspirationen är hämtad från den traditionella Böhmiska lagern. Denna lager har blivit en av våra storsäljare och var samtidigt en av de första ölen vi lanserade. Svinbådan var ett fyrskepp som låg i Öresund utanför Viken och markerade ett grund. Fyrbåten ersattes så småningom av ytterligare fyrskepp och till sist av en permanent fyr, den ni ser avbildad på våra etiketter.",
        color:"#314CB6",
        buttonClass:"svinbådan-button",
        href:"/sortiment/Svinbådan%20Lager"
    },
    {
        title:"Weiß",
        description:"Weiß",
        color:"#7D4600",
        buttonClass:"weiss-button",
        href:"/sortiment/Weiß"
    }
]


slideData.forEach((slide, index) => {
    slide.class = `slide-${index + 1}`;
});


function updateTextForActiveSlide(){
   const activeSlide = document.querySelector(".slide[data-active]");
   const index = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);


   if (index >= 0 && index < slideData.length) {
    const slideInfo = slideData[index];
    

    
    
    

    carouselH2.classList.add("hidden")
    carouselP.classList.add("hidden");
    carouselButton.classList.add("hidden");
    
    
   

    setTimeout(function(){
        carouselH2.textContent = slideInfo.title;
        carouselP.textContent = slideInfo.description;


        
        carouselH2.style.color = slideInfo.color;
        
        carouselH2.classList.remove("hidden")
        carouselP.classList.remove("hidden");
        carouselButton.classList.remove("hidden");

        
    },480)
    
    setTimeout(function(){
    slideData.forEach(slide => {
        carouselH2.classList.remove(slide.class);
        carouselButton.classList.remove(slide.buttonClass);
    });
    carouselH2.classList.add(slideInfo.class);
    carouselButton.classList.add(slideInfo.buttonClass);
    },480)
    
    carouselButton.addEventListener("click", function(){
        window.location.href = slideInfo.href;
    })
    
  }
  
}


document.addEventListener("DOMContentLoaded", function() {
    // Set initial state on page load
    if (window.scrollY > 0) {
      navHeader.style.top = "-100px";
      navHeader.style.position = "fixed";
      navHeader.style.width = "100%";
    }
  
    document.addEventListener("scroll", function() {
      let currentScrollPos = window.scrollY;
  
      if (currentScrollPos === 0) {
        navHeader.style.top = "0";
        navHeader.style.position = "relative";
      } else if (prevScrollPos > currentScrollPos) {
        navHeader.style.top = "0";
        navHeader.style.position = "fixed";
        navHeader.style.width = "100%";
      } else {
        navHeader.style.top = "-100px";
      }
  
      
      prevScrollPos = currentScrollPos;
    });
  });

  

  
updateTextForActiveSlide();