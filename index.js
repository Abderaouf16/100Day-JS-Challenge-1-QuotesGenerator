// const getQuoteButton= document.getElementById('button')
// getQuoteButton.addEventListener('click',getQuote)



const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];

function getQuote() {
    let chosenQuote= quotes[Math.floor(Math.random()*quotes.length)]

  
        document.getElementById('quote').textContent=chosenQuote
    
    
}




