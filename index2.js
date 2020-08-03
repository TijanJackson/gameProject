// LEVEL TWO LOGIC BELOW

let ranNum = Math.floor(Math.random() * 10);

let clickCount = 0;

function cardReset() {
    cb1.src = 'cardBlack1.png';
    cb2.src = 'cardBlack1.png';
    cb3.src = 'cardBlack1.png';
    cb4.src = 'cardBlack1.png';
    cb5.src = 'cardBlack1.png';
    cb6.src = 'cardBlack1.png';

}

// function clickCheck() {
//     if ( (clickCount >= 2) && ( cb1.src ==- 'card6.png') && (cb1.src == cb6.src) ) {
//         setTimeout(function() { alert('You won!') }, 1000);
//         setTimeout(function() { 
//             let contTwo = prompt('Would you like to move to Level Three? y or n?' );
//         if ( contTwo === 'y') {
//             window.location.href = "levelThree.html"
//         } else {
//             $("#toLevel3").css("display", "initial");
//             alert('k bye then');
//             // cardReset();
//         }
//          }, 2000);
//     } else if ( (clickCount >= 2) && ( cb1.src != 'card6.png') ) {
//         setTimeout(function() { alert('You lost! Please try again. The cards will now be reset.') }, 1000);
//         setTimeout(function() { cardReset() }, 1000);
//         ranNum = Math.floor(Math.random() * 10);
//         clickCount = 0;
//     }
// }



let cb1 = document.getElementById("blackCard1");
let cb2 = document.getElementById("blackCard2");
let cb3 = document.getElementById("blackCard3");
let cb4 = document.getElementById("blackCard4");
let cb5 = document.getElementById("blackCard5");
let cb6 = document.getElementById("blackCard6");

let card1 = 'card1.png';
// let card2 = 'card2.png';
// let card3 = 'card3.png';
// let card4 = 'card4.png';
// let card5 = 'card5.png';
// let card6 = 'card6.png';


cb1.addEventListener('click', function() {
    clickCount+=1;
    console.log(clickCount);
    if (ranNum >= 0 && ranNum < 3) {
        cb1.src = 'card1.png';
}   else if (ranNum >= 3 && ranNum < 6) {
    cb1.src = 'card6.png'
}   else if (ranNum > 6 && ranNum <= 10) {
    cb1.src = 'card3.png'
}
})

cb2.addEventListener('click', function() {
    clickCount+=1;
    console.log(clickCount);
    if (ranNum >= 0 && ranNum < 3) {
        cb2.src = 'card3.png';
}   else if (ranNum >= 3 && ranNum < 6) {
    cb2.src = 'card6.png'
}   else if (ranNum > 6 && ranNum <= 10) {
    cb2.src = 'card2.png'
}
})

cb3.addEventListener('click', function() {
    clickCount+=1;
    console.log(clickCount);
    if (ranNum >= 0 && ranNum < 3) {
        cb3.src = 'card2.png';
}   else if (ranNum >= 3 && ranNum < 6) {
    cb3.src = 'card6.png'
}   else if (ranNum > 6 && ranNum <= 10) {
    cb3.src = 'card4.png'
}
})

cb4.addEventListener('click', function() {
    clickCount+=1;
    console.log(clickCount);
    if (ranNum >= 0 && ranNum < 3) {
        cb4.src = 'card3.png';
}   else if (ranNum >= 3 && ranNum < 6) {
    cb4.src = 'card6.png'
}   else if (ranNum > 6 && ranNum <= 10) {
    cb4.src = 'card1.png'
}
})

cb5.addEventListener('click', function() {
    clickCount+=1;
    console.log(clickCount);
    if (ranNum >= 0 && ranNum < 3) {
        cb5.src = 'card2.png';
}   else if (ranNum >= 3 && ranNum < 6) {
    cb5.src = 'card6.png'
}   else if (ranNum > 6 && ranNum <= 10) {
    cb5.src = 'card4.png'
}
})

cb6.addEventListener('click', function() {
    clickCount+=1;
    console.log(clickCount);
    if (ranNum >= 0 && ranNum < 3) {
        cb6.src = 'card3.png';
}   else if (ranNum >= 3 && ranNum < 6) {
    cb6.src = 'card6.png'
}   else if (ranNum > 6 && ranNum <= 10) {
    cb6.src = 'card1.png'
}
})


// THE ORIGINAL FUNCTION

cb6.addEventListener('click', function() {
    if ( (clickCount == 2) && (cb1.src == cb6.src)) {
        setTimeout(function() { alert('You won!') }, 1000);
        setTimeout(function() { 
            let contTwo = prompt('Would you like to move to Level Three? y or n?' );
        if ( contTwo === 'y') {
            window.location.href = "levelThree.html"
        } else {
            $("#toLevel3").css("display", "initial");
            alert('k bye then');
            // cardReset();
        }
         }, 2000);
        
    } else if ( (clickCount == 1) ) {
        setTimeout(function() { alert('One more to go.'); }, 1000);
        
    }


    else {
        
        setTimeout(function() { alert('You lost! Please try again. The cards will now be reset.') }, 1000);
        setTimeout(function() { cardReset() }, 1000);
        ranNum = Math.floor(Math.random() * 10);
        clickCount = 0;
    }
})

cb1.addEventListener('click', function() {
    if ( (clickCount == 2) && (cb1.src == cb6.src)) {
        setTimeout(function() { alert('You won!') }, 1000);
        setTimeout(function() { 
            let contTwo = prompt('Would you like to move to Level Three? y or n?' );
        if ( contTwo === 'y') {
            window.location.href = "levelThree.html"
        } else {
            $("#toLevel3").css("display", "initial");
            alert('k bye then');
            // cardReset();
        }
         }, 2000);
        
    } else if ( (clickCount == 1) ) {
        setTimeout(function() { alert('One more to go.'); }, 1000);
        
    }


    else {
        
        setTimeout(function() { alert('You lost! Please try again. The cards will now be reset.') }, 1000);
        setTimeout(function() { cardReset() }, 1000);
        ranNum = Math.floor(Math.random() * 10);
        clickCount = 0;
    }
})









$(document).ready(function(){
    $("#toLevel3").click(function(){
        window.location.href = "levelThree.html";
    });
});

let resetTwo = document.getElementById('resetTwo');

resetTwo.addEventListener('click', function() {
    cardReset();
    clickCount = 0;
})

