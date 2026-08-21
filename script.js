/* =========================================================
   LASHKARS BOYZ6 OFFICIAL
   PREMIUM MAIN JAVASCRIPT
   Developed by M. Khateeb Ejaz
========================================================= */


/* =========================================================
   REAL SOCIAL MEDIA LINKS
========================================================= */

const socialLinks = {

    youtube:
        "https://www.youtube.com/@lashkarsboyz6_official_",

    tiktok:
        "https://www.tiktok.com/@lashkarsboyz6_official_",

    instagram:
        "https://www.instagram.com/malikkhateebejaz6",

    facebook:
        "https://www.facebook.com/malikkhateebejaz6",

    whatsapp:
        "https://wa.me/923496550742"

};


/* =========================================================
   WHATSAPP NUMBER
========================================================= */

const WHATSAPP_NUMBER = "923496550742";


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hide");

        }, 800);

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("open");

        const icon =
            menuButton.querySelector("i");

        if (!icon) return;

        if (mobileMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");

            const icon =
                menuButton.querySelector("i");

            if (!icon) return;

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();



/* =========================================================
   VIP PHOTO VIEWER / GALLERY
========================================================= */

const galleryPhotos = [
    "photo-1.jpg",
    "photo-2.jpg",
    "photo-3.jpg",
    "photo-4.jpg",
    "photo-5.jpg",
    "photo-6.jpg"
];

let currentPhotoIndex = 0;


function openPhoto(imageSource) {

    const viewer =
        document.getElementById("photoViewer");

    const fullPhoto =
        document.getElementById("fullPhoto");

    if (!viewer || !fullPhoto) {
        return;
    }

    currentPhotoIndex =
        galleryPhotos.indexOf(imageSource);

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = 0;
    }

    showPhoto(currentPhotoIndex);

    viewer.classList.add("active");

    document.body.classList.add("no-scroll");
}


function showPhoto(index) {

    const fullPhoto =
        document.getElementById("fullPhoto");

    const photoCounter =
        document.getElementById("photoCounter");

    if (!fullPhoto) {
        return;
    }

    currentPhotoIndex =
        (index + galleryPhotos.length) %
        galleryPhotos.length;

    fullPhoto.src =
        galleryPhotos[currentPhotoIndex];

    if (photoCounter) {

        photoCounter.textContent =
            `${currentPhotoIndex + 1} / ${galleryPhotos.length}`;

    }

}


function nextPhoto(event) {

    if (event) {
        event.stopPropagation();
    }

    showPhoto(
        currentPhotoIndex + 1
    );

}


function previousPhoto(event) {

    if (event) {
        event.stopPropagation();
    }

    showPhoto(
        currentPhotoIndex - 1
    );

}


function closePhoto(event) {

    if (event) {
        event.stopPropagation();
    }

    const viewer =
        document.getElementById("photoViewer");

    if (!viewer) {
        return;
    }

    viewer.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        const viewer =
            document.getElementById("photoViewer");

        if (
            !viewer ||
            !viewer.classList.contains("active")
        ) {
            return;
        }


        if (event.key === "Escape") {

            closePhoto();

        }


        if (event.key === "ArrowRight") {

            nextPhoto();

        }


        if (event.key === "ArrowLeft") {

            previousPhoto();

        }

    }
);






/* =========================================================
   CLOSE PHOTO WITH ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closePhoto();

        }

    }
);


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".section, .social-card, .hero-text, .hero-image-area"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show-element"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.10
            }
        );


    animatedElements.forEach(
        function (element) {

            revealObserver.observe(element);

        }
    );

} else {

    animatedElements.forEach(
        function (element) {

            element.classList.add(
                "show-element"
            );

        }
    );

}


/* =========================================================
   LASHKARS BOYZ6 OFFICIAL
   REAL YOUTUBE VIDEOS
========================================================= */

const youtubeVideos = [
    "https://youtube.com/shorts/7ezbw9vOAPM",
    "https://youtu.be/kXW4XAIASXo",
    "https://youtube.com/shorts/agCsvt6iu9Y",
    "https://youtube.com/shorts/zqfyTycfQHU"
];


const playButtons =
    document.querySelectorAll(".play-button");


playButtons.forEach(function (button, index) {

    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            const video =
                youtubeVideos[index];


            if (video) {

                window.open(
                    video,
                    "_blank",
                    "noopener,noreferrer"
                );

            } else {

                window.open(
                    socialLinks.youtube,
                    "_blank",
                    "noopener,noreferrer"
                );

            }

        }
    );

});




// old d
// /* =========================================================
//    VIDEO BUTTON
// ========================================================= */

