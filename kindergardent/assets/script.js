document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector(".navigation-wrap");
    
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("scroll-on");
        } else {
            nav.classList.remove("scroll-on");
        }
    };
});



document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link"); 
    let navCollapse = document.querySelector(".navbar-collapse.collapse"); 

    navLinks.forEach(function (link) { 
        link.addEventListener("click", function () {
            navCollapse.classList.remove("show"); 
        });
    });
});




document.addEventListener("DOMContentLoaded",()=>{
    function counter (id ,start ,end,duration){
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(()=>{
                current += increment;
                obj.textContent = current;
                if(current == end){
                    clearInterval(timer);
                }
            },step);
    }
    counter("counter1",0,100,2000);
    counter("counter2",0,200,2000);
    counter("counter3",0,100,2000);
    counter("counter4",0,200,2000);
});



// Smooth Scroll Animation (Locomotive + GSAP)
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    // Navbar Scroll Effect
    let nav = document.querySelector(".navigation-wrap");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("scroll-on");
        } else {
            nav.classList.remove("scroll-on");
        }
    });

    // Fade-in effect for sections
    gsap.utils.toArray(".wrapper, .counter-section, .about-section, .story-section, .programs-section, .review-section, .faq, .footer").forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });
    });

    // Text & Image Scale Effect
    gsap.utils.toArray("h1, h2, h4, p").forEach((text) => {
        gsap.from(text, {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: text,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        });
    });

    gsap.utils.toArray("img").forEach((img) => {
        gsap.from(img, {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            scrollTrigger: {
                trigger: img,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });
    });

    // Button Hover Animation
    document.querySelectorAll(".main-btn, .white-btn").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.05, duration: 0.2 });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.2 });
        });
    });

    // Page Load Animation
    gsap.from("body", {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
    });

    // Hero Section Animation
    gsap.from(".top-banner", {
        opacity: 0,
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
    });
});

