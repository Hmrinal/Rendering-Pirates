/* var btnTrasnslate = document.querySelector("#btn-translate")

 btnTrasnslate.addEventListener("click",function clickEventHandeler(){
     console.log("clicked");
 })
*/

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text){
    return serverURL + "?" + "text= " + text 
}

function clickHandler(){
    //console.log("clicked!!");
    //console.log("input",txtInput.value);
    //outputDiv.innerText = "Hi! How you Doin " + txtInput.value ;
    var inputText = txtInput.value ; //taking input

    // calling server for processing 
    fetch(getTranslationURL(text))
    .then(response => response.json())
    .then(json => console.log(json))
};

btnTranslate.addEventListener("click", clickHandler)
