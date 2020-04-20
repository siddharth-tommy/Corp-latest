// Number animation only on page load

// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });



//Number animation on section hovered or focused or appeared on the screen 

jQuery(document).ready(function($) {

    foo();
    
    setInterval( function(){
    
    foo()
    
    }, 5000);
    
    });
    
    
    function foo(){
    
    $('.count').each(function () {
    
    $(this).prop('Counter',0).animate({
    
    Counter: $(this).text()
    
    }, {
    
    duration: 4000,
    
    easing: 'swing',
    
    step: function (now) {
    
    $(this).text(Math.ceil(now));
    
    }
    
    });
    
    });
    
    }