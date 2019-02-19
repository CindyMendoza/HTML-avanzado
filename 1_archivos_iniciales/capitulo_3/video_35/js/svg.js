window.addEventListener("load", function (event) {

    var svg = document.getElementById("avatar").contentDocument;

    /*var svgRoot = svgDoc.documentElement;*/
    var avatar = svg.getElementById("avatar2");
    console.log(avatar);
    avatar.addEventListener("click", function () {
        alert("svg");

    });


});