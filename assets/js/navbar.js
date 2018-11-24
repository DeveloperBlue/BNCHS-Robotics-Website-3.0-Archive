// BootStrap's MD Breakpoint
var BS_breakpoint_MD = 768;

$(document).ready(function(){
    
    scrollUpdate();
    
    $(".nav-item.dropdown").hover(function(){
        if ($(window).width() >= BS_breakpoint_MD){
            $(this).addClass("show");
            $(this).find(".dropdown-menu").addClass("show");
        }
    }, function(){
        if ($(window).width() >= BS_breakpoint_MD){
            $(this).removeClass("show");
            $(this).find(".dropdown-menu").removeClass("show");
        }
    })
    
    handleTwitchBanner();
    
});

function handleTwitchBanner(){
    $.ajax({
        url: "https://api.twitch.tv/kraken/streams/team5599_thesentinels",
        dataType: 'json',
        headers: {
            'Client-ID': 'qd2a6znhhe3b2pw4i5xp3aspxzwueo'
        },
        success: function(channel) {
            if (channel["stream"] == null) {
                $(".twitch-banner").hide();
            } else {
                console.log("We're live on Twitch!");
                $(".twitch-banner").show();
            }
        }
    });
}

$(window).bind("scroll", scrollUpdate);

function scrollUpdate(){

    var window_position_y = $(window).scrollTop();
    var navbarTransparency = ($(window).width() > BS_breakpoint_MD) ? (window_position_y / 50) : 1.0;
    
    if (navbarTransparency > 0.3){
        $(".navbar").addClass("navbar-dropshadow")
    } else {
       $(".navbar").removeClass("navbar-dropshadow") 
    }

    $('.navbar').css('background-color', 'rgba(33,33,33,' + navbarTransparency + ')');
    $('.NavButton').css('background-color', 'rgba(33,33,33,' + navbarTransparency + ')');

}
