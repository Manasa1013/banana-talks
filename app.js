var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output-div");
var errorDiv = document.querySelector("#error-div");

function constructMOckURL(text){
    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" +"text=" + text;
} //noted down &constructed the url path

function constructURL(text){
    return "https://api.funtranslations.com/translate/minion.json" +"?" + "text=" +text;
}

function errorHandler(error){
    console.log("Error occured from server ",error )
    errorDiv.innerText = "Server error ,try again sometime later"
}
function doFetch(text){
    fetch(constructURL(text)).then(response =>response.json())
    .then(json =>outputDiv.innerText=json.contents.translated).catch(errorHandler);
}
function clickEventHandler(){
    console.log("clicked");
//     outputDiv.innerText  = textInput.value+"  clicked translate";
// }
//declare a var or const to hold the text input value
const inputText = textInput.value;
doFetch(inputText);

}

btnTranslate.addEventListener("click",clickEventHandler);


