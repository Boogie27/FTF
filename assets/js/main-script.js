$(document).ready(function(){
// ********** REMOVE MAIN PAGE PRELOADER **********//
function remove_main_page_preloader(){
    $("#main_app_preloader").fadeOut(300)
}
setTimeout(function(){
    remove_main_page_preloader()
}, 1000)





// *********** DROP DOWN BOX ****************//
$(window).click(function(e){
    $('.drop-down-body').hide()
    if($(e.target).hasClass('drop-down-btn') || $(e.target).hasClass('drop-down-body')){
        $(e.target).parent().children('.drop-down-body').show()
    }
    if($(e.target).hasClass('drop-down-header')){
        $(e.target).parent().parent().children('.drop-down-body').show()
    }
})






// ********** OPEN SIDE NAVIGATION ************//
$(".side-navigation-open-button").click(function(e){
    e.preventDefault()
    mobile_navigation(true)
})


// ********** CLOSE SIDE NAVIGATION ************//
$("#side_nav_close").click(function(e){
    e.preventDefault()
    mobile_navigation(false)
})


function mobile_navigation(navState){
    if(navState){
        left = '0px'
        $("#side_dark_theme").show()
    }else{
        left = '-500px'
        $("#side_dark_theme").hide()
    }
    $("#side_nav_content").css({
        left: left,
    })
}






// ********** CLICK DARK SKIN TO CLOSE SIDE NAVIGATION ************//
function darkskin_close_mobile_navigation(){
    $("#side_dark_theme").click(function(){
        mobile_navigation(false)
    })
}
darkskin_close_mobile_navigation()










// ********** SLIDER ***********//
var n = 1;
var page_slider_container = $(".slider-container");

function page_slider(){
    if(page_slider_container.length <= 0) return;
    
    sliders = $(page_slider_container).children() 
    var total_slide = sliders.length; 
    var duration = $(page_slider_container).attr('data-duration')

    for(var i = 0; i < sliders.length; i++){
        $(sliders[i]).css({
            opacity: '0'
        })
    }

    if(n > total_slide){
        n = 1;
    }
 
    $(sliders[n - 1]).css({
        opacity: '1'
    })
    n++;

    setTimeout(function(){
        page_slider()
    }, duration)
}

page_slider()












    // end of document
});