


$("#newProject").click(function(){
document.location.replace("/project")

})



$(function(){
    var gridheight = $("#newProject").width()* 1.4142;
    $(".project").css("height", gridheight)
    console.log(gridheight)

    var h3Margin = gridheight/4;

    $(".project > h3").css("margin-top", h3Margin)


    console.log($(".project > h3").length)




})


