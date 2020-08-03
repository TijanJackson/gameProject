let totalRight = 200;
let totalTop = 320;

let missRight = 60;

let miss = document.getElementById("missile");

function showGirl() {
    if (totalRight == 700) {
        $("#girl").css("display", "initial"),
        setTimeout( function() {alert('Careful! She has a missile launcher! Get to the square to save yourself!')}, 100)
    }
}

function showMiss() {
    if (totalRight >= 720) {
        $("#missile").css("display", "initial")
    }
}

function saveMascot() {
    if (totalRight >= 900) {
        setTimeout( function() {alert('You saved yourself! You will be transported to level 4 now.')}, 200)
        setTimeout( function() {window.location.href = "levelFour.html"}, 300)
    }
}
// let keyD = false;

// $(document).ready(function(){
//     $(window).keydown(function(e){
//         if ( (e.keyCode === 39) || (e.keyCode === 37) || (e.keyCode === 40) || (e.keyCode === 38) ) {
//             keyD = true;
//         }
//     })
// })
// COMEBACK
// $(document).ready(function(){
// $(window).keyup(
//     function(e){
//         // keyD = false;
//         $("#mascot").stop();
//         // setTimeout( function() { }, 4000);
//     }
// );
// })

$(document).ready(function(){
    $(window).keydown(function(e){
        // REMOVED THE && (keyD == true) FROM ALL
        if ( (e.keyCode === 39)  ) {
            totalRight += 20;
            $("#mascot").animate( {left: totalRight});
            showGirl();
            showMiss();
            saveMascot();
            if ( (miss.style.display === "initial" ) ) {
                missRight += 40;
                $("#missile").animate( {left: missRight} )
            }
            // setTimeout( function() { $("#mascot").animate( {left: totalRight}) }, 2000);
        }
        // else if (e.keyCode === 37  ) {
        //     totalRight -= 20;
        //     $("#mascot").animate( {left: totalRight});
        //     // changeSize();
        // }
        // else if ( (e.keyCode === 40)  ) {
        //     totalTop += 20;
        //     $("#mascot").animate( {top: totalTop});
        // }
        // else if ( (e.keyCode === 38)  ) {
        //     totalTop -= 20;
        //     $("#mascot").animate( {top: totalTop});
        // }
        // else if (keyDown == false) {
        //     $("mascot").stop();
        // }
    });
});

$(document).ready(function(){
    $(window).keyup(
        function(e){
            // keyD = false;
            $("#mascot").stop();
            // setTimeout( function() { }, 4000);
        }
    );
    })


