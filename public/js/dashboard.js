


$("#newProject").click(async function(){

    const title = "New project";
    const thesis = "New thesis";
    const response = await fetch('/api/projects', {
        method: 'POST', 
        body: JSON.stringify({title, thesis} ),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.status) {
        document.location.replace('/project');
      } else {
        alert(response.statusText);
      }



})



$(function(){
    var gridheight = $("#newProject").width()* 1.4142;
    $(".project").css("height", gridheight)
    console.log(gridheight)

    var h3Margin = gridheight/4;

    $(".project > h3").css("margin-top", h3Margin)


    console.log($(".project > h3").length)




})

$(".project").click(function(){
    let id = $(this).attr("id")
    document.location.replace(`/project/${id}`)
})


