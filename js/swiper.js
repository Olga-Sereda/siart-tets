let swiper

function initializeSwiper() {
  swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  // autoHeight: false,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
    lockClass: "swiper-block",
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 8,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    568: {
      slidesPerView: 3,
      spaceBetween: 8,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 8,
      pagination: {
        el: null, 
      },
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 8,
      pagination: {
        el: null, 
      },
    },
    1260: {
      spaceBetween: 20,
      pagination: {
        el: null, 
      },
    },
  },
});
}

initializeSwiper();


window.addEventListener("resize", () => {
  if (swiper) {
    swiper.destroy(true, true);
  }
  const paginationContainer = document.querySelector(".swiper-pagination");
  if (paginationContainer) {
    paginationContainer.innerHTML = ""; 
  }

  initializeSwiper(); 
});
