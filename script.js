// ------- Osmo [https://osmo.supply/] ------- //

document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);
  // Parallax Layers
  document.querySelectorAll('[data-parallax-layers]').forEach((triggerElement) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0
      }
    });
    const layers = [
      { layer: "1", yPercent: 70 },
      { layer: "2", yPercent: 55 },
      { layer: "3", yPercent: 40 },
      { layer: "4", yPercent: 10 }
    ];
    layers.forEach((layerObj, idx) => {
      tl.to(
        triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
        {
          yPercent: layerObj.yPercent,
          ease: "none"
        },
        idx === 0 ? undefined : "<"
      );
    });
  });
});
/* Lenis */
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);



document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".parallax__title_about, .column-visimisi, .column, .container-vip, .pricing, .cpt-subtitle, .cpt-stat-number, .cpt-stat-label, .container-unggulan"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Menghentikan observer setelah elemen muncul sekali
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});



// Profile js
const images = document.querySelectorAll('.carousel-track-visimisi img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
let currentIndex = 0;
const body = document.body;
let scrollPosition = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

function openModal(index) {
  scrollPosition = window.scrollY;
  modal.style.display = 'flex';
  modalImg.src = images[index].src;
  currentIndex = index;
  body.style.position = "fixed";
  body.style.top = `-${scrollPosition}px`;
  body.style.left = "0";
  body.style.width = "100%";
  body.style.overflow = "hidden";
}
function closeModal() {
  modal.style.display = 'none';

  body.style.position = "";
  body.style.top = "";
  body.style.overflow = "";
  window.scrollTo(0, scrollPosition);
}
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

// kontak js
Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };

    },
    cardBgTransform() {
      return {
        transform: `none`
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      };

    }
  },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 1;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
});



const app = new Vue({
  el: '#app'
});




  // Constructor
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  };

  // Logic ketik dan hapus
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 30;

    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 400;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  // Jalankan saat halaman selesai dimuat
  window.onload = function () {
    // Gabungkan semua class target
    var elements = document.querySelectorAll('.parallax__title, .parallax__title_2, .txt-awal');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };



  function openPopup(event) {
    scrollPosition = window.scrollY;
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.left = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    event.preventDefault();
    document.getElementById('popupBox').style.display = 'block';
  }

  function closePopup() {
    body.style.position = "";
  body.style.top = "";
  body.style.overflow = "";
  window.scrollTo(0, scrollPosition);
    document.getElementById('popupBox').style.display = 'none';
  }

  window.onclick = function(event) {
    var popup = document.getElementById('popupBox');
    if (event.target === popup) {
      popup.style.display = "none";
    }
  }


// testtimoni corousel
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let slidesPerView = getSlidesPerView();
  let currentIndex = slidesPerView;

  // Clone first and last slides for infinite effect
  const firstClones = slides.slice(0, slidesPerView).map(slide => slide.cloneNode(true));
  const lastClones = slides.slice(-slidesPerView).map(slide => slide.cloneNode(true));

  firstClones.forEach(clone => track.appendChild(clone));
  lastClones.reverse().forEach(clone => track.insertBefore(clone, track.firstChild));

  const allSlides = document.querySelectorAll(".carousel-slide");

  function getSlidesPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 4;
  }

  function updateCarousel(animate = true) {
    const slideWidth = allSlides[0].offsetWidth;
    if (!animate) track.style.transition = "none";
    else track.style.transition = "transform 0.4s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex >= allSlides.length - slidesPerView) return;
    currentIndex++;
    updateCarousel();
  });

  track.addEventListener("transitionend", () => {
    if (currentIndex === allSlides.length - slidesPerView) {
      currentIndex = slidesPerView;
      updateCarousel(false);
    } else if (currentIndex === 0) {
      currentIndex = allSlides.length - slidesPerView * 2;
      updateCarousel(false);
    }
  });

  window.addEventListener("resize", () => {
    slidesPerView = getSlidesPerView();
    updateCarousel(false);
  });

  updateCarousel(false);
});