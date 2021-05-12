var generateButton = document.querySelector("button");
var quoteShow = document.querySelector("h3");
var authorName = document.querySelector(".author-name");
var quote = [{quote:"Fortune favors the bold",
                author:"Virgil"
},{
    quote:"I think, therefore I am.",
    author:"René Descartes"
},{
    quote:"I came, I saw, I conquered",
    author:"Julius Caesar"
},{
    quote:"If you’re going through hell, keep going.",
    author:"Winston Churchill"
}];


generateButton.addEventListener("click",function(){
    var generateQuote = Math.floor(Math.random()* quote.length);
    quoteShow.innerHTML = quote[generateQuote].quote;
    authorName.innerHTML= quote[generateQuote].author;
});