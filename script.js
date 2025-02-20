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
gsap.ticker.add((time) => {lenis.raf(time * 1000);});
gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", function () {
  const aboutTitle = document.querySelector(".parallax__title_about");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutTitle.classList.add("visible");
        } else {
          aboutTitle.classList.remove("visible"); // Biar muncul lagi pas scroll
        }
      });
    },
    { threshold: 0.2 } // Muncul saat 20% elemen terlihat
  );

  observer.observe(aboutTitle);
});

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".visimisi");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          image.classList.add("visible"); 
        } else {
          image.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 } 
  );

  observer.observe(image);
});

document.addEventListener("DOMContentLoaded", function () {
  const vip = document.querySelector(".container-vip");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          vip.classList.add("visible"); 
        } else {
          vip.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 } 
  );

  observer.observe(vip);
});

document.addEventListener("DOMContentLoaded", function () {
  const pricing = document.querySelector(".pricing");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          pricing.classList.add("visible"); 
        } else {
          pricing.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 } 
  );

  observer.observe(pricing);
});


// Profile js
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const openPopupButton = document.getElementById("openPopup");
  const closePopupButton = document.getElementById("closePopup");
  const body = document.body;
  let scrollPosition = 0;

  function openPopup() {
    scrollPosition = window.scrollY;
    popup.style.display = "flex";
    
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.left = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
  }

 
  function closePopup() {
    popup.style.display = "none";

    body.style.position = "";
    body.style.top = "";
    body.style.overflow = "";
    window.scrollTo(0, scrollPosition);
  }
  openPopupButton.addEventListener("click", openPopup);

  closePopupButton.addEventListener("click", closePopup);

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopup();
    }
  });
});


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
    mouseLeaveDelay: null }),

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
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };

    },
    cardBgTransform() {
      return {
        transform: `none`
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})` };

    } },

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
    } } });



const app = new Vue({
  el: '#app' });


