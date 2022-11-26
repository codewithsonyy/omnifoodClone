const btnNav= document.querySelector('.mobile-nav');
const btnOpen = document.querySelector('.menuopen');
const btnClose = document.querySelector('.menuclose');
const btnMenu = document.querySelector('.menumobile');
const navBar = document.querySelector('.navbar');

btnNav.addEventListener('click',function(){
  btnOpen.classList.toggle('hidden');
  btnClose.classList.toggle('hidden');
  btnMenu.classList.toggle('hidden');
})

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }


    if (link.classList.contains("menu")) 
     {btnOpen.classList.toggle('hidden');
      btnClose.classList.toggle('hidden');
      btnMenu.classList.toggle('hidden');}
  });
});
const sectionHero = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      navBar.classList.add("sticky",'bg-white','bg-opacity-80','top-0');
    }

    if (ent.isIntersecting === true) {
      navBar.classList.remove("sticky",'bg-white','bg-opacity-80','top-0');
    }
  },
  { 
  
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);