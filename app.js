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

function errorHandler(error){
    console.log("error occured ",error);
    alert("something went wrong with server! Try again later ...")
}

function clickHandler(){
    //console.log("clicked!!");
    //console.log("input",txtInput.value);
    //outputDiv.innerText = "Hi! How you Doin " + txtInput.value ;
    var inputText = txtInput.value ; //taking input

    // calling server for processing 
    fetch(getTranslationURL(text))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
    })
    .catch(errorHandler) 
};

btnTranslate.addEventListener("click", clickHandler)
