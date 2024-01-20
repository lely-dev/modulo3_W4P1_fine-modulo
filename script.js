let items = document.querySelectorAll('#first-carousel-line .carousel-item, #carousel-second .carousel-item, #carousel-third .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// SCROLL UP/DOWN

let carousels = document.querySelectorAll("#first_carousel_section,#second_carousel_section,#third_carousel_section");

window.onscroll = () => {
    carousels.forEach(carousel => {
        let top = window.scrollY;
        let offset = carousel.offsetTop - 150;
        let height = carousel.offsetHeight;

        if (top >= offset && top < offset + height){
            carousel.classList.add(".carousel-show");
        } else {
            carousel.classList.remove(".carousel-show"); }
    })
}