function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotive()

function nav(){
    gsap.to("nav .tags a", {
        transform : "translateY(-100%)",
        opacity : 0,
        scrollTrigger : {
            trigger : ".page1",
            scroller : ".main",
            start : "top -10%",
            end : "top -5%",
            scrub : 1
        }
    })
    gsap.to("nav .icon svg", {
        transform : "translateY(-150%)",
        scrollTrigger : {
            trigger : ".page1",
            scroller : ".main",
            start : "top -10%",
            end : "top -15%",
            scrub : 1
        }
    })
}

nav()


function play() {
    var play = document.querySelector(".page1 #play");
    var container = document.querySelector(".page1 #video-container");

    container.addEventListener("mouseenter", function () {
        gsap.to(play, {
            opacity: 1,
            scale: 1,
        });
    });

    container.addEventListener("mousemove", function (dets) {
        // Get the container's bounding box
        var containerRect = container.getBoundingClientRect();

        // Calculate mouse position relative to the container
        var x = dets.clientX - containerRect.left;
        var y = dets.clientY - containerRect.top;

        // console.log(x, y, 'relative to container');

        gsap.to(play, {
            left: x - 50,
            top: y - 50,
            ease: "power1.out"
        });
    });

    container.addEventListener("mouseleave", function () {
        gsap.to(play, {
            opacity: 0,
            scale: 0,
        });
    });
}

function loading() {
    gsap.from(".page1 h1", {
        y: "20vh",
        opacity: 0,
        stagger: 0.2,
        duration: 0.4,
        delay: 0.4,
    })

    gsap.from(".page1 #video-container", {
        opacity: 0,
        scale: 0,
        duration: 0.9,
        delay: 1.5,
    })
}

var width = window.matchMedia("(min-width : 600px)")
if (width.matches) {
    play();
    loading();
}

function page3() {

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            top: dets.y,
            left: dets.x,
            ease: "power3.out"
        });
    });


    var products = document.querySelectorAll(".page3 .product")
    products.forEach(function (product) {

        product.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(1)"
            })
            console.log("enter");
        })
        product.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(0)"
            })
            console.log("leave");
        })
    })
}

page3();

function page4() {

}

function footer() {
    var input = document.querySelector(".footer input")
    var arrow = document.querySelector(".footer #selected")
    var arrow2 = document.querySelector(".footer #non-selected")
    input.addEventListener("focus", function () {
        arrow.style.display = "none"
        arrow2.style.display = "block"
    })

    input.addEventListener("blur", function () {
        arrow.style.display = "block"
        arrow2.style.display = "none"
    })
}

footer()