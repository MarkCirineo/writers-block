

$(function(){
    additional();
})


$("#paperTitle").change(async function(){
    let id = window.location.pathname.split("/").pop()
    const title = $(this).val()
    const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT', 
        body: JSON.stringify({title} ),
        headers: { 'Content-Type': 'application/json' },
      });
  
})

$("#paperThesis").change(async function(){
    let id = window.location.pathname.split("/").pop()
    const thesis = $(this).val()
    const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT', 
        body: JSON.stringify({thesis} ),
        headers: { 'Content-Type': 'application/json' },
      });
  
})

$(".topic").change(async function(){
    const sentence = $(this).val()
    const id = $(this).attr("id")
    const response = await fetch(`/api/ts/${id}`, {
        method: 'PUT', 
        body: JSON.stringify({sentence} ),
        headers: { 'Content-Type': 'application/json' },
      });
})

$(".works").change(async function(){
    const content = $(this).val()
    const id = $(this).attr("id")
    const response = await fetch(`/api/wc/${id}`, {
        method: 'PUT', 
        body: JSON.stringify({content} ),
        headers: { 'Content-Type': 'application/json' },
      });
    })

const additional = async()=>{
var apiKey = "7da89343571edc0396b3a74f2ee6f0b5"
var keyword = "pug"
await fetch(`https://api.dp.la/v2/items?q=${keyword}&api_key=${apiKey}`,{
    method:"GET"
    
})
.then(res => res.json())
  .then(function(data){
      var resorces = [];
    for(let i = 0; i<10;){
    let article = data.docs[i];

        info = {
            "desc": article.sourceResource.description,
            "source":article.isShownAt
        }

            if(typeof info.desc !== "undefined" && resorces.length<5){
                console.log(typeof info.desc);
                resorces.push(info);
                    
        }
        i++
            
            
            
        

    }
    console.log(resorces)
    for(item in resorces){
        let title = resorces[item].desc
        let link = resorces[item].source
        console.log(title[0])
        $("#additional").append(`
        <div id="add${item}">
        <h4>${title[0]}</h4>
        <a href="${link}"target="blank">Visit here</a>
        `)
    }
       
  })

}





