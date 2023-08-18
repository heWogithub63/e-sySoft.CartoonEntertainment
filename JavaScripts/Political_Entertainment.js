//create the request form html
   var path = './VideoClips/praesentationBilder/';
   var tbl = document.createElement('table');
   var tbl1 = document.createElement('table1');
   var newRow = [];
   var n = 0;
   var selected = "";
  
   var politicalImg = "Apollo_Optik, eine_neue_Zeit, COVID-19_German-solution, da_sprach_Gott, die_Etablierten, HairDressing, UmzugsUnternehmen, UnternehmensBeratung, "+
                       "Merkel-and-Trump, Trump-Queen, Trump-Amerika_first"; 
   var splitedImg = politicalImg.split(", ");  
   var werbungImg = "Apollo_Optik, DentaBlink, DentalKlinik, Die_Milch_machts, Fremdenverkehrsamt_Tirol, Frosta, HairDressing, LieferHeld, Mon_Cheri, PartnerShip, Werkzeuge"; 
   var splitedWerbung = werbungImg.split(", ");
   var thema = "PolitischMotiviert, " +
               "Werbung";
   var themaSplit = thema.split(", ");
   var textBtn = [];
   var steerBtn = [];
   
function Political_Entertainment() {
   
   newRow[0] = document.createElement('tr');              
   var cell = document.createElement("td");
   var cellText = document.createTextNode('Video Thema');
   cell.appendChild(cellText);
   newRow[0].appendChild(cell);
   tbl.appendChild(newRow[0]); // add the row to the end of the table body
   createSurface('politischMotiviert');
}

function createSurface (kindOf) {
   var url = path + kindOf +"/";
   var dif = splitedImg.length /6;

   var i=0;
   if(dif <= 1) i=1;
   else if(dif <= 2) i=2;
   else if(dif <= 3) i=3;
   var a = 0;
   var b = 6;
   
   for (var r = 1; r < (i+1); r++) {
       
       newRow[r] = document.createElement('tr');
       
        if(r==(i)) {
           a = splitedImg.length - (6*(r-1));
           if(a>0)
              a = splitedImg.length -a;
           else
              a=0;
           b = splitedImg.length;
        } else {
           a = 0;
           b = 6;
        }
           if(r == 1) {
                 
                     var cell = document.createElement("td");
                     var cellText = document.createTextNode(kindOf);

                     var span = document.createElement('span');
                         span.style.fontSize = "16px"; 
                         span.appendChild(cellText);
                     cell.appendChild(span);
                 newRow[r].appendChild(cell);
                 
            } else {
                     var cell = document.createElement("td");
                     var cellText = document.createTextNode(' ');
                     var span = document.createElement('span');
                         span.style.fontSize = "16px"; 
                         span.appendChild(cellText);
                     cell.appendChild(span);
                 newRow[r].appendChild(cell);
               
           }
           
        // create cells in row
        for (var c = a; c < b ; c++) {
            
                var newCell = document.createElement("td");
              
                newCell.appendChild(createImg(n, url +splitedImg[c]+'.png',kindOf, 120, 160));
                newCell.appendChild(createButton(n,splitedImg[c]));
                newRow[r].appendChild(newCell);
                n++;
          }           
          
	 tbl.appendChild(newRow[r]); // add the row to the end of the table body
         
    }

    var form1 = document.getElementById('form1');
    form1.appendChild(tbl); // appends <table> into <form1>
    if(kindOf != 'Werbung') {
       splitedImg = splitedWerbung;
       createSurface('Werbung');
    } else
       createSteerBtnTab();
}

function createImg(id,path,thema,height,width) {
    var oImg = document.createElement("img");
    oImg.setAttribute('id', id);
    oImg.setAttribute('src', path);
    oImg.setAttribute('name', thema);
    oImg.setAttribute('height', height);
    oImg.setAttribute('width', width);
    oImg.onclick = function(event) {
         for(var i=0;i<textBtn.length;i++)
             textBtn[i].style.color = 'black';
         textBtn[this.id].style.color = 'blue';
         for( var i=0;i<steerBtn.length;i++)
             steerBtn[i].style.color = 'white';
         steerBtn[0].style.color = 'yellow';
         
         selected = './VideoClips/'+this.name+'/'+this.src.substring(this.src.lastIndexOf("/")+1, this.src.lastIndexOf(".png"))+'.mp4';
         document.getElementById('video1').src = selected;
    };
    
  return oImg;
}

function createButton(id,text) {
        textBtn[id] = document.createElement('button');
        textBtn[id].innerText = text;
        textBtn[id].id = id;
      
    return textBtn[id];
}

function createSteerButton(id,text) {
        steerBtn[id] = document.createElement('steerButton');
        steerBtn[id].innerText = text;
        steerBtn[id].id = id;
        steerBtn[id].onclick = function(event) {
            if(selected != '') {
               for( var i=0;i<steerBtn.length;i++)
                    steerBtn[i].style.color = 'white';
               this.style.color = 'yellow';
               
               if(this.id == 1) {
                  var select = './VideoClips/break.mp4';

                      console.log(select);
                      document.getElementById('video1').src = select;
               } else if(this.id == 0) {
                  document.getElementById('video1').src = selected;
               }
            }
        }
    return steerBtn[id];
}

function createSteerBtnTab () {
     var buttons = "Video anschauen, Video download";
     var buttonsTx = buttons.split(', ');
     var steerRow = document.createElement('tr');
     for (var i=0;i<buttonsTx.length;i++) {
         var cell = document.createElement('td2');
         cell.appendChild(createSteerButton(i,buttonsTx[i]));
         steerRow.appendChild(cell);
     }
     tbl1.appendChild(steerRow);
     var form2 = document.getElementById('form2');
     form2.appendChild(tbl1); // appends <table> into <form1>
}

