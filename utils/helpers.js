const MoxyTA = require('moxy-ta')
var pos = require('pos');


var sampleText = "To make a peanut butter and jelly sandwich, you must procure the ingredients, find a knife, and spread the condiments"

const getInfo = async(text) =>{

    
    var words = new pos.Lexer().lex(text);
    var tags = new pos.Tagger()
      .tag(words)
      .map(function(tag){return tag[0] + '/' + tag[1];})
      .join(' ');
    
    console.log(tags)
}




getInfo(sampleText)