// const playButtons =
//     document.querySelectorAll(
//         ".play-button"
//     );


// /*
//    IMPORTANT:

//    Abhi tumne specific YouTube video URLs
//    provide nahi kiye hain.

//    Isliye buttons tumhare official YouTube
//    channel par jayenge.

//    Baad mein har card ko exact video se
//    connect kar sakte hain.
// */


// playButtons.forEach(function (button) {

//     button.addEventListener(
//         "click",
//         function (event) {

//             event.preventDefault();

//             event.stopPropagation();

//             window.open(
//                 socialLinks.youtube,
//                 "_blank",
//                 "noopener,noreferrer"
//             );

//         }
//     );

// });


/* =========================================================
   SOCIAL MEDIA CARDS
========================================================= */

const socialCards =
    document.querySelectorAll(
        ".social-card"
    );


socialCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            let platform = "";


            if (
                card.classList.contains(
                    "youtube"
                )
            ) {

                platform = "youtube";

            }

            else if (
                card.classList.contains(
                    "tiktok"
                )
            ) {

                platform = "tiktok";

            }

            else if (
                card.classList.contains(
                    "instagram"
                )
            ) {

                platform = "instagram";

            }

            else if (
                card.classList.contains(
                    "facebook"
                )
            ) {

                platform = "facebook";

            }

            else if (
                card.classList.contains(
                    "whatsapp"
                )
            ) {

                platform = "whatsapp";

            }


            if (
                platform &&
                socialLinks[platform]
            ) {

                window.open(
                    socialLinks[platform],
                    "_blank",
                    "noopener,noreferrer"
                );

            }

        }
    );

});


/* =========================================================
   CONTACT FORM → WHATSAPP
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nameInput =
                contactForm.querySelector(
                    'input[name="name"]'
                );

            const contactInput =
                contactForm.querySelector(
                    'input[name="contact"]'
                );

            const messageInput =
                contactForm.querySelector(
                    'textarea[name="message"]'
                );


            if (
                !nameInput ||
                !contactInput ||
                !messageInput
            ) {

                return;

            }


            const name =
                nameInput.value.trim();

            const contact =
                contactInput.value.trim();

            const message =
                messageInput.value.trim();


            if (
                !name ||
                !contact ||
                !message
            ) {

                alert(
                    "Please complete all fields."
                );

                return;

            }


            const whatsappMessage =
                `Hello LASHKARS BOYZ6!

Name: ${name}

Contact: ${contact}

Message:
${message}`;


            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


            contactForm.reset();

        }
    );

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(
        ".site-header"
    );


function updateHeader() {

    if (!header) {
        return;
    }


    if (window.scrollY > 50) {

        header.style.background =
            "rgba(3, 3, 3, 0.96)";

        header.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.35)";

    } else {

        header.style.background =
            "rgba(3, 3, 3, 0.88)";

        header.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================================================
   GALLERY HOVER
========================================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


galleryItems.forEach(function (item) {

    item.addEventListener(
        "mouseenter",
        function () {

            item.style.zIndex = "5";

        }
    );


    item.addEventListener(
        "mouseleave",
        function () {

            item.style.zIndex = "1";

        }
    );

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    anchor.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.offsetTop -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Tab"
        ) {

            document.body.classList.add(
                "keyboard-user"
            );

        }

    }
);


/* =========================================================
   VIP DEVELOPER BRANDING
========================================================= */

console.log(
    "%c LASHKARS BOYZ6 OFFICIAL ",
    "background:#ff1e1e;color:white;font-size:18px;font-weight:bold;padding:10px;"
);

console.log(
    "%c Designed & Developed by M. Khateeb Ejaz ",
    "color:#ff1e1e;font-size:13px;font-weight:bold;"
);


/* =========================================================
   WEBSITE READY
========================================================= */

console.log(
    "%c Website Loaded Successfully ✓ ",
    "color:#1dff70;font-size:12px;font-weight:bold;"
);


















































// old

// /* =========================================================
//    LASHKARS BOYZ6 OFFICIAL
//    MAIN JAVASCRIPT
//    Developed by M. Khateeb Ejaz
// ========================================================= */


// /* =========================================================
//    PAGE LOADER
// ========================================================= */

// window.addEventListener("load", function () {

//     const loader = document.getElementById("loader");

//     setTimeout(() => {
//         loader.classList.add("hide");
//     }, 800);

// });


// /* =========================================================
//    MOBILE MENU
// ========================================================= */

// const menuButton = document.getElementById("menuButton");
// const mobileMenu = document.getElementById("mobileMenu");

// if (menuButton && mobileMenu) {

//     menuButton.addEventListener("click", function () {

