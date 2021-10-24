

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

    title = $("#paperTitle").val();



var apiKey = "7da89343571edc0396b3a74f2ee6f0b5"
var keyword = "coke+AND+pepsia"
await fetch(`https://api.dp.la/v2/items?q=${keyword}&api_key=${apiKey}`,{
    method:"GET"
    
})
.then(res => res.json())
  .then(function(data){
      var resorces = [];
      console.log(data)
    for(let i = 0; i<6;){
    let article = data.docs[i];

        info = {
            "desc": article.sourceResource.description,
            "source":article.isShownAt,
            "title": article.sourceResource.title[0]
        }

            if(typeof info.desc !== "undefined" && resorces.length<3){
                console.log(info)
                resorces.push(info);
                    
        }
        i++
            
            
            
        

    }
    console.log(resorces)
    for(item in resorces){
        let desc = resorces[item].desc
        let link = resorces[item].source
        let title = resorces[item].title
        
        console.log(title[0])
        $("#additional").append(`
        <div class="resource" id="add${item}">
        <h5>Title: ${title}</h5>
        <h6>Description: ${desc[0]} </h6>
        <a href="${link}"target="blank">Visit here</a>
        `)
    }
       
  })

}





