var b=0;
function i(){
    if (b==0) {
        var gith = document.getElementById("gith");
        var back = document.getElementById("gith");
        gith.src = "PNG/GitHub-Mark-32px.png";
        back.style.backgroundColor="#ffffff";
        b=1;   
    } else {
        var gith = document.getElementById("gith");
        gith.src = "PNG/GitHub-Mark-Light-32px.png";
        var back = document.getElementById("gith");
        back.style.backgroundColor="";
        b=0;
    }

}