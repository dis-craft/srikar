// Smooth Scroll for Anchor Links
document.addEventListener("DOMContentLoaded", function() {
  // Select all links with hashes
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
  });
});

// Project Section Carousel
document.addEventListener("DOMContentLoaded", function() {
  const projectContainer = document.querySelector(".project-container");
  const projects = [
      "Project 1: Description of Project 1",
      "Project 2: Description of Project 2",
      "Project 3: Description of Project 3",
      "Project 4: Description of Project 4",
      "Project 5: Description of Project 5",
      "Project 6: Description of Project 6",
      // Add more projects as needed
  ];
  let currentIndex = 0; // Tracks the starting project in the view

  // Populate the project-container with projects
  projects.forEach(project => {
      const cardWrapper = document.createElement("div");
      cardWrapper.classList.add("card-wrapper");

      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = project;

      cardWrapper.appendChild(card);
      projectContainer.appendChild(cardWrapper);
  });

  // Calculate the width of each card wrapper
  const cardWrapperWidth = document.querySelector(".card-wrapper").offsetWidth;

  // Event listener for Next button to slide to the next set of projects
  document.getElementById("next").addEventListener("click", () => {
      currentIndex += 1;

      // Wrap around to the beginning if we've reached the end
      if (currentIndex > projects.length - 3) {
          currentIndex = 0;
      }

      // Slide the project-container
      projectContainer.style.transform = `translateX(-${cardWrapperWidth * currentIndex}px)`;
  });
});

// // 3D Card Tilt Effect
// document.addEventListener("DOMContentLoaded", function() {
//     const cardWrappers = document.querySelectorAll(".card-wrapper");

//     cardWrappers.forEach(wrapper => {
//         const card = wrapper.querySelector(".card");

//         // Mousemove event to rotate card
//         card.addEventListener("mousemove", function(e) {
//             const rect = card.getBoundingClientRect();
//             const x = e.clientX - rect.left - rect.width / 2;
//             const y = e.clientY - rect.top - rect.height / 2;

//             // Reduced tilt by 30%
//             card.style.transform = `rotateX(${-y / 65}deg) rotateY(${x / 40}deg)`;
//         });

//         // Reset transform on mouse leave
//         card.addEventListener("mouseleave", function() {
//             card.style.transform = `rotateX(0) rotateY(0)`;
//         });
//     });
// });


VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
max: 20, // Max tilt rotation (default is 20)
speed: 200, // Animation speed (default is 300)
glare: true, // Enables glare effect
"max-glare": 0.1, // Max glare opacity (0.5 = 50%)
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the scroll-to-top button when scrolling down
window.onscroll = function() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = "block";
  } else {
      scrollTopBtn.style.display = "none";
  }
};


// /*          *     .        *  .    *    *   . 
//  .  *  move your mouse to over the stars   .
//  *  .  .   change these values:   .  *
//    .      * .        .          * .       */
//    const STAR_COLOR = '#000000';
//    const STAR_SIZE = 3;
//    const STAR_MIN_SCALE = 0.2;
//    const OVERFLOW_THRESHOLD = 50;
//    const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 8;
 
//    const canvas = document.querySelector( 'canvas' ),
//          context = canvas.getContext( '2d' );
 
//    let scale = 1, // device pixel ratio
//        width,
//        height;
 
//    let stars = [];
 
//    let pointerX,
//        pointerY;
 
//    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
 
//    let touchInput = false;
 
//    generate();
//    resize();
//    step();
 
//    window.onresize = resize;
//    canvas.onmousemove = onMouseMove;
//    canvas.ontouchmove = onTouchMove;
//    canvas.ontouchend = onMouseLeave;
//    document.onmouseleave = onMouseLeave;
 
//    function generate() {
 
//       for( let i = 0; i < STAR_COUNT; i++ ) {
//        stars.push({
//          x: 0,
//          y: 0,
//          z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )
//        });
//       }
 
//    }
 
//    function placeStar( star ) {
 
//      star.x = Math.random() * width;
//      star.y = Math.random() * height;
 
//    }
 
//    function recycleStar( star ) {
 
