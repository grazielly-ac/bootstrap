jQuery(document).ready(function($){

    window.onscroll = function(){
        if(window.pageYOffset > 140){
            $(".menu").addClass("menu-active");
            $(".menu-img__size").addClass("menu-img__sizescroll");
        }else{
            $(".menu").removeClass("menu-active");
            $(".menu-img__size").removeClass("menu-img__sizescroll");
        }
    }
});