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

  /* <div class="card swiper-slide" >
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="img/Mask Group.jpg" class="card-image">
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="name">David Dell</h2>
                                <p class="decription">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button class="button">view more</button>
                            </div>
                        </div>
                        <div class="card swiper-slide"  >
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="img/Mask Group.jpg" class="card-image">
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="name">David Dell</h2>
                                <p class="decription">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button class="button">view more</button>
                            </div>
                        </div>
                        <div class="card swiper-slide"  >
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="img/Mask Group.jpg" class="card-image">
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="name">David Dell</h2>
                                <p class="decription">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <button class="button">view more</button>
                            </div>
                        </div>
                        */
