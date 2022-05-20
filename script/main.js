const pdf = document.querySelectorAll("i");

function pdfColor(){
    for(let i=0;i<pdf.length;i++){
        pdf[i].onmouseover = function(){
            pdf[i].style.color="red";
        };
    }
}

function pdfColorVolver(){
    for(let i=0;i<pdf.length;i++){
        pdf[i].onmouseout = function(){
            pdf[i].style.color="black";
        };
    }
}

pdfColor();
pdfColorVolver();