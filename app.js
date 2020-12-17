var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output-div");
// outputDiv.innerText ="Testing text,to test error handling"
var errorDiv = document.querySelector("#error-div");
//stored tag elements in variables
function constructMockURL(text){
    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" +"text=" + text;
} //noted down &constructed the url path
//done while learning ,just mockurl 

function constructURL(text){
    return "https://api.funtranslations.com/translate/minion.json" +"?" + "text=" +text;
}
//constructing url by taking input as arg and constructing from it

function errorHandler(error){
    console.log("Error occured from server ",error )
    errorDiv.innerText = "Oops!! Server error ,try again sometime later"
    outputDiv.innerText = ""
}//function to handle server busy
function doFetch(text){
    fetch(constructURL(text)).then(response =>response.json())
    .then(json =>outputDiv.innerText=json.contents.translated).catch(errorHandler);
}
//it fetches the translated text and displayed  in o/p div element 
function clickEventHandler(){
    console.log("clicked");
//     outputDiv.innerText  = textInput.value+"  clicked translate";
// 
//declare a var or const to hold the text input value
const inputText = textInput.value;
doFetch(inputText); //fetching and display done

}

btnTranslate.addEventListener("click",clickEventHandler);
//calling clickEventHandler when click event happened.

