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
  const image = document.querySelector(".image-about");

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



// const numFish = 50;
// const fishArray = [];
// const svg = document.getElementById('underwater-scene');

// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// document.addEventListener('mousemove', (event) => {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
// });

// for (let i = 0; i < numFish; i++) {
//     const fish = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//     fish.setAttribute('fill', 'lightblue');
//     fish.setAttribute('r', '5');
//     fish.style.filter = 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))';
//     svg.appendChild(fish);

//     fishArray.push({
//         element: fish,
//         x: Math.random() * window.innerWidth, 
//         y: Math.random() * window.innerHeight, 
//         speedX: Math.random() * 2 + 0.5, 
//         speedY: Math.random() * 2 + 0.5, 
//         sway: Math.random() * 0.02 - 0.01, 
//         direction: Math.random() * Math.PI * 2, 
//     });
// }

// function animateFish() {
//     fishArray.forEach(fish => {
//         fish.x += fish.speedX * Math.cos(fish.direction);
//         fish.y += fish.speedY * Math.sin(fish.direction);

//         fish.x += Math.sin(fish.direction) * fish.sway * 30;
//         fish.y += Math.cos(fish.direction) * fish.sway * 20;

//         fish.direction += fish.sway;

//         if (fish.x > window.innerWidth || fish.x < 0) {
//             fish.speedX = -fish.speedX;
//         }
//         if (fish.y > window.innerHeight || fish.y < 0) {
//             fish.speedY = -fish.speedY;
//         }

//         fish.x += (mouseX - fish.x) * 0.01;
//         fish.y += (mouseY - fish.y) * 0.01;

//         fish.element.setAttribute('cx', fish.x);
//         fish.element.setAttribute('cy', fish.y);
//     });

//     requestAnimationFrame(animateFish);
// }


// animateFish();

// const canvas = document.getElementById('embersCanvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const embers = [];
//     const emberCount = 200;

//     // Ember particle settings
//     const emberSettings = {
//         maxSize: 4,
//         minSize: 1,
//         maxSpeed: 7,
//         minSpeed: 0.5,
//         color: 'rgb(255, 255, 255)',
//     }
//     // Adjust canvas size on resize
//     window.addEventListener('resize', () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//     });

//     // Ember particle class
//     class Ember {
//         constructor() {
//             this.reset();
//         }

//         reset() {
//             this.x = Math.random() * canvas.width;
//             this.y = canvas.height + Math.random() * 100;
//             this.size = emberSettings.minSize + Math.random() * (emberSettings.maxSize - emberSettings.minSize);
//             this.speed = emberSettings.minSpeed + Math.random() * (emberSettings.maxSpeed - emberSettings.minSpeed);
//             this.opacity = 1;
//             this.fadeRate = Math.random() * 0.02 + 0.005;
//             this.color = emberSettings.color;
//         }

//         update() {
//             this.y -= this.speed;
//             this.opacity -= this.fadeRate;
//             if (this.opacity <= 0) {
//                 this.reset();
//             }
//         }

//         draw() {
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//             ctx.fillStyle = this.color.replace('0.7', this.opacity.toFixed(2)); // Adjust opacity
//             ctx.fill();
//         }
//     }

//     // Create initial embers
//     for (let i = 0; i < emberCount; i++) {
//         embers.push(new Ember());
//     }

//     // Animation loop
//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         embers.forEach(ember => {
//             ember.update();
//             ember.draw();
//         });

//         requestAnimationFrame(animate);
//     }

//     animate();