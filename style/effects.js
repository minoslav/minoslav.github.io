function scrollPanel() {
    var leftElement = document.getElementById("left");
    var headerElement = document.getElementById("header");
    
    var off = window.scrollY; //kolko px je odskrolovanych
    var visible = window.innerHeight; //viditelna vyska okna
    
    var addBarOffset = 0; //bolo kvoli IC liste
    
    if (leftElement) {
        var div = leftElement.clientHeight; //vyska laveho panelu
        var obj = leftElement.style;
        var c = 41 + addBarOffset; //posun laveho panelu voci vrchu (+ IC lista)
        
        if (div<visible) { //ak sa zmesti cely panel do okna...
            obj.position="fixed";
            obj.top="auto";
            //obj.background="orange"; //debug
        } else if (off+visible>c+div) { //ak sa nezmesti cely panel do okna a ak som odskroloval zbytocne vela... 
            obj.position="fixed";
            obj.top=visible-div+"px";
            //obj.background="red"; //debug
        } else { //ak sa nezmesti cely panel do okna a ak ho treba normalne skrolovat...
            obj.position="static";
            obj.top="auto";
            //obj.background="green"; //debug
        }
    }
    
    if (headerElement) {
        if (off <= addBarOffset) {
            headerElement.style.background="none";
            headerElement.style.opacity="1";
            headerElement.style.top= (addBarOffset - off) + "px";
        } else {
            headerElement.style.background="black";
            headerElement.style.opacity="0.7";
            headerElement.style.top="0px";
            //~ $(headerElement).animate({
                //~ opacity: 0.7,
                //~ background: "black"
            //~ }, 1000);
        }
    }
}

window.onscroll=scrollPanel;
window.onresize=scrollPanel;
