function myFunction(x) {
    document.addEventListener('DOMContentLoaded', function() {
        // new Splide('.splide').mount();
        if (x.matches) {
            new Splide('.splide').mount({});

        } else {
            new Splide('.splide', {
                perPage: 3,
                rewind: true,
            }).mount();
        }
    });
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.listener(myFunction) // Attach listener function on state changes