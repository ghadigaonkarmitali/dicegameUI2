function rollDice() {
    var dice = document.getElementById('dice');
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var dots = getDiceDots(randomNumber);
    dice.innerHTML = dots;
}

function getDiceDots(number) {
    var dotsHTML = '';
    switch(number) {
        case 1:
            dotsHTML = '<div class="dot" style="margin: auto;"></div>';
            break;
        case 2:
            dotsHTML = '<div class="dot" style="margin: auto;"></div><div class="dot" style="margin: auto;"></div>';
            break;
        case 3:
            dotsHTML = '<div class="dot" style="margin: auto;"></div><div class="dot" style="margin: auto;"></div><div class="dot" style="margin: auto;"></div>';
            break;
        case 4:
            dotsHTML = '<div class="column"><div class="dot"></div><div class="dot"></div></div><div class="column"><div class="dot"></div><div class="dot"></div></div>';
            break;
        case 5:
            dotsHTML = '<div class="column"><div class="dot"></div><div class="dot"></div></div><div class="dot" style="margin: auto;"></div><div class="column"><div class="dot"></div><div class="dot"></div></div>';
            break;
        case 6:
            dotsHTML = '<div class="column"><div class="dot"></div><div class="dot"></div><div class="dot" style="margin-bottom: 5px;"></div></div><div class="column"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
            break;
    }
    return dotsHTML;
}
