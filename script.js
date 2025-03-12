// Mengubah warna header saat di-scroll
window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// testimoni
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    let currentIndex = 0;

    prevButton.innerHTML = "❮";
    nextButton.innerHTML = "❯";
    prevButton.classList.add("nav-button");
    nextButton.classList.add("nav-button");

    const navContainer = document.createElement("div");
    navContainer.classList.add("testimonial-nav");
    navContainer.appendChild(prevButton);
    navContainer.appendChild(nextButton);

    document.querySelector(".testimonials").appendChild(navContainer);

    function updateSlider() {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const totalTestimonials = testimonials.length;
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    document.querySelector(".prev-btn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentIndex);
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);
});

// pembayaran
document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let amount = document.getElementById("amount").value;
    let paymentMethod = document.getElementById("payment-method").value;

    if (!name || !email || !amount || amount < 1000) {
        alert("Silakan isi semua data dengan benar.");
        return;
    }

    alert(`Terima kasih, ${name}! Pembayaran sebesar Rp${amount} melalui ${paymentMethod} sedang diproses.`);
});



// back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// modal
function showModal() {
    document.getElementById("donationModal").classList.add("show");
}

function closeModal() {
    document.getElementById("donationModal").classList.remove("show");
}

// Tambahkan event listener saat form donasi dikirim
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman
    showModal(); // Menampilkan modal
});

// total donasi
document.addEventListener("DOMContentLoaded", function () {
    const totalDonasi = document.getElementById("total-donasi");
    let angka = 1250000000;
    let step = 50000;

    function updateDonasi() {
        if (angka < 1500000000) { // Simulasi angka bertambah
            angka += step;
            totalDonasi.innerText = "Rp " + angka.toLocaleString("id-ID");
            setTimeout(updateDonasi, 3000); // Update tiap 3 detik
        }
    }

    updateDonasi();
});



