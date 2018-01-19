var action = "click";
var speed = "500";

$(document).ready(function () {
    $('li.q').on(action, function (){
        //
        $(this).next()
                    .slideToggle(speed)
                        .siblings('li.a')
                            .slideUp();
        //get image for active question 
        var img = $(this).children('img');
        //remove the 'rotate' class for all imgs except the active 
        $('img').not(img).removeClass('rotate');

        //toggle rotate class

        img.toggleClass('rotate');
    });

});