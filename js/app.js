const landing_content = document.querySelectorAll(".hero_content")
// const img_list = document.querySelectorAll('.img_list');
const img_list = document.querySelectorAll('[data-tab-img]');
const slide = document.querySelectorAll('[data-tab-content]');

const img_li = document.querySelectorAll('[data-img]');

function slideshow() {

    let slideIndex = 0;
    img_li.forEach((i, index) => {
        i.addEventListener('click', () => {
            var i;
            var slides = document.querySelectorAll(".slide");
            var landing_content = document.querySelectorAll(".hero_content")
    
            for (i = 0; i < slides.length; i++) {
                slides[i].style.visibility = "hidden";
                slides[i].style.opacity = 0;
                landing_content[slideIndex-1].style.display = "none";
            }

            if(index == 0){
                slideIndex = 1;
   
                slides[slideIndex-1].style.visibility = "visible";
                slides[slideIndex-1].style.opacity = 1;

                landing_content[slideIndex-1].style.display = "flex";
            }
            else if(index == 1){
                slideIndex = 2;
   
                slides[slideIndex-1].style.visibility = "visible";
                slides[slideIndex-1].style.opacity = 1;

                landing_content[slideIndex-1].style.display = "flex";
                
            }
            else if(index == 2){
                slideIndex = 3;
                slides[slideIndex-1].style.visibility = "visible";
                slides[slideIndex-1].style.opacity = 1;

                landing_content[slideIndex-1].style.display = "flex";
           
            } 
            clearTimeout(showSlides)
        })
    });
    showSlides();
  
    function showSlides() {
        var i;
        var slides = document.querySelectorAll(".slide");
        for (i = 0; i < img_list.length; i++) {
            img_list[i].style.visibility = "hidden";
            img_list[i].style.opacity = 0;

            landing_content[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex-1].style.visibility = "visible";
        slides[slideIndex-1].style.opacity = 1;

        landing_content[slideIndex-1].style.display = "flex";
        setTimeout(showSlides, 9000);
    }
 
   
}

slideshow();

const so_tabs = document.querySelectorAll('[data-tab-target]');
const so_content = document.querySelectorAll('[data-tab-content]');



so_tabs.forEach(so => {
    
    so.addEventListener('click', () => {
        const sotarget = document.querySelector(so.dataset.tabTarget)
        so_content.forEach(tabContent => {
            tabContent.classList.remove('so_active')
           
        })
        so_tabs.forEach(tab => {
            tab.classList.remove('so_active')
        })
        so.classList.add('so_active')
        sotarget.classList.add('so_active')
    })
})


// navigation
const burger_trigger = document.querySelector('#burger_trigger')
const nav_list = document.querySelector('.list')
// console.log(mobile_menu)
// 
burger_trigger.addEventListener('click', () => {
    nav_list.classList.toggle('active')
    burger_trigger.classList.toggle('active')
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 1059){
        if(nav_list.classList.contains('active')){
            nav_list.classList.remove('active')
            burger_trigger.classList.remove('active')
        }
    }
})

window.addEventListener("scroll", function(){
    var header = document.querySelector('.nav_container');
    header.classList.toggle("sticky", window.scrollY > 0)
})


// Get the button
let mybutton = document.getElementById("page_up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "grid";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})




