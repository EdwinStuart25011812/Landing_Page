const mainConteiner = document.getElementById('banner')
fetch('views/navbar.html').then(response=>response.text()).then(html=>mainConteiner.innerHTML=html)

const mainFooter = document.getElementById('footer')
fetch('views/footer.html').then(response=>response.text()).then(html=>mainFooter.innerHTML=html)

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 35,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      520:{
        slidesPerView: 1,
      },
      
      950:{
        slidesPerView: 2,
      }
    }
  });
