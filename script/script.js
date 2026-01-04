/* =========================
   Counter (Expertise)
========================= */
function startCounting() {
  const counters = document.querySelectorAll('.expertise .item h3');

  counters.forEach(counter => {
    const target = Number(counter.getAttribute('data-target') || 0);
    const span = counter.querySelector('span');
    if (!span) return;

    // لو الهدف صغير، نخليه أسرع وبشكل ثابت
    const steps = 80;
    const increment = target / steps;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        span.textContent = Math.ceil(current) + "+";
        setTimeout(updateCounter, 16);
      } else {
        span.textContent = target + "+";
      }
    };

    updateCounter();
  });
}

/* =========================
   Side Menu
========================= */
function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  const menuIcon = document.getElementById('menuIcon');
  if (!sideMenu || !menuIcon) return;

  sideMenu.classList.toggle('open');
  menuIcon.classList.toggle('open');
}

/* close menu on outside click */
document.addEventListener('click', function (event) {
  const sideMenu = document.getElementById('sideMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (!sideMenu || !menuIcon) return;

  if (
    !sideMenu.contains(event.target) &&
    !menuIcon.contains(event.target) &&
    sideMenu.classList.contains('open')
  ) {
    sideMenu.classList.remove('open');
    menuIcon.classList.remove('open');
  }
});

/* =========================
   Swiper
========================= */
document.addEventListener('DOMContentLoaded', function () {
  // start counter
  startCounting();

  // init swiper
  const swiperEl = document.querySelector('.swiper-container');
  if (swiperEl && typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      spaceBetween: 20,
      centeredSlides: true,
      breakpoints: {
        1200: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
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
  }

  // close popup by ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
  });

  // close popup by outside click
  const overlay = document.getElementById('popupOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target && e.target.id === 'popupOverlay') closePopup();
    });
  }
});

/* =========================
   NEW Popup (Text content like the purple design)
========================= */
const WHATSAPP = "https://wa.me/783950649";

