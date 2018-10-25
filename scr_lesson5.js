figurewhite = ["Л(б)","К(б)","С(б)","Фз(б)","Кл(б)","С(б)","К(б)","Л(б)"];
figureblack = ["Л(ч)","К(ч)","С(ч)","Фз(ч)","Кл(ч)","С(ч)","К(ч)","Л(ч)"];

let inscriptions = document.getElementsByClassName("inscriptions")[0];
inscriptions.style.width = '640px';
inscriptions.style.margin = '0 auto';
inscriptions.style.height = '80px';
let divGlav = document.getElementsByClassName("Glav")[0];
divGlav.style.width = '640px';
divGlav.style.height = '640px';
divGlav.style.margin = '0 auto';
divGlav.style.border = '1px solid black';
console.log(divGlav);
for (let i = 0; i < 9; i++) {
  let row = document.createElement("div");  
 for (let j=1; j < 9; j++) {
 let div = document.createElement("div");
     div.style.height = '80px';
     div.style.width = '80px';
     div.style.textAlign = 'center';
     div.style.fontSize = '26px';
     div.style.lineHeight = '80px';
     div.style.float = 'left';
     if (i == 0) {
         div.innerHTML = j;
     } else {
     if (i % 2 == j % 2){
        div.style.backgroundColor = 'black'; 
        div.style.color = 'white';     
     }
     if (i == 1 || i == 8) {
        (i == 1) ? div.innerHTML = figurewhite[j-1] : div.innerHTML = figureblack[j-1];
     }
     if (i == 2 || i == 7) {
         (i == 2) ? div.innerHTML = "П(б)" : div.innerHTML = "П(ч)";          
     }
     }
     row.append(div);       
     }
    if (i == 0) {
    inscriptions.append(row);    
    } else {
    divGlav.append(row);
    }
}