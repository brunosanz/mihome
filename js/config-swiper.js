var swiper1 = new Swiper('.swiper1', {
          slidesPerView: 1.5,
          //slidesPerColumn: 2,
          //slidesPerGroup: 3,
          spaceBetween: 5,
          loop: false,
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: false,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          coverflowEffect: {
            rotate: 5,
            stretch: 0,
            depth:90,
            modifier: 4,
            slideShadows: true,
          },
          // init: false,
          navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
          },
          /* pagination: {
            el: ".swiper-pagination",
            //dynamicBullets: true,
          }, */
          pagination: {
            el: '.swiper-pagination1',
            clickable: true,
          },
          mousewheel: true,
          keyboard: true,
          breakpoints: {
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            }
          }
      });

      var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 6.5,
        //slidesPerColumn: 2,
        //slidesPerGroup: 3,
        spaceBetween: 5,
        loop: false,
        effect: 'coverflow1',
        grabCursor: true,
        centeredSlides: false,
        coverflowEffect: {
          rotate: 5,
          stretch: 0,
          depth:90,
          modifier: 1,
          slideShadows: true,
        },
        // init: false,
        pagination: {
          el: '.swiper-pagination2',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        /* pagination: {
          el: ".swiper-pagination",
          //dynamicBullets: true,
        }, */
        mousewheel: true,
        keyboard: true,
        breakpoints: {
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          }
        }
    });

    var swiper3 = new Swiper('.swiper3', {
      slidesPerView: 6.5,
      //slidesPerColumn: 2,
      //slidesPerGroup: 3,
      spaceBetween: 5,
      loop: false,
      effect: 'coverflow1',
      grabCursor: true,
      centeredSlides: false,
      coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth:90,
        modifier: 1,
        slideShadows: true,
      },
      // init: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      /* pagination: {
        el: ".swiper-pagination",
        //dynamicBullets: true,
      }, */
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        1024: {
          slidesPerView: 6.5,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        }
      }
  });

  var swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    //slidesPerColumn: 2,
    //slidesPerGroup: 3,
    spaceBetween: 5,
    loop: false,
    effect: 'coverflow',
    /* grabCursor: true, */
    centeredSlides: true,
    /*autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },*/
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth:90,
      modifier: 1,
      slideShadows: true,
    },
    // init: false,
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
    /* pagination: {
      el: ".swiper-pagination",
      //dynamicBullets: true,
    }, */
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      }
    }
});

var swiper5 = new Swiper('.swiper5', {
  slidesPerView: 6.5,
  //slidesPerColumn: 2,
  //slidesPerGroup: 3,
  spaceBetween: 5,
  loop: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 5,
    stretch: 0,
    depth:90,
    modifier: 3,
    slideShadows: true,
  },
  // init: false,
  navigation: {
    nextEl: '.swiper-button-next5',
    prevEl: '.swiper-button-prev5',
  },
    pagination: {
    el: ".swiper-pagination",
    //dynamicBullets: true,
  },
  pagination: {
    el: '.swiper-pagination5',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    }
  }
});

var swiperNew = new Swiper('.swiperNew', {
  slidesPerView: 6.5,
  //slidesPerColumn: 2,
  //slidesPerGroup: 3,
  spaceBetween: 5,
  loop: false,
  effect: 'coverflow1',
  grabCursor: true,
  centeredSlides: false,
  coverflowEffect: {
    rotate: 5,
    stretch: 0,
    depth:90,
    modifier: 1,
    slideShadows: true,
  },
  // init: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  /* pagination: {
    el: ".swiper-pagination",
    //dynamicBullets: true,
  }, */
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    }
  }
});

      function getSlideIndexByClass(className) {
            var index = 0;
            $.each($('.swiper-wrapper').children(), function(i, item) {
              if ($(item).hasClass(className)) {
                index = i;
                return false;
              }
            });
            return index;
      }

      $(document).ready(function(){

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');

            
            
            if(value == "all")
            {
                swiper.slideTo(getSlideIndexByClass(value),1000,false);
                
            }
            else
            {
                swiper.slideTo(getSlideIndexByClass(value),1000,false);

            }
        });
      });

     