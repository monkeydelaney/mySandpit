//checkoff specific todos by clicking

/* $("li").click(function(){
    $(this).css("color", "red");
    $(this).css("text-decoration","line-through");
});*/

/*
$("li").click(function(){
    if ($(this).css("color") === "rgb(128, 128, 128)"){
    $(this).css({
        color: "black",
        textDecoration: "none"
    });
}
     else {
        $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
}
});
*/
/*$("li").click(function(){
    $(this).toggleClass("completed")
});*/
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

/*$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})*/

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})
//on rather than click can help us use event listners for elements that are not on the screnn when the page loads

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})