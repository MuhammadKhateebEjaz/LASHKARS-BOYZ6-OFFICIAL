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
   YOUTUBE VIDEOS
   FUTURE: SIRF YAHAN NEW VIDEO LINK ADD KARNA
========================================================= */

const youtubeVideos = [

    "https://youtube.com/shorts/7ezbw9vOAPM",

    "https://youtu.be/kXW4XAIASXo",

    "https://youtube.com/shorts/agCsvt6iu9Y",

    "https://youtube.com/shorts/zqfyTycfQHU",
   
     "https://www.youtube.com/shorts/zqfyTycfQHU",
   
];


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

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

    menuButton.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle("open");

            const icon =
                menuButton.querySelector("i");

            if (!icon) return;

            if (
                mobileMenu.classList.contains("open")
            ) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.remove(
                        "open"
                    );

                    const icon =
                        menuButton.querySelector(
                            "i"
                        );

                    if (!icon) return;

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        }
    );

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

    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 180;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    navLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );

            const href =
                link.getAttribute("href");

            if (
                href === "#" +
                currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   VIP PHOTO GALLERY
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
        document.getElementById(
            "photoViewer"
        );

    const fullPhoto =
        document.getElementById(
            "fullPhoto"
        );

    if (!viewer || !fullPhoto) {
        return;
    }


    currentPhotoIndex =
        galleryPhotos.indexOf(
            imageSource
        );


    if (currentPhotoIndex < 0) {

        currentPhotoIndex = 0;

    }


    showPhoto(
        currentPhotoIndex
    );


    viewer.classList.add(
        "active"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function showPhoto(index) {

    const fullPhoto =
        document.getElementById(
            "fullPhoto"
        );

    const photoCounter =
        document.getElementById(
            "photoCounter"
        );

    if (!fullPhoto) {
        return;
    }


    currentPhotoIndex =
        (
            index +
            galleryPhotos.length
        ) %
        galleryPhotos.length;


    fullPhoto.src =
        galleryPhotos[
            currentPhotoIndex
        ];


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
        document.getElementById(
            "photoViewer"
        );


    if (!viewer) {
        return;
    }


    viewer.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   PHOTO KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        const viewer =
            document.getElementById(
                "photoViewer"
            );


        if (
            !viewer ||
            !viewer.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            event.key === "Escape"
        ) {

            closePhoto();

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextPhoto();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousPhoto();

        }

    }
);


/* =========================================================
   AUTOMATIC YOUTUBE VIDEO SYSTEM
========================================================= */

/* =========================================================
   AUTOMATIC YOUTUBE VIDEO SYSTEM
========================================================= */

function getYouTubeVideoId(url) {

    try {

        const parsedURL = new URL(url);

        if (parsedURL.hostname === "youtu.be") {

            return parsedURL.pathname
                .split("/")
                .filter(Boolean)[0];

        }

        if (parsedURL.pathname.startsWith("/shorts/")) {

            return parsedURL.pathname
                .split("/")[2];

        }

        if (parsedURL.searchParams.has("v")) {

            return parsedURL.searchParams.get("v");

        }

        return null;

    } catch (error) {

        console.error("Invalid YouTube URL:", url);

        return null;

    }

}


function createVideoCards() {

    const videoGrid =
        document.getElementById("videoGrid");

    if (!videoGrid) {
        return;
    }

    videoGrid.innerHTML = "";

    youtubeVideos.forEach(function (videoURL, index) {

        const videoId =
            getYouTubeVideoId(videoURL);

        if (!videoId) {
            return;
        }

        const card =
            document.createElement("article");

        card.className = "video-card";


        const thumbnail =
            document.createElement("div");

        thumbnail.className =
            "video-thumbnail";


        const image =
            document.createElement("img");


        /* REAL YOUTUBE THUMBNAIL */

        image.src =
            "https://img.youtube.com/vi/" +
            videoId +
            "/maxresdefault.jpg";


        image.alt =
            "LASHKARS BOYZ6 Video " +
            (index + 1);

        image.loading = "lazy";


        const button =
            document.createElement("button");

        button.className =
            "play-button";

        button.type = "button";

        button.innerHTML =
            '<i class="fa-solid fa-play"></i>';


        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                window.open(
                    videoURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );


        const duration =
            document.createElement("span");

        duration.className =
            "video-duration";

        duration.textContent =
            "WATCH";


        thumbnail.appendChild(image);

        thumbnail.appendChild(button);

        thumbnail.appendChild(duration);


        const info =
            document.createElement("div");

        info.className =
            "video-info";


        const title =
            document.createElement("h3");

        title.textContent =
            "LASHKARS BOYZ6 — Video " +
            String(index + 1).padStart(2, "0");


        const description =
            document.createElement("p");

        description.textContent =
            "Latest LASHKARS BOYZ6 entertainment video";


        info.appendChild(title);

        info.appendChild(description);


        card.appendChild(thumbnail);

        card.appendChild(info);


        videoGrid.appendChild(card);

    });

}


/* =========================================================
   SOCIAL MEDIA CARDS
========================================================= */

const socialCards =
    document.querySelectorAll(
        ".social-card"
    );


socialCards.forEach(
    function (card) {

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

    }
);


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


    if (
        window.scrollY > 50
    ) {

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


galleryItems.forEach(
    function (item) {

        item.addEventListener(
            "mouseenter",
            function () {

                item.style.zIndex =
                    "5";

            }
        );


        item.addEventListener(
            "mouseleave",
            function () {

                item.style.zIndex =
                    "1";

            }
        );

    }
);


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (anchor) {

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

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        }
    );


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".section, .social-card, .hero-text, .hero-image-area"
    );


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

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

                    }
                );

            },
            {
                threshold: 0.10
            }
        );


    animatedElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

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
   WEBSITE READY
========================================================= */

console.log(
    "%c LASHKARS BOYZ6 OFFICIAL ",
    "background:#ff1e1e;color:white;font-size:18px;font-weight:bold;padding:10px;"
);

console.log(
    "%c Designed & Developed by M. Khateeb Ejaz ",
    "color:#ff1e1e;font-size:13px;font-weight:bold;"
);

console.log(
    "%c Website Loaded Successfully ✓ ",
    "color:#1dff70;font-size:12px;font-weight:bold;"
);


/* =========================================================
   START AUTOMATIC VIDEO SYSTEM
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        createVideoCards
    );

} else {

    createVideoCards();

}
