
$(function(){
    console.log("made it here")
})


$("#paperTitle").change(async function(){
    let id = window.location.pathname.split("/").pop()
    const title = $(this).val()
    const response = await fetch(`/api/projects/:${id}`, {
        method: 'PUT', 
        body: JSON.stringify({title} ),
        headers: { 'Content-Type': 'application/json' },
      });
  
})



