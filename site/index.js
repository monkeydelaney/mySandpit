if (jQuery) {
    console.log("JQuery loaded")
} else console.log ("No JQuery Loaded")


$("div").css("backgroundColor","purple");
$(".highlight").css("width","200px");
$("#third").css("border", "1px solid orange");
$("div:first").css("color","blue");


//similar to TextContent but more flexible - cannot parse HTML
$("h1").text("Change The Text");
$("li").text("Change All At The Same Time");

//similar to innerHTML
$("ul").html("<li>I hacked your ul</li><li>I hacked your ul twice</li>");

//attr gets/sets the value of an attribute
$("img").css("width", "200px");
$("img").attr("src", "https://i.imgur.com/PMX6Afm.jpg");
$("img:first-of-type").attr("src", "https://i.imgur.com/Kyg2y8i.jpg");
$("img").last().attr("src", "https://i.imgur.com/Kyg2y8i.jpg");
$("input").attr("type", "color");
$("input").attr("type", "text");

//jquery version of value. set/get value of any sort of inout box
$("input").val("hello");
$("input").val("");

//add, remove and toggle
$("h1").addClass(".highlight");
$("#third").toggleClass(".highlight");
$("div:last-of-type").removeClass("highlight");

$("h1").click(function(){
    alert("h1 clicked");
})

/*
//add click listener to a collection
$("button").click(function(){
    alert("button clicked");
});
*/
//$("button").click((event) => {alert("button clicked")});

/*
$("button").click((event) => {
    $(event.currentTarget).css("background", "pink")});
    */

//add click listener to a collection
$("button").click(function(){
    $(this).css("background", "pink");
    var text = $(this).text();
    console.log("You clicked " + text);
});

$("input").keypress(function (event){
    if(event.which === 13){
        console.log("You hit enter");
    }
});

//on is similar to the vanilla addeventlistener
$("input").on("click", function(){
    $(this).css("color", "blue");
})

$("input").on("keypress", function(){
    $(this).css("color", "red");
})

//on is similar to the vanilla addeventlistener
$("input").on("click", function(){
    $(this).css("color", "blue");
})

$("button").on("mouseenter", function(){
    $(this).css("color", "red");
})

$("button").on("mouseleave", function(){
    $(this).css("color", "blue");
})

$("button").on("click", function() {
    $(this).slideUp(1000, function (){
        console.log("sliding");
    });
});
