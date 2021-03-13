$(".btn-audi").click(function() {
    
    $.each($(".tarjeta"), function() {

        var element = $(".tarjeta.model-audi");
        if((element).hasClass( "model-audi" )) {
            
            $(".tarjeta").addClass("hide");
            $(element).addClass("show").removeClass("hide");

        }

    });

});
$(".btn-mercedes").click(function() {
    
    $.each($(".tarjeta"), function() {

        var element = $(".tarjeta.model-mercedes");
        if((element).hasClass( "model-mercedes" )) {
            
            $(".tarjeta").addClass("hide");
            $(element).addClass("show").removeClass("hide");

        }

    });

});
$(".btn-citroen").click(function() {
    
    $.each($(".tarjeta"), function() {

        var element = $(".tarjeta.model-citroen");
        if((element).hasClass( "model-citroen" )) {
            
            $(".tarjeta").addClass("hide");
            $(element).addClass("show").removeClass("hide");

        }

    });

});