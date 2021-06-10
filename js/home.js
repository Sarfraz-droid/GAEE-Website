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

var x = window.matchMedia("(max-width: 991px)")
myFunction(x)
x.addEventListener(myFunction); // Call listener function at run time

document.querySelector('.dropdown').addEventListener('mouseover', function() {
        console.log("hover");
        $(this).addClass('show');
    },
    function() {
        $(this).removeClass('show');
    });