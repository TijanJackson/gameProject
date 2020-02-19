let totalRight = 750;
let totalTop = 320;

// $(document).ready(function(){
//     $(window).keyup(function(){
//         total += 20;
//         $("#black").animate( {left: total});
//     });
// });

$(document).ready(function(){
    $(window).keyup(function(e){
        if (e.keyCode === 39) {
            totalRight += 20;
            $("#black").animate( {left: totalRight});
            changeSize();
        }
        else if (e.keyCode === 37) {
            totalRight -= 20;
            $("#black").animate( {left: totalRight});
            // changeSize();
            portalPass();
        };
        // else if(e.keyCode === 40) {
        //     totalTop += 20;
        //     $("#black").animate( {top: totalTop});
        // }
        // else if(e.keyCode === 38) {
        //     totalTop -= 20;
        //     $("#black").animate( {top: totalTop});
        // };
    });
});

// $(document).ready(function(){
//     $(window).click(function(){
//         totalRight = 750;
//         totalTop = 320;
//         $("#black").css("left", "750px").css("top", "320px");
//         console.log('Values have been reset');
//     });
// });

function changeSize() {
    if (totalRight >= 790) {
        $("#blue").css("display", "none");
        $("#black").css("width", "100px");
        $("#black").css("height", "100px");
    }; 
    // else {
    //     $("#blue").css("display", "initial");
    //     $("#black").css("width", "20px");
    //     $("#black").css("height", "20px");
    // };
};

// ($("#black").css("width", "100px")) && ($("#black").css("height", "100px"))

function portalPass() {
    if( ($("#blue").css("display") === "none")  && (totalRight <= 600) ) {
        $("#black").css("display", "none");
        alert('You beat level 1');
        let cont = prompt('Continue to level 2? y or n?');
        if (cont === 'y') {
            $("body").css("display", "none");
            window.location.href = "levelTwo.html";
        }
        else {
            $("#toLevel2").css("display", "initial");
            alert('k bye then');
        };
    };
};

let hintOne = document.getElementById('hintOne');

hintOne.addEventListener('click', function() {
    alert(`If you want to get to the next level, you'll want to move through the purple portal.`);
    alert(`You should try moving into the blue square first, then try moving through the portal. That might help.`)
});


let reset = document.getElementById('reset');

reset.addEventListener('click', function(){
    totalRight = 750;
    totalTop = 320;
    $("#black").css("display", "initial");
    $("#black").css("width", "20px");
    $("#black").css("height", "20px");
    $("#black").css("left", "750px").css("top", "320px");
    $("#blue").css("display", "initial");
});

$(document).ready(function(){
    $("#toLevel2").click(function(){
        window.location.href = "levelTwo.html";
    });
});
