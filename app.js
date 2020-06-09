window.addEventListener('scroll',()=>{
  let nav=document.querySelector('nav');
  nav.classList.toggle("sticky",window.scrollY>0);
})

const navSlide=()=>{
  const burger=document.querySelector('.burger');
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li')
  
  burger.addEventListener('click',()=>{
    // tooggle nav
    nav.classList.toggle('nav-active');

 // animate links
 navLinks.forEach((link,index)=>{
  if (link.style.animation){
    link.style.animation=''
  }else{
    link.style.animation=`navLinkFade 0.5s ease forwards ${index/ 7 + 1}s`
  }
})

//burger animatiom
  burger.classList.toggle('toggle');
  })
 
}

navSlide();