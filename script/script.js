 // دالة لتنفيذ تأثير العد التصاعدي
 function startCounting() {
    const counters = document.querySelectorAll('.expertise .item h3');

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target'); // القيمة النهائية
      const increment = target / 100; // زيادة تدريجية
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.querySelector('span').textContent = Math.ceil(current) + "+"; // تحديث الرقم مع علامة +
          setTimeout(updateCounter, 20); // سرعة العد
        } else {
          counter.querySelector('span').textContent = target + "+"; // التأكد من الوصول للقيمة النهائية
        }
      };

      updateCounter();
    });
  }

  // بدء العد عند تحميل الصفحة
  window.onload = startCounting;


  //11
  window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('small-header');
    } else {
        header.classList.remove('small-header');
    }
});

// فتح وإغلاق القائمة الجانبية
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('open');
}

//22
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        spaceBetween: 20, /* المسافة بين الصور */
        centeredSlides: true,
        breakpoints: {
            // عندما يكون عرض الشاشة >= 1200px
            1200: {
                slidesPerView: 3, // 3 صور
            },
            // عندما يكون عرض الشاشة >= 768px
            768: {
                slidesPerView: 2, // صورتين
            },
            // عندما يكون عرض الشاشة < 768px
            0: {
                slidesPerView: 1, // صورة واحدة
            },
        },
        on: {
            init: function () {
                this.el.addEventListener('mouseenter', function () {
                    swiper.autoplay.stop();
                });
                this.el.addEventListener('mouseleave', function () {
                    swiper.autoplay.start();
                });
            },
        },
    });
});
//33
const popupOverlay = document.getElementById('popupOverlay');
    const popupImage = document.getElementById('popupImage');

    const articleImages = {
        contentStrategy: "image/Service Details 1 (4).png", // ضع هنا رابط الصورة الأولى
        consultation: "image/Service Details 2 (4).png" // ضع هنا رابط الصورة الثانية
    };

    function showPopup(article) {
        const imageUrl = articleImages[article];
        popupImage.src = imageUrl;
        popupOverlay.style.display = 'flex';
    }

    function closePopup() {
        popupOverlay.style.display = 'none';
    }