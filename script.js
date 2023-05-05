const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetQuoteButton = document.getElementById("tweet-quote");

const quote =[
    {
        text: "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is most important." ,
        author:"Bill Gates"
    },
    {
        text:"If we teach today as we taught yesterday, we rob our children of tomorrow.",
        author:"John Dewey"
    },
    {
        text:"Education is the most powerful weapon that we can use to change the world.",
        author:"Nelson Mandela"
    },
    {
        text:"We need technology in every classroom and in every student and teacher's hand, because it is the pen and paper of our time, and it is the lens through which we experience much of our world.",
        author:" David Warlick"
    },
    {
        text:"The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.",
        author:"Alvin Toffler"
    },
    {
        text:"Tech gives the quietest student a voice.",
        author:"Jerry Blumengarten"
    }
];

function getRandomQuote(){
    return quote[Math.floor(Math.random()*quote.length)]
}

function dispalyQuote(){
    const{text,author} = getRandomQuote();
    quoteText.textContent = text;
    quoteAuthor.textContent=author;
}

function tweetQuote(){
    const tweetText = `${quoteText.textContent}- ${quoteAuthor.textContent}`;
    const tweetUrl = `http://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl);
}

newQuoteButton.addEventListener("click",dispalyQuote);

tweetQuoteButton.addEventListener("click", tweetQuote);

dispalyQuote();