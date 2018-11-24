$(document).ready(function(){
    
    $("body").addClass("t--light");
    
    $("#toggle-contrast").click(function(){
        
        console.log("Modifying Theme");
        
        if ($("body").hasClass("t--dark")){
            
            $(".t--dark").each(function(){
                $(this).removeClass("t--dark");
                $(this).addClass("t--light");
            })
            
        } else {
            
            $(".t--light").each(function(){
                $(this).removeClass("t--light");
                $(this).addClass("t--dark");
            })
            
        }      
       
    })
})