//         mobileMenu.classList.toggle("open");

//         const icon = menuButton.querySelector("i");

//         if (mobileMenu.classList.contains("open")) {

//             icon.classList.remove("fa-bars");
//             icon.classList.add("fa-xmark");

//         } else {

//             icon.classList.remove("fa-xmark");
//             icon.classList.add("fa-bars");

//         }

//     });


//     /* Close mobile menu after clicking link */

//     const mobileLinks =
//         mobileMenu.querySelectorAll("a");

//     mobileLinks.forEach(function (link) {

//         link.addEventListener("click", function () {

//             mobileMenu.classList.remove("open");

//             const icon =
//                 menuButton.querySelector("i");

//             icon.classList.remove("fa-xmark");
//             icon.classList.add("fa-bars");

//         });

//     });

// }


// /* =========================================================
//    ACTIVE NAVIGATION
// ========================================================= */

// const navLinks =
//     document.querySelectorAll(
//         ".desktop-nav a"
//     );

// const sections =
//     document.querySelectorAll(
//         "main section[id]"
//     );


// window.addEventListener("scroll", function () {

//     let currentSection = "";

//     sections.forEach(function (section) {

//         const sectionTop =
//             section.offsetTop - 150;

//         const sectionHeight =
//             section.offsetHeight;

//         if (
//             window.scrollY >= sectionTop &&
//             window.scrollY < sectionTop + sectionHeight
//         ) {

//             currentSection =
//                 section.getAttribute("id");

//         }

//     });


//     navLinks.forEach(function (link) {

//         link.classList.remove("active");

//         const href =
//             link.getAttribute("href");

//         if (href === "#" + currentSection) {

//             link.classList.add("active");

//         }

//     });

// });


// /* =========================================================
//    PHOTO VIEWER
// ========================================================= */

// function openPhoto(imageSource) {

//     const viewer =
//         document.getElementById("photoViewer");

//     const fullPhoto =
//         document.getElementById("fullPhoto");


//     if (!viewer || !fullPhoto) {
//         return;
//     }


//     fullPhoto.src = imageSource;

//     viewer.classList.add("active");

//     document.body.classList.add("no-scroll");

// }


// function closePhoto(event) {

//     if (event) {

//         event.stopPropagation();

//     }


//     const viewer =
//         document.getElementById("photoViewer");


//     if (!viewer) {
//         return;
//     }


//     viewer.classList.remove("active");

//     document.body.classList.remove("no-scroll");

// }


// /* Close photo with ESC key */

// document.addEventListener("keydown", function (event) {

//     if (event.key === "Escape") {

//         closePhoto();

//     }

// });


// /* =========================================================
//    SCROLL REVEAL ANIMATION
// ========================================================= */

// const animatedElements =
//     document.querySelectorAll(
//         ".section, .social-card, .hero-text, .hero-image-area"
//     );


// const revealObserver =
//     new IntersectionObserver(
//         function (entries) {

//             entries.forEach(function (entry) {

//                 if (entry.isIntersecting) {

//                     entry.target.classList.add(
//                         "show-element"
//                     );

//                     revealObserver.unobserve(
//                         entry.target
//                     );

//                 }

//             });

//         },
//         {
//             threshold: 0.12
//         }
//     );


// animatedElements.forEach(function (element) {

//     revealObserver.observe(element);

// });


// /* =========================================================
//    VIDEO PLAY BUTTON
// ========================================================= */

// const playButtons =
//     document.querySelectorAll(
//         ".play-button"
//     );


// playButtons.forEach(function (button) {

//     button.addEventListener("click", function (event) {

//         event.preventDefault();

//         event.stopPropagation();


//         /*
//          * Temporary action.
//          * Later we can connect each button
//          * directly to your YouTube videos.
//          */

//         alert(
//             "LASHKARS BOYZ6 Video\n\n" +
//             "YouTube video link yahan connect ki jayegi."
//         );

//     });

// });


// /* =========================================================
//    SOCIAL CARDS
// ========================================================= */

// const socialCards =
//     document.querySelectorAll(
//         ".social-card"
//     );


// /*
//  * Yahan apne actual social media links
//  * baad mein add kar sakte ho.
//  */

// const socialLinks = {

//     youtube:
//         "https://www.youtube.com/",

//     tiktok:
//         "https://www.tiktok.com/",

//     instagram:
//         "https://www.instagram.com/",

//     facebook:
//         "https://www.facebook.com/",

//     whatsapp:
//         "https://wa.me/923001234567"

// };


// socialCards.forEach(function (card) {

//     card.addEventListener("click", function () {

//         let platform = "";

