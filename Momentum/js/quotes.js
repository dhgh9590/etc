const quotes = [
    {   
        quote: "If man does find the solution for world peace it will be the most revolutionary reversal of his record we have ever known.",
        author: "George C. Marshall",
    },
    {   
        quote: "If you judge people, you have no time to love them.",
        author: "Mother Teresa",
    },
    {   
        quote: "Study the past if you would define the future.",
        author: "Confucius",
    },
    {   
        quote: "Energy and persistence conquer all things.",
        author: "Benjamin Franklin",
    },
    {   
        quote: "I object to violence because when it appears to do good, the good is only temporary; the evil it does is permanent.",
        author: "Mahatma Gandhi",
    },
    {   
        quote: "What is written without effort is in general read without pleasure.",
        author: "Samuel Johnson",
    },
    {   
        quote: "Spring is when you feel like whistling even with a shoe full of slush.",
        author: "Doug Larson",
    },
    {   
        quote: "Seize the moment of excited curiosity on any subject to solve your doubts; for if you let it pass, the desire may never return, and you may remain in ignorance.",
        author: "William Wirt",
    },
    {   
        quote: "As I get older, I've learned to listen to people rather than accuse them of things.",
        author: "Po Bronson",
    },
    {   
        quote: "When you take a man as he is, you make him worse. When you take a man as he can be, you make him better.",
        author: "Johann Wolfgang von Goethe",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //랜덤 + quotes갯수 만큼 곱하기

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;