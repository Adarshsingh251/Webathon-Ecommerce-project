// team code js start here 
// function team() {
    let team = document.querySelectorAll(".team");

    team.forEach(e => {
        let img = e.querySelector("img");
        if (img) {
            e.addEventListener("mouseenter", () => {
                img.classList.add("touch-visible");
            });
            e.addEventListener("mouseleave", () => {
                img.classList.remove("touch-visible");
            });

            // i am writing mobile code from here;
            let visible = false;

            e.addEventListener("touchstart", () => {
                visible = !visible;
                img.style.display = visible ? "block" : "none";
            });
            document.addEventListener("touchstart", (ev) => {
                if (!e.contains(ev.target)) {
                    img.classList.remove("touch-visible");
                    visible = false;
                }
            });
        }
    })
// }

// team code end here
// function imgHover() {
    let swiper = new Swiper(".swiper", {
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
        },
        slidesPerView: 4,
        spaceBetween: 5,
        speed: 6000,
        breakpoints: {
            200: {
                slidesPerView: 2,
            },
            1000:{
                slidesPerView: 3,
            },
            1700: {
                slidesPerView: 5,
            }
        }
    })
    const swiperslides = document.querySelectorAll('.swiper-slide');
    swiperslides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
        });

        slide.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
        });
    });

    // i have done with element but i want to add mystery Element its here
    // 1)
    const hour = new Date().getHours();
    let main = document.querySelector(".main")
    let bgColor = "#fff";

    if (hour >= 6 && hour < 12) {
        bgColor = "#FFFAE5";
    } else if (hour >= 12 && hour < 18) {
        bgColor = "#E0F7FA";
    } else if (hour >= 18 && hour < 21) {
        bgColor = "#FFC1A1";
    } else {
        bgColor = "#1C1C3A";
    }

    main.style.backgroundColor = bgColor;

    // 2)
    let cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (dets) => {
        cursor.style.left = dets.pageX + "px";
        cursor.style.top = dets.pageY + "px";

    })


    let teams2 = document.querySelectorAll(".team");
    teams2.forEach(e => {
        e.addEventListener("mouseover", () => {
            cursor.style.transform = "scale(2)";
            cursor.style.backgroundColor = "#ff6f61";
        })
        e.addEventListener("mouseout", () => {
            cursor.style.transform = "scale(1)";
            cursor.style.backgroundColor = "yellow";
        })
    });


    let treading_product_imgs = document.querySelectorAll(".treading_product img");
    treading_product_imgs.forEach(e => {
        e.addEventListener("mouseover", () => {
            cursor.style.transform = "scale(2)";
            cursor.style.backgroundColor = "#ff6f61";
        })
        e.addEventListener("mouseout", () => {
            cursor.style.transform = "scale(1)";
            cursor.style.backgroundColor = "yellow";
        })
    })
// }

// navbar code

// function nav() {
    const menuBtn = document.getElementById("menuBtn");
    const menuIcon = document.getElementById("menuIcon");
    const navPanel = document.getElementById("navPanel");
    const closeBtn = document.getElementById("closeBtn");
    let anchor = document.querySelectorAll(".anchor");

    menuBtn.addEventListener("click", () => {
        navPanel.classList.add("active");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    });

    closeBtn.addEventListener("click", () => {
        navPanel.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
    anchor.forEach(e =>{
        e.addEventListener("click",()=>{
        navPanel.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        })
    })
// }

let landing_swiper = new Swiper(".landing_img_swiper",{
    loop:true,
    autoplay:{
        delay:2500
    },
    speed:3000
})

var swipe = new Swiper(".test-swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
    },
    effect: "coverflow",
    slidesPerView: 2.8,
    spaceBetween: 20,
    speed: 1000,
    breakpoints:{
        200:{
            slidesPerView:1
        },
        800:{
            slidesPerview:2
        },
        1000:{
            slidesPerView:3,
        }
    }
})

let product_img = document.querySelectorAll(".product .card img");
product_img.forEach(e=>{
    e.addEventListener("mouseover", () => {
            cursor.style.transform = "scale(2)";
            cursor.style.backgroundColor = "#ff6f61";
        })
        e.addEventListener("mouseout", () => {
            cursor.style.transform = "scale(1)";
            cursor.style.backgroundColor = "yellow";
        })
})