//      let direction = 'z';
 
//      let vx = Math.abs( velocity.x ),
//            vy = Math.abs( velocity.y );
 
//      if( vx > 1 || vy > 1 ) {
//        let axis;
 
//        if( vx > vy ) {
//          axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
//        }
//        else {
//          axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
//        }
 
//        if( axis === 'h' ) {
//          direction = velocity.x > 0 ? 'l' : 'r';
//        }
//        else {
//          direction = velocity.y > 0 ? 't' : 'b';
//        }
//      }
   
//      star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );
 
//      if( direction === 'z' ) {
//        star.z = 0.1;
//        star.x = Math.random() * width;
//        star.y = Math.random() * height;
//      }
//      else if( direction === 'l' ) {
//        star.x = -OVERFLOW_THRESHOLD;
//        star.y = height * Math.random();
//      }
//      else if( direction === 'r' ) {
//        star.x = width + OVERFLOW_THRESHOLD;
//        star.y = height * Math.random();
//      }
//      else if( direction === 't' ) {
//        star.x = width * Math.random();
//        star.y = -OVERFLOW_THRESHOLD;
//      }
//      else if( direction === 'b' ) {
//        star.x = width * Math.random();
//        star.y = height + OVERFLOW_THRESHOLD;
//      }
 
//    }
 
//    function resize() {
 
//      scale = window.devicePixelRatio || 1;
 
//      width = window.innerWidth * scale;
//      height = window.innerHeight * scale;
 
//      canvas.width = width;
//      canvas.height = height;
 
//      stars.forEach( placeStar );
 
//    }
 
//    function step() {
 
//      context.clearRect( 0, 0, width, height );
 
//      update();
//      render();
 
//      requestAnimationFrame( step );
 
//    }
 
//    function update() {
 
//      velocity.tx *= 0.96;
//      velocity.ty *= 0.96;
 
//      velocity.x += ( velocity.tx - velocity.x ) * 0.8;
//      velocity.y += ( velocity.ty - velocity.y ) * 0.8;
 
//      stars.forEach( ( star ) => {
 
//        star.x += velocity.x * star.z;
//        star.y += velocity.y * star.z;
 
//        star.x += ( star.x - width/2 ) * velocity.z * star.z;
//        star.y += ( star.y - height/2 ) * velocity.z * star.z;
//        star.z += velocity.z;
   
//        // recycle when out of bounds
//        if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {
//          recycleStar( star );
//        }
 
//      } );
 
//    }
 
//    function render() {
 
//      stars.forEach( ( star ) => {
 
//        context.beginPath();
//        context.lineCap = 'round';
//        context.lineWidth = STAR_SIZE * star.z * scale;
//        context.globalAlpha = 0.5 + 0.5*Math.random();
//        context.strokeStyle = STAR_COLOR;
 
//        context.beginPath();
//        context.moveTo( star.x, star.y );
 
//        var tailX = velocity.x * 2,
//            tailY = velocity.y * 2;
 
//        // stroke() wont work on an invisible line
//        if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
//        if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;
 
//        context.lineTo( star.x + tailX, star.y + tailY );
 
//        context.stroke();
 
//      } );
 
//    }
 
//    function movePointer( x, y ) {
 
//      if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {
 
//        let ox = x - pointerX,
//            oy = y - pointerY;
 
//        velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );
//        velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );
 
//      }
 
//      pointerX = x;
//      pointerY = y;
 
//    }
 
//    function onMouseMove( event ) {
 
//      touchInput = false;
 
//      movePointer( event.clientX, event.clientY );
 
//    }
 
//    function onTouchMove( event ) {
 
//      touchInput = true;
 
//      movePointer( event.touches[0].clientX, event.touches[0].clientY, true );
 
//      event.preventDefault();
 
//    }
 
//    function onMouseLeave() {
 
//      pointerX = null;
//      pointerY = null;
 
//    }
 

function isElementInViewport(el) {
const rect = el.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

function handleScroll() {
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    if (isElementInViewport(item)) {
        item.classList.add('visible');
    }
});
}

window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);