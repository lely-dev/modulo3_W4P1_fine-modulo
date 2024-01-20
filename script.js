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

let carousel = document.querySelectorAll("#first_carousel_section,#second_carousel_section,#third_carousel_section");

let callback = function(items){
    items.forEach((item)=>{
        if(item.isIntersecting){
            item.target.classList.add('show');
        }else {
            item.target.classList.remove('show')
          }
    })
}

let observer = new IntersectionObserver(callback, {threshold: 0.5});

carousel.forEach((element) =>{

    observer.observe(element);
});