const servicesPopupData = {
  contentStrategy: {
    title: "بناء استراتيجية محتوى مميزة",
    price: "السعر : $100",
    lead:
      "المحتوى هو الملك، عبارة شائعة أثبتت أهميتها في تسويق المهارات والمنتجات والخدمات. إذا كنت تواجه صعوبة في تنظيم أفكارك وكتابة محتوى يعكس جودة خدماتك ويحقق أثرًا واضحًا، فهذه الخدمة مخصصة لمساعدتك.",
    columns: [
      {
        heading: "هذه الخدمة مناسبة لك إذا كنت:",
        items: [
          "مديرًا، مستشارًا، مستقلًا، أو صاحب مشروع حر ولا تعرف كيف تصمم خطة تسويق بالمحتوى.",
          "ترغب في الانتشار وبناء علامة تجارية أو شخصية قوية.",
          "تعاني من عدم الاستمرارية في النشر أو تنشر دون تحقيق نتائج ملموسة.",
          "تواجه ضعف الإقبال على خدماتك أو منتجاتك."
        ]
      },
      {
        heading: "ما الذي ستحصل عليه؟",
        items: [
          "تحليل شامل لصفحتك على فيسبوك لتحديد نقاط القوة والضعف وكيفية استثمار الفرص.",
          "خطة محتوى شهرية متكاملة تضم 15 منشورًا قابلة للتكرار تعتمد على القمع البيعي.",
          "توضيح الأهداف ونوع المحتوى لكل منشور.",
          "نصائح وأدوات فعّالة تساعدك على صناعة محتوى مميز.",
          "جلسة نقاش 30 دقيقة للإجابة عن استفساراتك."
        ]
      },
      {
        heading: "هذه الخدمة غير مناسبة إذا كنت:",
        items: [
          "لا تؤمن بأهمية الاستمرارية لتحقيق النجاح.",
          "ليس لديك الوقت الكافي لتطوير محتواك على مواقع التواصل."
        ]
      }
    ],
    ctaText: "احجز الآن",
    ctaLink: WHATSAPP
  },

  consultation: {
    title: "استشارة تسويقية مخصصة",
    price: "السعر : $70",
    lead:
      "الاستشارات الفعّالة ليست رفاهية، بل مفتاح النجاح لتطوير مشروعك وبناء علامة تجارية قوية.",
    columns: [
      {
        heading: "هذه الخدمة تناسبك إذا كنت تعاني من:",
        items: [
          "عدم القدرة على تحديد جمهورك المستهدف بدقة.",
          "صعوبة التغلب على المنافسين.",
          "الرغبة في بدء مشروعك لكنك لا تعرف من أين تبدأ.",
          "امتلاكك مهارة أو خبرة تريد تحويلها إلى مشروع وتسويقه بنجاح.",
          "مشكلات تسويقية في مشروعك وترغب في إيجاد حلول فعّالة."
        ]
      },
      {
        heading: "آلية العمل:",
        items: [
          "حدد 3 مشكلات أساسية تواجهها في مشروعك قبل بدء الجلسة.",
          "خلال الجلسة نناقش المشكلات بعمق.",
          "بعد الجلسة يتم إعداد ملف شامل بحلول تفصيلية ونظرية متكاملة.",
          "يتم تسليم الملف خلال أسبوع عبر الإيميل."
        ]
      }
    ],
    ctaText: "احجز الآن",
    ctaLink: WHATSAPP
  },

  diagnosis: {
    title: "خدمة التشخيص",
    price: "السعر : 50$",
    lead:
      " كثير من أصحاب المشاريع يتجهون إلى التواجد الرقمي وصناعة المحتوى بينما مشروعهم يعاني من مشكلات داخلية غير مرئية.",
    columns: [
      {
        heading: "ما هي خدمة التشخيص؟",
        items: [
          "خدمة استشارية متخصصة تهدف إلى تحليل الوضع الحقيقي للمشروع قبل البدء أو الاستمرار في أي نشاط تسويقي أو محتوى.",
          "نقوم بتشخيص المشروع من الداخل لنفهم: أين الخلل؟ ما الذي يعيق النمو؟ وما الذي يجب العمل عليه أولًا؟"
        ]
      },
      {
        heading: "لماذا يحتاج مشروعك إلى تشخيص؟",
        items: [
          "التواجد الرقمي لا يعوّض ضعف الأساس.",
          "المحتوى لا يعالج خلل النموذج.",
          "التسويق لا ينجح دون وضوح الرؤية.",
          "يوفر عليك وقتًا مهدورًا وميزانية تُصرف في الاتجاه الخاطئ وقرارات مبنية على افتراضات."
        ]
      },
      {
        heading: "ماذا نشخّص في مشروعك؟",
        items: [
          "وضوح فكرة المشروع وقيمته.",
          "الفئة المستهدفة ومدى دقتها.",
          "العرض الحالي (الخدمة / المنتج).",
          "رحلة العميل ونقاط التسرب.",
          "التواجد الرقمي والمحتوى الحالي.",
          "مدى جاهزية المشروع للتسويق والنمو."
        ]
      },
      {
        heading: "ماذا ستحصل بعد التشخيص؟",
        items: [
          "تقرير واضح بحالة مشروعك الحالية.",
          "تحديد المشكلات الجوهرية (لا السطحية).",
          "توصيات عملية قابلة للتنفيذ.",
          "أولويات واضحة: ماذا تعمل الآن؟ وماذا تؤجّل؟",
          "رؤية تساعدك على اتخاذ قرارات صحيحة."
        ]
      },
      {
        heading: "لمن هذه الخدمة؟",
        items: [
          "يشعر أن مشروعه لا ينمو رغم الجهد.",
          "يعاني من تخبّط في التسويق والمحتوى.",
          "يريد فهم مشروعه قبل الاستثمار فيه أكثر.",
          "لا يبحث عن تنفيذ سريع بل عن قرارات صحيحة."
        ]
      },
      {
        heading: "ماذا هذه الخدمة ليست؟",
        items: [
          "ليست إدارة حسابات.",
          "ليست صناعة محتوى.",
          "ليست حلولًا جاهزة أو عامة.",
          "هي خطوة استراتيجية قبل أي تنفيذ."
        ]
      },
      {
        heading: "لماذا نبدأ بالتشخيص؟",
        items: [
          "لأن القرار الصحيح أهم من أي محتوى، والأساس الواضح يسبق الظهور.",
          "احجز خدمة التشخيص الآن إذا كنت تريد مشروعًا أوضح، قرارات أدق، وتوجيهًا مبنيًا على فهم حقيقي."
        ]
      }
    ],
    ctaText: "احجز الآن",
    ctaLink: WHATSAPP
  }
};

function showPopup(key) {
  const data = servicesPopupData[key];
  if (!data) return;

  const overlay = document.getElementById('popupOverlay');
  if (!overlay) return;

  // elements inside popup
  const titleEl = document.getElementById('popTitle');
  const priceEl = document.getElementById('popPrice');
  const leadEl = document.getElementById('popLead');
  const gridEl = document.getElementById('popGrid');
  const ctaEl = document.getElementById('popCta');

  if (!titleEl || !priceEl || !leadEl || !gridEl || !ctaEl) return;

  titleEl.textContent = data.title;
  priceEl.textContent = data.price;
  leadEl.textContent = data.lead || "";
  ctaEl.textContent = data.ctaText || "احجز الآن";
  ctaEl.href = data.ctaLink || "#";

  gridEl.innerHTML = "";
  (data.columns || []).forEach(block => {
    const div = document.createElement('div');
    div.className = 'popup-block';

    const h3 = document.createElement('h3');
    h3.textContent = block.heading || "";
    div.appendChild(h3);

    const ul = document.createElement('ul');
    (block.items || []).forEach(it => {
      const li = document.createElement('li');
      li.textContent = it;
      ul.appendChild(li);
    });
    div.appendChild(ul);

    gridEl.appendChild(div);
  });

  overlay.classList.add('show');
  overlay.setAttribute('aria-hidden', 'false');
}

function closePopup() {
  const overlay = document.getElementById('popupOverlay');
  if (!overlay) return;

  overlay.classList.remove('show');
  overlay.setAttribute('aria-hidden', 'true');
}
