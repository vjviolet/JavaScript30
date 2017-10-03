window.onload = init;
function init() {
    oTitle = document.getElementById("title").getElementsByTagName('li');
    oUl = document.getElementsByClassName("content");
    for(let i=0; i<oTitle.length; i++) {
        oTitle[i].addEventListener('mouseover', function() {
            for(let n=0; n<oTitle.length; n++) {
                oTitle[n].className = "";
            }
            this.className = "current";
            for(let n = 0; n<oUl.length; n++) {
                oUl[n].style.display = "none";
            }
            oUl[i].style.display = "block";
        })

        
    }
}