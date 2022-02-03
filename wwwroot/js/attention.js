$(function(){
    const movingText = [];
    movingText[0]= "bounce";
    movingText[1]= "flash";
    movingText[2]= "pulse";
    movingText[3]= "rubberBand";
    movingText[4]= "shakeX";
    movingText[5]= "shakeY";
    movingText[6]= "headShake";
    movingText[7]= "swing";
    movingText[8]= "tada";
    movingText[9]= "wobble";
    movingText[10]= "jello";
    movingText[11]= "heartBeat";
    var movingTextRand = movingText[Math.floor(Math.random() * movingText.length)];
    $('h1').addClass('animate__animated animate__' + movingTextRand)
});
    