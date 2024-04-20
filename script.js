function shake() {
    var ball = document.getElementById("ball");
    var messageText = document.getElementById("message");

    if(messageText != null) {
        messageText.parentNode.removeChild(messageText);
    }

    ball.classList.add("shake");

    setTimeout(function(){ball.classList.remove("shake");}, 1000 )
    setTimeout(function(){getFortune();}, 1000 )
}

function getFortune() {
    var fortunes = [
        'It is certain.', 
        'It is decidedly so', 
        'Without a doubt', 
        'Yes -- definitely', 
        'You may rely on it', 
        'As I see it, yes', 
        'Most likely',
        'Outlook good',
        'Signs point to yes',
        'Reply hazy',
        'Try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
    ]

    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    var parent = document.getElementById("fortune")
    var newMessage = document.createElement("div")
    newMessage.className = "align-self-center fade-down";

    newMessage.setAttribute("id", "message")
    newMessage.innerHTML = "\""+fortune+"\""
    parent.appendChild(newMessage)
};