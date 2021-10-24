
const router = require("express").Router();
var pos = require("pos");
var phrases = require('node-pos').findPhrases;


router.get("/", async(req,res)=>{
let text = req.body.title
console.log(typeof text)

phrases(text, function (data) {
    console.log(data);
  })
res.send(JSON.stringify("hello"))
})



module.exports = router;