//         if (
//             card.classList.contains("youtube")
//         ) {
//             platform = "youtube";
//         }

//         else if (
//             card.classList.contains("tiktok")
//         ) {
//             platform = "tiktok";
//         }

//         else if (
//             card.classList.contains("instagram")
//         ) {
//             platform = "instagram";
//         }

//         else if (
//             card.classList.contains("facebook")
//         ) {
//             platform = "facebook";
//         }

//         else if (
//             card.classList.contains("whatsapp")
//         ) {
//             platform = "whatsapp";
//         }


//         if (socialLinks[platform]) {

//             window.open(
//                 socialLinks[platform],
//                 "_blank",
//                 "noopener,noreferrer"
//             );

//         }

//     });

// });


// /* =========================================================
//    CONTACT FORM
// ========================================================= */

// const contactForm =
//     document.getElementById(
//         "contactForm"
//     );


// if (contactForm) {

//     contactForm.addEventListener(
//         "submit",
//         function (event) {

//             event.preventDefault();


//             const name =
//                 contactForm
//                 .querySelector(
//                     'input[name="name"]'
//                 )
//                 .value.trim();


//             const contact =
//                 contactForm
//                 .querySelector(
//                     'input[name="contact"]'
//                 )
//                 .value.trim();


//             const message =
//                 contactForm
//                 .querySelector(
//                     'textarea[name="message"]'
//                 )
//                 .value.trim();


//             if (
//                 !name ||
//                 !contact ||
//                 !message
//             ) {

//                 alert(
//                     "Please complete all fields."
//                 );

//                 return;

//             }


//             const whatsappNumber =
//                 "923496550742";


//             const whatsappMessage =
//                 `Hello LASHKARS BOYZ6!

// Name: ${name}

// Contact: ${contact}

// Message:
// ${message}`;


//             const whatsappURL =
//                 "https://wa.me/" +
//                 whatsappNumber +
//                 "?text=" +
//                 encodeURIComponent(
//                     whatsappMessage
//                 );


//             window.open(
//                 whatsappURL,
//                 "_blank",
//                 "noopener,noreferrer"
//             );


//             contactForm.reset();

//         }
//     );

// }


// /* =========================================================
//    HEADER SCROLL EFFECT
// ========================================================= */

// const header =
//     document.querySelector(
//         ".site-header"
//     );


// window.addEventListener("scroll", function () {

//     if (!header) {
//         return;
//     }


//     if (window.scrollY > 50) {

//         header.style.background =
//             "rgba(3, 3, 3, 0.96)";

//         header.style.boxShadow =
//             "0 10px 40px rgba(0,0,0,0.35)";

//     } else {

//         header.style.background =
//             "rgba(3, 3, 3, 0.88)";

//         header.style.boxShadow =
//             "none";

//     }

// });


// /* =========================================================
//    GALLERY IMAGE HOVER EFFECT
// ========================================================= */

// const galleryItems =
//     document.querySelectorAll(
//         ".gallery-item"
//     );


// galleryItems.forEach(function (item) {

//     item.addEventListener(
//         "mouseenter",
//         function () {

//             item.style.zIndex = "5";

//         }
//     );


//     item.addEventListener(
//         "mouseleave",
//         function () {

//             item.style.zIndex = "1";

//         }
//     );

// });


// /* =========================================================
//    SMOOTH ANCHOR SCROLL
// ========================================================= */

// document
//     .querySelectorAll(
//         'a[href^="#"]'
//     )
//     .forEach(function (anchor) {

//         anchor.addEventListener(
//             "click",
//             function (event) {

//                 const targetId =
//                     anchor.getAttribute(
//                         "href"
//                     );


//                 if (
//                     targetId === "#" ||
//                     !targetId
//                 ) {
//                     return;
//                 }


//                 const target =
//                     document.querySelector(
//                         targetId
//                     );


//                 if (!target) {
//                     return;
//                 }


//                 event.preventDefault();


//                 const headerHeight =
//                     header
//                         ? header.offsetHeight
//                         : 0;


//                 const targetPosition =
//                     target.offsetTop -
//                     headerHeight;


//                 window.scrollTo({

//                     top: targetPosition,

//                     behavior: "smooth"

//                 });

//             }
//         );

//     });


// /* =========================================================
//    CONSOLE BRANDING
// ========================================================= */

// console.log(
//     "%c LASHKARS BOYZ6 OFFICIAL ",
//     "background:#ff1e1e;color:white;font-size:18px;font-weight:bold;padding:10px;"
// );

// console.log(
//     "%c Designed & Developed by M. Khateeb Ejaz ",
//     "color:#ff1e1e;font-size:13px;font-weight:bold;"
// );
