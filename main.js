// Initialize Bootstrap components
document.addEventListener('DOMContentLoaded', function () {
    // Auto-play carousel
    const carousel = document.querySelector('#mainSlider');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 2000,
        wrap: true
    });

    // Get all indicators
    const indicators = document.querySelectorAll('.indicator');

    // Update indicators when the slide changes
    carousel.addEventListener('slid.bs.carousel', function () {
        const currentIndex = carouselInstance._getItemIndex(carouselInstance._getActive()); // Get current slide index
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    });

    // Handle indicator clicks
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            const targetIndex = this.getAttribute('data-target');
            carouselInstance.to(targetIndex); // Navigate to the corresponding slide
        });
    });

    // Handle login form submission
    const loginForm = document.querySelector('#loginModal form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.querySelector('#emailInput').value;
            const password = document.querySelector('#passwordInput').value;
            const rememberMe = document.querySelector('#rememberMe').checked;
            console.log('Login attempt:', { email, rememberMe });
            // Add your login logic here
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.list-group-item');
    items.forEach(item => {
        item.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('bi-chevron-down')) {
                icon.classList.remove('bi-chevron-down');
                icon.classList.add('bi-chevron-up');
            } else {
                icon.classList.remove('bi-chevron-up');
                icon.classList.add('bi-chevron-down');
            }
        });
    });
});

document.querySelectorAll(".copyBtn").forEach((btn) => {
    btn.addEventListener("click", function () {
        let container = this.closest(".content-box"); // البحث عن أقرب سكشن للزر
        let textArea = container.querySelector(".textArea"); // العثور على textarea داخل نفس السيكشن
        let copyMessage = container.querySelector(".copyMessage"); // العثور على رسالة "Copied!"
        let errorMessage = container.querySelector(".errorMessage"); // العثور على رسالة "No text!"

        if (textArea.value.trim() === "") {
            // إذا كان الـ textarea فارغًا
            errorMessage.style.display = "inline"; // إظهار رسالة الخطأ
            copyMessage.style.display = "none"; // إخفاء رسالة النسخ
        } else {
            // إذا كان هناك نص
            textArea.select();
            document.execCommand("copy");

            // إخفاء رسائل المحلية
            copyMessage.style.display = "none";
            errorMessage.style.display = "none";

            // عرض رسالة التنبيه المخصصة
            const customAlert = document.getElementById("customAlert");
            customAlert.classList.remove("hidden");

            // إخفاء الرسالة بعد 2 ثانية
            setTimeout(() => {
                customAlert.classList.add("hidden");
            }, 2000);

            // إضافة مستمع لإغلاق الرسالة يدويًا
            customAlert.querySelector(".closeBtn").addEventListener("click", () => {
                customAlert.classList.add("hidden");
            });
        }
    });
});
