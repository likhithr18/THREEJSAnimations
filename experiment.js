/* Global Variables */
/* the developer should define variables and constants here */
/* We define a room with 3 walls, floor and ceiling */
/* We define a ball which bounces in the xy plane */
/* We define modifiable prameters : gravity, ball size, initial velocity */
/* We support draggable ball */
/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

var x;
var ans;
var current=0;
var count=0;
var counter=0;
var i;
var randx;
var group;
var randy;
var randz;
var numofbundle;
var numofsticks;
var numofplus;
var min;
var max;
var random;
var k1;
var k2;
var k3;
var k4;
var k5;
var rand1;
var rand2;
var rand3;
var rand4;
var rand5;
var bundle=new Array();
var plus=new Array();
var stick=new Array();
var banner= new Array();
var number =new Array();
var array =new Array();
var tick;
var wrong;
var ans;
var whitebox11;
var whitebox12;
var whitebox13;
var whitebox14;
var whitebox15;
var whitebox16;
var whitebox17;
var whitebox18;
var whitebox19;
var whitebox20;

var textMesh=new Array();
var textMaterial;
var textMeshran1;
var textMeshran2;
var textMeshran3;
var textMeshran4;
var textMeshran5;
var textMesh11;
var textMesh12;
var textMesh13;
var textMesh14;
var textMesh15;
var textMesh16; 
var textMesh17;
var textMesh18;
var textMesh19;
var textMesh20;
var geometry;
var material;
var loader;
var texture;
var correct_text;
var score;
var mainText;
var materialFront;
var validtext;
 
var Evaluation_image =new Array();
var flag = new Array();



function PIEsetDragStart(a, b) {
    a.dragStart = b
}
function PIEsetDrag(a, b) {
    a.drag = b
}
function PIEsetDragEnd(a, b) {
    a.dragEnd = b
}

var PIEdragElements = [];
function PIEdragElement(a) {
    PIEdragElements.push(a)
}
function PIEremoveDragElement(b) {
    var a;
    var c;
    c = false;
    for (a = 0; (c == false) && (a < PIEdragElements.length); a++) {
        if (PIEdragElements[a] == b) {
            c = true
        }
    }
    if (c == true) {
        while (a <= PIEdragElements.length) {
            PIEdragElements[a - 1] = PIEdragElements[a];
            a++
        }
        PIEdragElements.pop()
    }
}


function PIEremoveElement(b) {
    var a;
    var c;
    PIEscene.remove(b);
    c = false;
    for (a = PIEsceneElements.length - 1; (c == false) && (a >= 0); a--) {
        if (b == PIEsceneElements[a]) {
            while (a < PIEsceneElements.length - 1) {
                PIEsceneElements[a] = PIEsceneElements[a + 1];
                a++
            }
            PIEsceneElements.pop();
            c = true
        }
    }
}






function handlecount() {
    // body...
}
function handlesubmit(){
    if(current==1)
    {
        PIEscene.remove(tick);
        PIEscene.remove(wrong);
        PIEscene.remove(validtext);
        visibility();
        ans =PIEgetInputText("Count");
        console.log(ans);
        //console.log(random);
        if(ans==random)
        {

           PIEscene.remove(wrong);
           PIEscene.remove(validtext);
           console.log("true");
           tick.visible=true;
           multichoice();
           
        }
        else if(ans != random&&!isNaN(ans))
        {
        // wrong.visibile=false;
           PIEscene.remove(validtext);
           PIEscene.remove(tick);
           console.log("wrong");
           wrong.visible=true;
           PIEchangeInputText("Count","");
        }
        else if(isNaN(ans))
        {
           //tick.visible=false;
           // validtext.visible=false;
           PIEscene.remove(tick);
           PIEscene.remove(wrong);
           validloader();
           console.log("invalid");
            PIEchangeInputText("Count","");
           //validtext.visible=true;
           
           //console.log("NAN");
        }   
    }
    // if(current==1)
    // {
    //   console.log(random);
    // }
    
        //console.log("wrong"}
}
function visibility(){
        geometry = new THREE.BoxGeometry( 10, 10, 0 );
        tick = createMesh(geometry,"tick.png");
        tick.position.set(0,-10,2);
        tick.visible=false;
        PIEaddElement(tick);
        
        geometry = new THREE.BoxGeometry( 10, 10, 0 );
        wrong = createMesh(geometry,"cross.png");
        wrong.position.set(0,-10,2);
        wrong.visible=false;
        PIEaddElement(wrong);

    var materialFront = new THREE.MeshBasicMaterial( { color: 0x990000} );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x990000} );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
     var textGeom = new THREE.TextGeometry("Enter a valid Number", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        validtext= new THREE.Mesh(textGeom, textMaterial );
        validtext.position.set(-22,-10,2);
        validtext.visible=false;
        PIEaddElement(validtext);
        
    });

       
        
        PIEstartAnimation();

}
function myMainEnd11(element,newpos) {
    // body...
    element.position.set(-28,16,0);
    removetextcontent();
    textfunction();

}
function myMainEnd12(element,newpos) {
    // body...
    element.position.set(-13,16,0);
    removetextcontent();
    textfunction();
   
}
function myMainEnd13(element,newpos) {
    // body...
    element.position.set(2,16,0);
    removetextcontent();
    textfunction();
    
}
function myMainEnd14(element,newpos) {
    // body...
    element.position.set(17,16,2);
    removetextcontent();
    textfunction();
    
}
function myMainEnd15(element,newpos) {
    // body...
    element.position.set(32,16,0);
    textfunction();
    
}
function myMainEnd16(element,newpos) {
    // body...
    element.position.set(-28,1,0);
    removetextcontent();
    
      textfunction();
}
function myMainEnd17(element,newpos) {
    // body...
    element.position.set(-13,1,0);
    removetextcontent();
    textfunction();
    
}
function myMainEnd18(element,newpos) {
    // body...
    element.position.set(2,1,0);
    removetextcontent();
    textfunction();
   
}
function myMainEnd19(element,newpos) {
    // body...
    element.position.set(17,1,0);
    removetextcontent();
    textfunction();
}
function myMainEnd20(element,newpos) {
    // body...
    element.position.set(32,1,0);
    removetextcontent();
    textfunction();
}
function Ran1position(element,newpos) {
    // body...
    if(numofmissing==3)
    element.position.set(-25,-30,0);
    if(numofmissing==4)
    element.position.set(-30,-30,0);
    if(numofmissing==5)
    element.position.set(-30,-30,0);
    removetextcontent();
    removeBanner();
    textcontent();

}
function Ran2position(element,newpos) {
    if(numofmissing==3)
    element.position.set(0,-30,0);
    if(numofmissing==4)
    element.position.set(-10,-30,0);
    if(numofmissing==5)
    element.position.set(-15,-30,0);
  // body...
  //element.position.set(-15,-30,0);
  removetextcontent();
  removeBanner();
  textcontent();
}
function Ran3position(element,newpos) {
    if(numofmissing==3)
    element.position.set(25,-30,0);
    if(numofmissing==4)
    element.position.set(10,-30,0);
    if(numofmissing==5)
    element.position.set(3,-30,0);
  // body...
  //element.position.set(5,-29,0);
  removetextcontent();
  removeBanner();
  textcontent();

}
function Ran4position(element,newpos) {

  // body...
  if(numofmissing==4)
  element.position.set(30,-30,0);
  if(numofmissing==5)
  element.position.set(20,-30,0);
  removetextcontent();
  removeBanner();
  textcontent();

}
function Ran5position(element,newpos) {
  // body...
  element.position.set(35,-30,0);
  removetextcontent();
  removeBanner();
  textcontent();

}

function myMainDragran5(element,newpos) {
    // body...
    randx=newpos.x;
    console.log("drag");
    randy=newpos.y;
    randz=newpos.z;
    if(rand5 ==11)
    { 
        if(newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-28;
          randy=16;
          randz=2;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd11);
         // PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }

        element.position.set(randx,randy,randz);
    }
    if(rand5==12)
    {
        if(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-13;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd12);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand5==13)
    {
        if(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=2;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd13);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand5==14)
    {
        if(newpos.x <=22&& newpos.x >= 11 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=17;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd14);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }
        element.position.set(randx,randy,randz);
    }
    if (rand5==15)
    {
        if(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=32
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd15);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23 && newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand5==16)
    {
        if(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-28;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd16);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }
        element.position.set(randx,randy,randz);


    }
    if(rand5==17)
    {
        if(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-13;
          randy=-1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd17);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }
        element.position.set(randx,randy,randz);
        

    }
    if(rand5==18)
    {
        if(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=2;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd18);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }
        element.position.set(randx,randy,randz);


    }
    if(rand5==19)
    {
        if(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=17;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd19);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }

        element.position.set(randx,randy,randz);


    }
    if(rand5==20)
    {
        if(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=32;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[4]=1;
          PIEsetDragEnd(element,myMainEnd20);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran5position);
        }

        element.position.set(randx,randy,randz);

    }





    element.position.set(randx,randy,randz);
    if(flag[4]!=1)
    PIEsetDragEnd(element,Ran5position);

}

function myMainDragran4(element,newpos) {
    // body...
    randx=newpos.x;
    console.log("drag");
    randy=newpos.y;
    randz=newpos.z;
    if(rand4 ==11)
    { 
        if(newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-28;
          randy=16;
          randz=2;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd11);
         // PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }

        element.position.set(randx,randy,randz);
    }
    if(rand4==12)
    {
        if(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-13;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd12);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand4==13)
    {
        if(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=2;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd13);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand4==14)
    {
        if(newpos.x <=22&& newpos.x >= 11 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=17;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd14);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }
        element.position.set(randx,randy,randz);
    }
    if (rand4==15)
    {
        if(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=32
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd15);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23 && newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand4==16)
    {
        if(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-28;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd16);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }
        element.position.set(randx,randy,randz);


    }
    if(rand4==17)
    {
        if(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-13;
          randy=-1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd17);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }
        element.position.set(randx,randy,randz);
        

    }
    if(rand4==18)
    {
        if(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=2;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd18);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }
        element.position.set(randx,randy,randz);


    }
    if(rand4==19)
    {
        if(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=17;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd19);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }

        element.position.set(randx,randy,randz);


    }
    if(rand4==20)
    {
        if(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=32;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[3]=1;
          PIEsetDragEnd(element,myMainEnd20);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran4position);
        }

        element.position.set(randx,randy,randz);

    }





    element.position.set(randx,randy,randz);
    if(flag[3]!=1)
    PIEsetDragEnd(element,Ran4position);

}


function myMainDragran3(element,newpos) {
    // body...
   randx=newpos.x;
    console.log("drag");
    randy=newpos.y;
    randz=newpos.z;
    if(rand3 ==11)
    { 
        
        if((newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
        else if(newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-28;
          randy=16;
          randz=2;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd11);
         // PIEsetDragStart(element,false);
          console.log("ones");
        }

        element.position.set(randx,randy,randz);
    }
    if(rand3==12)
    {
       
       if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
        else if(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-13;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd12);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        element.position.set(randx,randy,randz);
    }
    if(rand3==13)
    {
       
        if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
        else if(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=2;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd13);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        element.position.set(randx,randy,randz);
    }
    if(rand3==14)
    {
        
        if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
        else if(newpos.x <=22&& newpos.x >= 11 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=17;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd14);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        element.position.set(randx,randy,randz);
    }
    if (rand3==15)
    {
        
        if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23 && newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
        else if(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=32
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd15);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        element.position.set(randx,randy,randz);
    }
    if(rand3==16)
    {
        
       if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
        else if(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-28;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd16);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        element.position.set(randx,randy,randz);


    }
    if(rand3==17)
    {
        
       if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
        else if(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-13;
          randy=-1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd17);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        element.position.set(randx,randy,randz);
        

    }
    if(rand3==18)
    {
       
        if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
        else if(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=2;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd18);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        element.position.set(randx,randy,randz);


    }
    if(rand3==19)
    {
        
       if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
        else if(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=17;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd19);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }

        element.position.set(randx,randy,randz);


    }
    if(rand3==20)
    {
       
       if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran3position);
        }
      else if(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=32;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[2]=1;
          PIEsetDragEnd(element,myMainEnd20);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }

        element.position.set(randx,randy,randz);

    }



    element.position.set(randx,randy,randz);
    if(flag[2]!=1)
    PIEsetDragEnd(element,Ran3position);

    

}




function myMainDragran2(element,newpos) {
    // body...
    randx=newpos.x;
    console.log("drag");
    randy=newpos.y;
    randz=newpos.z;
    if(rand2 ==11)
    { 
        if(newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-28;
          randy=16;
          randz=2;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd11);
         // PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }

        element.position.set(randx,randy,randz);
    }
    if(rand2==12)
    {
        if(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-13;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd12);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand2==13)
    {
        if(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=2;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd13);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand2==14)
    {
        if(newpos.x <=22&& newpos.x >= 11 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=17;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd14);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }
        element.position.set(randx,randy,randz);
    }
    if (rand2==15)
    {
        if(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=32
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd15);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23 && newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand2==16)
    {
        if(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-28;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd16);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }
        element.position.set(randx,randy,randz);


    }
    if(rand2==17)
    {
        if(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-13;
          randy=-1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd17);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }
        element.position.set(randx,randy,randz);
        

    }
    if(rand2==18)
    {
        if(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=2;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd18);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }
        element.position.set(randx,randy,randz);


    }
    if(rand2==19)
    {
        if(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=17;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd19);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }

        element.position.set(randx,randy,randz);


    }
    if(rand2==20)
    {
        if(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=32;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[1]=1;
          PIEsetDragEnd(element,myMainEnd20);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran2position);
        }

        element.position.set(randx,randy,randz);

    }





    element.position.set(randx,randy,randz);
    if(flag[1]!=1)
    PIEsetDragEnd(element,Ran2position);

}

    
function myMainDragran1(element,newpos) {
    // body...
    randx=newpos.x;
    console.log("drag");
    randy=newpos.y;
    randz=newpos.z;
    if(rand1 ==11)
    { 
        if(newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-28;
          randy=16;
          randz=2;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd11);
         // PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }

        element.position.set(randx,randy,randz);
    }
    if(rand1==12)
    {
        if(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=-13;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd12);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand1==13)
    {
        if(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=2;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd13);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand1==14)
    {
        if(newpos.x <=22&& newpos.x >= 11 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=17;
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd14);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23&& newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }
        element.position.set(randx,randy,randz);
    }
    if (rand1==15)
    {
        if(newpos.x <=37 && newpos.x >= 27 && newpos.y >=11 && newpos.y <=21 )
        {
          randx=32
          randy=16;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd15);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
        else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=-23 && newpos.x >= -33&& newpos.y >=-4 && newpos.y <=6 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }
        element.position.set(randx,randy,randz);
    }
    if(rand1==16)
    {
        if(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-28;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd16);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }
        element.position.set(randx,randy,randz);


    }
    if(rand1==17)
    {
        if(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=-13;
          randy=-1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd17);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }
        element.position.set(randx,randy,randz);
        

    }
    if(rand1==18)
    {
        if(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=2;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd18);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 12 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }
        element.position.set(randx,randy,randz);


    }
    if(rand1==19)
    {
        if(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=17;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd19);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }

        element.position.set(randx,randy,randz);


    }
    if(rand1==20)
    {
        if(newpos.x <=37 && newpos.x >=27 && newpos.y >=-4 && newpos.y <=6)
        {
          randx=32;
          randy=1;
          randz=0;
          PIEsetDrag(element,false);
          counter=counter+1;
          flag[0]=1;
          PIEsetDragEnd(element,myMainEnd20);
          //PIEsetDragStart(element,false);
          console.log("ones");
        }
         else if((newpos.x<=-23 && newpos.x >= -33 && newpos.y >=11 && newpos.y <=21 )||(newpos.x<=-8 && newpos.x >= -19 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=7 && newpos.x >= -3 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=22 && newpos.x >= 11 && newpos.y >=11 && newpos.y <=21)||(newpos.x <=37 && newpos.x >= 27&& newpos.y >=11 && newpos.y <=21 )||(newpos.x <=-23 && newpos.x >=-33 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=-8 && newpos.x >=-18 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=7 && newpos.x >=-3 && newpos.y >=-4 && newpos.y <=6)||(newpos.x <=22 && newpos.x >=12 && newpos.y >=-4 && newpos.y <=6))
        {
            PIEsetDragEnd(element,Ran1position);
        }

        element.position.set(randx,randy,randz);

    }




    element.position.set(randx,randy,randz);
    if(flag[0]!=1)
       PIEsetDragEnd(element,Ran1position);


}
    
function removeBanner()
{
  for(i=0;i<3;i++)
  {
    //if(banner[i])
      PIEscene.remove(banner[i]);
  }
}
function removetextcontent(){
  PIEscene.remove(correct_text);

}
function removeLearn(){
  for(i=0;i<=10;i++)
    PIEscene.remove(textMesh[i]);
}
function removeMultichoice(){
        
        PIEscene.remove(bundle[0]);
        PIEscene.remove(plus[0]);
        numofsticks=random%10;
         for(i=0;i<numofsticks;i++)
            {
                PIEscene.remove(stick[i]);
                //plus[i].visible=false;
                console.log("hello");
            }
        // numofbundle=random/5;
        // numofplus=numofbundle-1;
        // if(random%5==0)
        // {
        //     for(i=0;i<numofbundle;i++)
        //     {
        //         // bundle[i].visible=false;
        //         PIEscene.remove(bundle[i]);
        //     }
        //     for(i=0;i<numofplus;i++)
        //     {
        //         // plus[i].visible=false;
        //         PIEscene.remove(plus[i]);
        //         console.log("hello");
        //     }
        // }
        // else
        // {
        //     for(i=0;i<numofbundle;i++)
        //     {
        //         PIEscene.remove(bundle[i]);
        //         // bundle[i].visible=false;
        //     }
        //     for(i=0;i<numofplus;i++)
        //     {
        //         PIEscene.remove(plus[i]);
        //         //plus[i].visible=false;
        //         console.log("hello");
        //     }
        //     for(i=0;i<numofsticks;i++)
        //     {
        //         PIEscene.remove(stick[i]);
        //         //stick[i].visible=false;
        //     }
        // }
        PIEscene.remove(tick);
        //tick.visible=false;
        PIEscene.remove(wrong);
        //wrong.visible=false;
}
function removeMissingText() {

    // body...
    PIEscene.remove(whitebox11);
    PIEscene.remove(whitebox12);
    PIEscene.remove(whitebox13);
    PIEscene.remove(whitebox14);
    PIEscene.remove(whitebox15);
    PIEscene.remove(whitebox16);
    PIEscene.remove(whitebox17);
    PIEscene.remove(whitebox18);
    PIEscene.remove(whitebox19);
    PIEscene.remove(whitebox20);

    PIEscene.remove(number[0]);
    PIEscene.remove(number[1]);
    PIEscene.remove(number[2]);
    PIEscene.remove(number[3]);
    PIEscene.remove(number[4]);
    PIEscene.remove(number[5]);
    PIEscene.remove(number[6]);
    PIEscene.remove(number[7]);
    PIEscene.remove(number[8]);
    PIEscene.remove(number[9]);
    if(textMeshran1)
    textMeshran1.visible=false;
    if(textMeshran2)
    textMeshran2.visible=false;
    if(textMeshran3)
    textMeshran3.visible=false;
    if(textMeshran4)
      textMeshran4.visible=false;
    if(textMeshran5)
      textMeshran5.visible=false;



}
function initialiseControlVariables()
{
    
}


function initialiseControls()
{

   PIEaddDualCommand("Learn",learn);
   
   // PIEaddInputText("count",0,handlecount);
   // PIEaddInputCommand("submit",handlesubmit);
   PIEaddDualCommand("MissingNumbers",function(){
        // group.visible=false;
        resetExperiment();
        removeBanner();
        removeMultichoice();
        removeMissingText();
        removeLearn();
        removetextcontent();
        PIEscene.remove(validtext);
        flag[0]=0;
        flag[1]=0;
        flag[2]=0;
        flag[3]=0;
        flag[4]=0;
        missing_num();
        score=0;
        //PIEscene.remove(correct_text);
        //missing_Evaluation();
        PIEstartAnimation();
            
   });
   PIEaddDualCommand("Quiz",multichoice);
   //PIEaddInputCommand("Repeat",handlerepeat);
   
}
function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       return mesh;
}

/******************* End of GUI control objects code **********************

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Learn counting experiment concepts</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment helps us to learn counting from 11-19</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls.</p>";
    //helpContent = helpContent + "<p>The animation shows step wise working of a bio gas plant.</p>";
    helpContent = helpContent + "<h3>Controls</h3>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li><b>Learn</b> - We can view numbers from 11- 19 by clicking on Learn button in the display panel</li>";
    helpContent = helpContent + "<li><b>MissingNumbers</b> - Here few numbers from 11-19 are randomly missing.The user has to drag and drop the missing number in corresponding box. The user can play multiple times by pressing the button</li>";
    helpContent = helpContent + "<li><b>Quiz</b> - We can see bundles and sticks randomly appearing on screen .The user can play multiple times by pressing the button";
    helpContent = helpContent + "<li><b>Count</b> - User can type input corresponding to bundles and sticks in Quiz";
    helpContent =helpContent  + "<li><b>Submit</b>- Evaluation of count can be seen by clicking on submit button. ";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Learn counting experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>This experiment helps to learn counting from 11 to 19.</p>"; 
    infoContent = infoContent + "<h3>Learn</h3>" 
    infoContent = infoContent + "<p>In this experiment we wil teach numbers from 11- 19</p>"
    infoContent = infoContent + "<h3>Practice</h3>" 
    infoContent = infoContent + "<p>User can practice  by ordering numbers in missing numbers and by counting number of bundles and sticks</p>"
    //infoContent = infoContent + "<p>User can count numbers in Game</p> "
    // infoContent = infoContent + "<p>Here we teach ordering of numbers from 11-19. </p>"
    // infoContent = infoContent + "<p>Here in another section we "
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    //
    mySceneTLX = -50;
    mySceneTLY = 50;
    mySceneBRX = 50;
    mySceneBRY = -50;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

    PIEscene.background = new THREE.Color(0x87ceeb);

    var geometry=new THREE.PlaneGeometry(200,95);
    var classroom=createMesh(geometry,"Class.png");
    classroom.position.set(0,0,-2);
    PIEaddElement(classroom);


    geometry = new THREE.PlaneGeometry(40,40);
    var teacher=createMesh(geometry,"Teacher.png");
    teacher.position.set(-53,-2,0);
    PIEaddElement(teacher);
    

    PIErender();
   
}
function textcontent() {
  // body...
  var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();
    
     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Try again", 
        {
            size: 3, height: 1.5, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        correct_text = new THREE.Mesh(textGeom, textMaterial );
        correct_text.position.set(-4,-42,0);
        console.log("textcontent")
        PIEaddElement(correct_text);
         });
 PIEstartAnimation();
        
}
function textfunction() {
    removetextcontent();


    if(counter==1)
    {    
        removeBanner();
        geometry=new THREE.PlaneGeometry(22,10);
        banner[0]=createMesh(geometry,"banner1.png");
        banner[0].position.set(0,-44,-1);
        PIEaddElement(banner[0]);
        score=score+1;


    }
    if(counter==2)
    {
        removeBanner();
        geometry=new THREE.PlaneGeometry(22,10);
        banner[1]=createMesh(geometry,"banner2.png");
        banner[1].position.set(0,-44,-1);
        PIEaddElement(banner[1]);
        score = score + 2;
    }
    if(counter>=3)
    {
        removeBanner();
        geometry=new THREE.PlaneGeometry(22,10);
        banner[2]=createMesh(geometry,"banner3.png");
        banner[2].position.set(0,-44,-1);
        PIEaddElement(banner[2]);
        score =score +3;
    }
    PIEstartAnimation();
    
}
 function learn(){
   //count=0;
    resetExperiment();
    removeBanner();
    PIErender();
    removeMultichoice();
    removeMissingText();
    removetextcontent();
    PIEchangeInputText("Count","");
    PIEscene.remove(validtext);
    //removeLearn();
    var materialFront = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();




     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Numbers 11-20", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[10] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[10].position.set(-18,25,0);
        
        PIEaddElement(textMesh[10]);


        var textGeom = new THREE.TextGeometry("11 - Eleven", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[0] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[0].position.set(-31,18,0);
        
        PIEaddElement(textMesh[0]);
        console.log("hai")

        var textGeom = new THREE.TextGeometry("12 - Twelve", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[1] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[1].position.set(-31,11,0);
        PIEaddElement(textMesh[1]);

        var textGeom = new THREE.TextGeometry("13 - Thirteen", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[2] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[2].position.set(-31,04,0);
        PIEaddElement(textMesh[2]);

        var textGeom = new THREE.TextGeometry("14 - Fourteen", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[3] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[3].position.set(-31,-03,0);
        PIEaddElement(textMesh[3]);


        var textGeom = new THREE.TextGeometry("15 - Fifteen", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[4] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[4].position.set(-31,-10,0);
        PIEaddElement(textMesh[4]);


        var textGeom = new THREE.TextGeometry("16 - Sixteen", 
        {
            size:4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[5] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[5].position.set(10,18,0);
        PIEaddElement(textMesh[5]);
        

        var textGeom = new THREE.TextGeometry("17 - Seventeen", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[6] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[6].position.set(10,11,0);
        PIEaddElement(textMesh[6]);


        var textGeom = new THREE.TextGeometry("18 - Eighteen", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[7] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[7].position.set(10,04,0);
        PIEaddElement(textMesh[7]);

        var textGeom = new THREE.TextGeometry("19 - Nineteen", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[8] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[8].position.set(10,-03,0);
        PIEaddElement(textMesh[8]);

        var textGeom = new THREE.TextGeometry("20 - Twenty", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[9] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[9].position.set(10,-10,0);
        PIEaddElement(textMesh[9]);

        //PIEdragElement(textMesh12);
        // PIEsetDrag(textMesh11,myMainDrag);
        // PIEsetDragEnd(textMesh11,myTwoEnd);
    });
 PIEstartAnimation();

 }
 function missing_num(){
    current=0;
    counter=0;
    min =11;
    numofmissing =Math.floor(Math.random()*(5-3+1)+3);
    if(numofmissing==3)
    {
       rand1 =Math.floor(Math.random() * 10) + min ;
      do
      {
      rand2 =Math.floor(Math.random() * 10) + min ;  
      }while(rand1==rand2);
      do{
        rand3 = Math.floor(Math.random() * 10) + min;
      }while(rand3==rand2 || rand3 == rand1);
    }
    if(numofmissing==4)
    {
       rand1 =Math.floor(Math.random() * 10) + min ;
      do
      {
      rand2 =Math.floor(Math.random() * 10) + min ;  
      }while(rand1==rand2);
      do{
        rand3 = Math.floor(Math.random() * 10) + min;
      }while(rand3==rand2 || rand3 == rand1);
      do{
        rand4 = Math.floor(Math.random() * 10) + min;
      }while(rand4==rand2 || rand4 == rand1||rand4==rand3);

    }
     if(numofmissing==5)
    {
       rand1 =Math.floor(Math.random() * 10) + min ;
      do
      {
      rand2 =Math.floor(Math.random() * 10) + min ;  
      }while(rand1==rand2);
      do{
        rand3 = Math.floor(Math.random() * 10) + min;
      }while(rand3==rand2 || rand3 == rand1);
      do{
        rand4 = Math.floor(Math.random() * 10) + min;
      }while(rand4==rand2 || rand4 == rand1||rand4==rand3);
      do{
        rand5 = Math.floor(Math.random() * 10) + min;
      }while(rand5==rand1 || rand5 == rand2||rand5==rand3||rand5==rand4);
    }
    console.log(rand1);
    console.log(rand2);
    console.log(rand3);
    var geometry = new THREE.BoxGeometry( 10, 10, 0.2 );
    whitebox11 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))
    whitebox12 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))
    whitebox13 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))
    whitebox14 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))
    whitebox15 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))
    whitebox16 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))
    whitebox17 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))
    whitebox18 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))
    whitebox19 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))
    whitebox20 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffffff}))

    array= ["Twenty","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
    whitebox11.position.set(-28,16,0);
    whitebox12.position.set(-13,16,0);
    whitebox13.position.set(2,16,0);
    whitebox14.position.set(17,16,0);
    whitebox15.position.set(32,16,0);
    whitebox16.position.set(-28,1,0);
    whitebox17.position.set(-13,1,0);
    whitebox18.position.set(2,1,0);
    whitebox19.position.set(17,1,0);
    whitebox20.position.set(32,1,0);

    PIEaddElement(whitebox11);
    PIEaddElement(whitebox12);
    PIEaddElement(whitebox13);
    PIEaddElement(whitebox14);
    PIEaddElement(whitebox15);
    PIEaddElement(whitebox16);
    PIEaddElement(whitebox17);
    PIEaddElement(whitebox18);
    PIEaddElement(whitebox19);
    PIEaddElement(whitebox20);
    PIEchangeInputText("Count","");

    var materialFront = new THREE.MeshBasicMaterial( { color: 0x990000} );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x990000} );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();

    if(numofmissing==3)
    {
        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
          var textGeom = new THREE.TextGeometry("Missing Numbers", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[10] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[10].position.set(-18,25,0);
        
        PIEaddElement(textMesh[10]);


        if(rand1!=11 && rand2 !=11 && rand3 != 11)
        {
             geometry=new THREE.BoxGeometry(10,10,2);
             number[0]=createMesh(geometry,"Eleven.png");
            number[0].position.set(-28,16,0);
            PIEaddElement(number[0]);
           // PIEdragElement(number[0]);


            // var textGeom = new THREE.TextGeometry("11", 
            // {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            // });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh11 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh11.position.set(-31,14,0);
            // PIEaddElement(textMesh11);
            //PIEdragElement(textMesh11);
            // PIEsetDrag(textMesh11,myMainDrag);
            // PIEsetDragEnd(textMesh11,myTwoEnd);
        }
        if(rand1!=12 && rand2 !=12 && rand3 != 12)
        {

            geometry=new THREE.BoxGeometry(10,10,2);
             number[1]=createMesh(geometry,"Twelve.png");
            number[1].position.set(-13,16,0);
            PIEaddElement(number[1]);
            // var textGeom = new THREE.TextGeometry("12", 
            // {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            // });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh12 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh12.position.set(-16,14,0);
            // PIEaddElement(textMesh12);
            //PIEdragElement(textMesh12);
            // PIEsetDrag(textMesh11,myMainDrag);
            // PIEsetDragEnd(textMesh11,myTwoEnd);
        }
        if(rand1!=13 && rand2 !=13 && rand3 != 13)
        {

           geometry=new THREE.BoxGeometry(10,10,2);
             number[2]=createMesh(geometry,"Thirteen.png");
            number[2].position.set(2,16,0);
            PIEaddElement(number[2]);

          // var textGeom = new THREE.TextGeometry("13", 
          //   {
          //   size: 5, height: 3, curveSegments: 3,
          //   font: font, weight: "bold", style: "normal",
          //   bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
          //   material: 0, extrudeMaterial: 0
          //   });  
          //   textMaterial = new THREE.MeshFaceMaterial(materialArray);
          //   textMesh13 = new THREE.Mesh(textGeom, textMaterial );
          //   textMesh13.position.set(-2,14,0);
        
          //   PIEaddElement(textMesh13);  
            //PIEdragElement(textMesh13);
            // PIEsetDrag(textMesh11,myMainDrag);
            // PIEsetDragEnd(textMesh11,myTwoEnd);
        }
        if(rand1 !=14 && rand2 !=14 && rand3 !=14)
        {
          geometry=new THREE.BoxGeometry(10,10,2);
             number[3]=createMesh(geometry,"Fourteen.png");
            number[3].position.set(17,16,0);
            PIEaddElement(number[3]);
          // var textGeom = new THREE.TextGeometry("14", 
          //   {
          //   size: 5, height: 3, curveSegments: 3,
          //   font: font, weight: "bold", style: "normal",
          //   bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
          //   material: 0, extrudeMaterial: 0
          //   });  
          //   textMaterial = new THREE.MeshFaceMaterial(materialArray);
          //   textMesh14 = new THREE.Mesh(textGeom, textMaterial );
          //   textMesh14.position.set(13,14,0);
        
          //   PIEaddElement(textMesh14);  
        }
        if(rand1!=15 && rand2 !=15 && rand3 != 15)
        {

            geometry=new THREE.BoxGeometry(10,10,2);
             number[4]=createMesh(geometry,"Fifteen.png");
            number[4].position.set(32,16,0);
            PIEaddElement(number[4]);
            // var textGeom = new THREE.TextGeometry("15", 
            //  {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            //  });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh15 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh15.position.set(28,14,0);
        
            // PIEaddElement(textMesh15);
        }
        if(rand1!=16 && rand2 !=16 && rand3 != 16)
        {

            geometry=new THREE.BoxGeometry(10,10,2);
             number[5]=createMesh(geometry,"Sixteen.png");
            number[5].position.set(-28,1,0);
            PIEaddElement(number[5]);
           // var textGeom = new THREE.TextGeometry("16", 
           //  {
           //  size: 5, height: 3, curveSegments: 3,
           //  font: font, weight: "bold", style: "normal",
           //  bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
           //  material: 0, extrudeMaterial: 0
           //  });  
           //  textMaterial = new THREE.MeshFaceMaterial(materialArray);
           //  textMesh16 = new THREE.Mesh(textGeom, textMaterial );
           //  textMesh16.position.set(-31,-1,0);
        
           //  PIEaddElement(textMesh16);
 
        }
        if(rand1!=17 && rand2 !=17 && rand3 != 17)
        {

          geometry=new THREE.BoxGeometry(10,10,2);
             number[6]=createMesh(geometry,"Seventeen.png");
            number[6].position.set(-13,1,0);
            PIEaddElement(number[6]);
           // var textGeom = new THREE.TextGeometry("17", 
           //  {
           //  size: 5, height: 3, curveSegments: 3,
           //  font: font, weight: "bold", style: "normal",
           //  bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
           //  material: 0, extrudeMaterial: 0
           //  });  
           //  textMaterial = new THREE.MeshFaceMaterial(materialArray);
           //  textMesh17 = new THREE.Mesh(textGeom, textMaterial );
           //  textMesh17.position.set(-16,1,0);
        
           //  PIEaddElement(textMesh17);
 
        }
        if(rand1!=18 && rand2 !=18 && rand3 != 18)
        {

          geometry=new THREE.BoxGeometry(10,10,2);
             number[7]=createMesh(geometry,"Eighteen.png");
            number[7].position.set(2,1,0);
            PIEaddElement(number[7]);
            // var textGeom = new THREE.TextGeometry("18", 
            //  {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            //  });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh18 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh18.position.set(-1,-1,0);
        
            // PIEaddElement(textMesh18);

        }
        if(rand1!=19 && rand2 !=19 && rand3 != 19)
        {
            // var textGeom = new THREE.TextGeometry("19", 
            // {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            // });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh19 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh19.position.set(14,-1,0);
            geometry=new THREE.BoxGeometry(10,10,2);
             number[8]=createMesh(geometry,"Nineteen.png");
            number[8].position.set(17,1,0);
            PIEaddElement(number[8]);
            //PIEaddElement(textMesh19); 
        }
        if(rand1!=20 && rand2 !=20 && rand3 != 20)
        {
          geometry=new THREE.BoxGeometry(10,10,2);
             number[9]=createMesh(geometry,"Twenty.png");
            number[9].position.set(32,1,0);
            PIEaddElement(number[9]);
          // var textGeom = new THREE.TextGeometry("20", 
          //   {
          //   size: 5, height: 3, curveSegments: 3,
          //   font: font, weight: "bold", style: "normal",
          //   bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
          //   material: 0, extrudeMaterial: 0
          //   });  
          //   textMaterial = new THREE.MeshFaceMaterial(materialArray);
          //   textMesh20 = new THREE.Mesh(textGeom, textMaterial );
          //   textMesh20.position.set(29,-1,0);
        
          //   PIEaddElement(textMesh20);   
        }
        // var textGeom = new THREE.TextGeometry(rand1, 
        // {
        //     size: 7, height: 5, curveSegments: 3,
        //     font: font, weight: "bold", style: "normal",
        //     bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
        //     material: 0, extrudeMaterial: 0
        // });  
        //  textMaterial = new THREE.MeshFaceMaterial(materialArray);
        //  textMeshran1 = new THREE.Mesh(textGeom, textMaterial );
        // textMeshran1.position.set(-10,-30,0);
         
         k1=rand1%10;
         k2=rand2%10;
         k3=rand3%10;

         geometry=new THREE.BoxGeometry(10,10,2);
         textMeshran1=createMesh(geometry,array[k1]+".png");
         textMeshran1.position.set(-25,-29,0);
         PIEaddElement(textMeshran1);

        
        //PIEaddElement(textMeshran1);
        PIEdragElement(textMeshran1);
        PIErender();
        PIEsetDrag(textMeshran1,myMainDragran1);

        // var textGeom = new THREE.TextGeometry(rand2, 
        // {
        //     size:7,height: 5, curveSegments: 3,
        //     font: font, weight: "bold", style: "normal",
        //     bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
        //     material: 0, extrudeMaterial: 0
        // });  
        // textMaterial = new THREE.MeshFaceMaterial(materialArray);
        // textMeshran2 = new THREE.Mesh(textGeom, textMaterial );
        // textMeshran2.position.set(0,-30,0);

        geometry=new THREE.BoxGeometry(10,10,2);
        textMeshran2=createMesh(geometry,array[k2]+".png");
        textMeshran2.position.set(0,-29,0);
         PIEaddElement(textMeshran2);
        
        //PIEaddElement(textMeshran2);
        PIEdragElement(textMeshran2);
        PIErender();
        PIEsetDrag(textMeshran2,myMainDragran2);
        // PIEsetDragEnd(textMesh11,myTwoEnd);

        // var textGeom = new THREE.TextGeometry(rand3, 
        // {
        //     size: 7, height: 5, curveSegments: 3,
        //     font: font, weight: "bold", style: "normal",
        //     bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
        //     material: 0, extrudeMaterial: 0
        // });  
        // textMaterial = new THREE.MeshFaceMaterial(materialArray);
        // textMeshran3 = new THREE.Mesh(textGeom, textMaterial );
        // textMeshran3.position.set(10,-30,0);
         geometry=new THREE.BoxGeometry(10,10,2);
        textMeshran3=createMesh(geometry,array[k3]+".png");
        textMeshran3.position.set(25,-29,0);
         PIEaddElement(textMeshran3);
        
       // PIEaddElement(textMeshran3);
        PIEdragElement(textMeshran3);
        PIErender();
        PIEsetDrag(textMeshran3,myMainDragran3);
        // PIEsetDragEnd(textMesh11,myTwoEnd);
        
      });
    }

    if(numofmissing==4)
    {
      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
          var textGeom = new THREE.TextGeometry("Missing Numbers", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[10] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[10].position.set(-18,25,0);
        
        PIEaddElement(textMesh[10]);


        if(rand1!=11 && rand2 !=11 && rand3 != 11&&rand4!=11)
        {
             geometry=new THREE.BoxGeometry(10,10,2);
             number[0]=createMesh(geometry,"Eleven.png");
            number[0].position.set(-28,16,0);
            PIEaddElement(number[0]);
           // PIEdragElement(number[0]);


            // var textGeom = new THREE.TextGeometry("11", 
            // {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            // });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh11 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh11.position.set(-31,14,0);
            // PIEaddElement(textMesh11);
            //PIEdragElement(textMesh11);
            // PIEsetDrag(textMesh11,myMainDrag);
            // PIEsetDragEnd(textMesh11,myTwoEnd);
        }
        if(rand1!=12 && rand2 !=12 && rand3 != 12&&rand4!=12)
        {

            geometry=new THREE.BoxGeometry(10,10,2);
             number[1]=createMesh(geometry,"Twelve.png");
            number[1].position.set(-13,16,0);
            PIEaddElement(number[1]);
            // var textGeom = new THREE.TextGeometry("12", 
            // {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            // });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh12 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh12.position.set(-16,14,0);
            // PIEaddElement(textMesh12);
            //PIEdragElement(textMesh12);
            // PIEsetDrag(textMesh11,myMainDrag);
            // PIEsetDragEnd(textMesh11,myTwoEnd);
        }
        if(rand1!=13 && rand2 !=13 && rand3 != 13&&rand4!=13)
        {

           geometry=new THREE.BoxGeometry(10,10,2);
             number[2]=createMesh(geometry,"Thirteen.png");
            number[2].position.set(2,16,0);
            PIEaddElement(number[2]);

          // var textGeom = new THREE.TextGeometry("13", 
          //   {
          //   size: 5, height: 3, curveSegments: 3,
          //   font: font, weight: "bold", style: "normal",
          //   bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
          //   material: 0, extrudeMaterial: 0
          //   });  
          //   textMaterial = new THREE.MeshFaceMaterial(materialArray);
          //   textMesh13 = new THREE.Mesh(textGeom, textMaterial );
          //   textMesh13.position.set(-2,14,0);
        
          //   PIEaddElement(textMesh13);  
            //PIEdragElement(textMesh13);
            // PIEsetDrag(textMesh11,myMainDrag);
            // PIEsetDragEnd(textMesh11,myTwoEnd);
        }
        if(rand1 !=14 && rand2 !=14 && rand3 !=14&&rand4!=14)
        {
          geometry=new THREE.BoxGeometry(10,10,2);
             number[3]=createMesh(geometry,"Fourteen.png");
            number[3].position.set(17,16,0);
            PIEaddElement(number[3]);
          // var textGeom = new THREE.TextGeometry("14", 
          //   {
          //   size: 5, height: 3, curveSegments: 3,
          //   font: font, weight: "bold", style: "normal",
          //   bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
          //   material: 0, extrudeMaterial: 0
          //   });  
          //   textMaterial = new THREE.MeshFaceMaterial(materialArray);
          //   textMesh14 = new THREE.Mesh(textGeom, textMaterial );
          //   textMesh14.position.set(13,14,0);
        
          //   PIEaddElement(textMesh14);  
        }
        if(rand1!=15 && rand2 !=15 && rand3 != 15&&rand4!=15)
        {

            geometry=new THREE.BoxGeometry(10,10,2);
             number[4]=createMesh(geometry,"Fifteen.png");
            number[4].position.set(32,16,0);
            PIEaddElement(number[4]);
            // var textGeom = new THREE.TextGeometry("15", 
            //  {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            //  });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh15 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh15.position.set(28,14,0);
        
            // PIEaddElement(textMesh15);
        }
        if(rand1!=16 && rand2 !=16 && rand3 != 16&&rand4!=16)
        {

            geometry=new THREE.BoxGeometry(10,10,2);
             number[5]=createMesh(geometry,"Sixteen.png");
            number[5].position.set(-28,1,0);
            PIEaddElement(number[5]);
           // var textGeom = new THREE.TextGeometry("16", 
           //  {
           //  size: 5, height: 3, curveSegments: 3,
           //  font: font, weight: "bold", style: "normal",
           //  bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
           //  material: 0, extrudeMaterial: 0
           //  });  
           //  textMaterial = new THREE.MeshFaceMaterial(materialArray);
           //  textMesh16 = new THREE.Mesh(textGeom, textMaterial );
           //  textMesh16.position.set(-31,-1,0);
        
           //  PIEaddElement(textMesh16);
 
        }
        if(rand1!=17 && rand2 !=17 && rand3 != 17&&rand4!=17)
        {

          geometry=new THREE.BoxGeometry(10,10,2);
             number[6]=createMesh(geometry,"Seventeen.png");
            number[6].position.set(-13,1,0);
            PIEaddElement(number[6]);
           // var textGeom = new THREE.TextGeometry("17", 
           //  {
           //  size: 5, height: 3, curveSegments: 3,
           //  font: font, weight: "bold", style: "normal",
           //  bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
           //  material: 0, extrudeMaterial: 0
           //  });  
           //  textMaterial = new THREE.MeshFaceMaterial(materialArray);
           //  textMesh17 = new THREE.Mesh(textGeom, textMaterial );
           //  textMesh17.position.set(-16,1,0);
        
           //  PIEaddElement(textMesh17);
 
        }
        if(rand1!=18 && rand2 !=18 && rand3 != 18&&rand4!=18)
        {

          geometry=new THREE.BoxGeometry(10,10,2);
             number[7]=createMesh(geometry,"Eighteen.png");
            number[7].position.set(2,1,0);
            PIEaddElement(number[7]);
            // var textGeom = new THREE.TextGeometry("18", 
            //  {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            //  });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh18 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh18.position.set(-1,-1,0);
        
            // PIEaddElement(textMesh18);

        }
        if(rand1!=19 && rand2 !=19 && rand3 != 19&&rand4!=19)
        {
            // var textGeom = new THREE.TextGeometry("19", 
            // {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            // });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh19 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh19.position.set(14,-1,0);
            geometry=new THREE.BoxGeometry(10,10,2);
             number[8]=createMesh(geometry,"Nineteen.png");
            number[8].position.set(17,1,0);
            PIEaddElement(number[8]);
            //PIEaddElement(textMesh19); 
        }
        if(rand1!=20 && rand2 !=20 && rand3 != 20&&rand4!=20)
        {
          geometry=new THREE.BoxGeometry(10,10,2);
             number[9]=createMesh(geometry,"Twenty.png");
            number[9].position.set(32,1,0);
            PIEaddElement(number[9]);
          // var textGeom = new THREE.TextGeometry("20", 
          //   {
          //   size: 5, height: 3, curveSegments: 3,
          //   font: font, weight: "bold", style: "normal",
          //   bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
          //   material: 0, extrudeMaterial: 0
          //   });  
          //   textMaterial = new THREE.MeshFaceMaterial(materialArray);
          //   textMesh20 = new THREE.Mesh(textGeom, textMaterial );
          //   textMesh20.position.set(29,-1,0);
        
          //   PIEaddElement(textMesh20);   
        }
        // var textGeom = new THREE.TextGeometry(rand1, 
        // {
        //     size: 7, height: 5, curveSegments: 3,
        //     font: font, weight: "bold", style: "normal",
        //     bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
        //     material: 0, extrudeMaterial: 0
        // });  
        //  textMaterial = new THREE.MeshFaceMaterial(materialArray);
        //  textMeshran1 = new THREE.Mesh(textGeom, textMaterial );
        // textMeshran1.position.set(-10,-30,0);
         
         k1=rand1%10;
         k2=rand2%10;
         k3=rand3%10;
         k4=rand4%10;

         geometry=new THREE.BoxGeometry(10,10,2);
         textMeshran1=createMesh(geometry,array[k1]+".png");
         textMeshran1.position.set(-30,-29,0);
         PIEaddElement(textMeshran1);

        
        //PIEaddElement(textMeshran1);
        PIEdragElement(textMeshran1);
        PIErender();
        PIEsetDrag(textMeshran1,myMainDragran1);

        // var textGeom = new THREE.TextGeometry(rand2, 
        // {
        //     size:7,height: 5, curveSegments: 3,
        //     font: font, weight: "bold", style: "normal",
        //     bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
        //     material: 0, extrudeMaterial: 0
        // });  
        // textMaterial = new THREE.MeshFaceMaterial(materialArray);
        // textMeshran2 = new THREE.Mesh(textGeom, textMaterial );
        // textMeshran2.position.set(0,-30,0);

        geometry=new THREE.BoxGeometry(10,10,2);
        textMeshran2=createMesh(geometry,array[k2]+".png");
        textMeshran2.position.set(-10,-29,0);
         PIEaddElement(textMeshran2);
        
        //PIEaddElement(textMeshran2);
        PIEdragElement(textMeshran2);
        PIErender();
        PIEsetDrag(textMeshran2,myMainDragran2);
        // PIEsetDragEnd(textMesh11,myTwoEnd);

        // var textGeom = new THREE.TextGeometry(rand3, 
        // {
        //     size: 7, height: 5, curveSegments: 3,
        //     font: font, weight: "bold", style: "normal",
        //     bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
        //     material: 0, extrudeMaterial: 0
        // });  
        // textMaterial = new THREE.MeshFaceMaterial(materialArray);
        // textMeshran3 = new THREE.Mesh(textGeom, textMaterial );
        // textMeshran3.position.set(10,-30,0);
         geometry=new THREE.BoxGeometry(10,10,2);
        textMeshran3=createMesh(geometry,array[k3]+".png");
        textMeshran3.position.set(10,-29,0);
         PIEaddElement(textMeshran3);
        
       // PIEaddElement(textMeshran3);
        PIEdragElement(textMeshran3);
        PIErender();
        PIEsetDrag(textMeshran3,myMainDragran3);

         geometry=new THREE.BoxGeometry(10,10,2);
        textMeshran4=createMesh(geometry,array[k4]+".png");
        textMeshran4.position.set(30,-29,0);
         PIEaddElement(textMeshran4);
        
       // PIEaddElement(textMeshran3);
        PIEdragElement(textMeshran4);
        PIErender();
        PIEsetDrag(textMeshran4,myMainDragran4);


        // PIEsetDragEnd(textMesh11,myTwoEnd);
        
      });
    }if(numofmissing==5)
    {
      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
          var textGeom = new THREE.TextGeometry("Missing Numbers", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[10] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[10].position.set(-18,25,0);
        
        PIEaddElement(textMesh[10]);


        if(rand1!=11 && rand2 !=11 && rand3 != 11&&rand4!=11&&rand5!=11)
        {
             geometry=new THREE.BoxGeometry(10,10,2);
             number[0]=createMesh(geometry,"Eleven.png");
            number[0].position.set(-28,16,0);
            PIEaddElement(number[0]);
           // PIEdragElement(number[0]);


            // var textGeom = new THREE.TextGeometry("11", 
            // {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            // });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh11 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh11.position.set(-31,14,0);
            // PIEaddElement(textMesh11);
            //PIEdragElement(textMesh11);
            // PIEsetDrag(textMesh11,myMainDrag);
            // PIEsetDragEnd(textMesh11,myTwoEnd);
        }
        if(rand1!=12 && rand2 !=12 && rand3 != 12&&rand4!=12&&rand5!=12)
        {

            geometry=new THREE.BoxGeometry(10,10,2);
             number[1]=createMesh(geometry,"Twelve.png");
            number[1].position.set(-13,16,0);
            PIEaddElement(number[1]);
            // var textGeom = new THREE.TextGeometry("12", 
            // {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            // });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh12 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh12.position.set(-16,14,0);
            // PIEaddElement(textMesh12);
            //PIEdragElement(textMesh12);
            // PIEsetDrag(textMesh11,myMainDrag);
            // PIEsetDragEnd(textMesh11,myTwoEnd);
        }
        if(rand1!=13 && rand2 !=13 && rand3 != 13&&rand4!=13&&rand5!=13)
        {

           geometry=new THREE.BoxGeometry(10,10,2);
             number[2]=createMesh(geometry,"Thirteen.png");
            number[2].position.set(2,16,0);
            PIEaddElement(number[2]);

          // var textGeom = new THREE.TextGeometry("13", 
          //   {
          //   size: 5, height: 3, curveSegments: 3,
          //   font: font, weight: "bold", style: "normal",
          //   bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
          //   material: 0, extrudeMaterial: 0
          //   });  
          //   textMaterial = new THREE.MeshFaceMaterial(materialArray);
          //   textMesh13 = new THREE.Mesh(textGeom, textMaterial );
          //   textMesh13.position.set(-2,14,0);
        
          //   PIEaddElement(textMesh13);  
            //PIEdragElement(textMesh13);
            // PIEsetDrag(textMesh11,myMainDrag);
            // PIEsetDragEnd(textMesh11,myTwoEnd);
        }
        if(rand1 !=14 && rand2 !=14 && rand3 !=14&&rand4!=14&&rand5!=14)
        {
          geometry=new THREE.BoxGeometry(10,10,2);
             number[3]=createMesh(geometry,"Fourteen.png");
            number[3].position.set(17,16,0);
            PIEaddElement(number[3]);
          // var textGeom = new THREE.TextGeometry("14", 
          //   {
          //   size: 5, height: 3, curveSegments: 3,
          //   font: font, weight: "bold", style: "normal",
          //   bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
          //   material: 0, extrudeMaterial: 0
          //   });  
          //   textMaterial = new THREE.MeshFaceMaterial(materialArray);
          //   textMesh14 = new THREE.Mesh(textGeom, textMaterial );
          //   textMesh14.position.set(13,14,0);
        
          //   PIEaddElement(textMesh14);  
        }
        if(rand1!=15 && rand2 !=15 && rand3 != 15&&rand4!=15&&rand5!=15)
        {

            geometry=new THREE.BoxGeometry(10,10,2);
             number[4]=createMesh(geometry,"Fifteen.png");
            number[4].position.set(32,16,0);
            PIEaddElement(number[4]);
            // var textGeom = new THREE.TextGeometry("15", 
            //  {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            //  });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh15 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh15.position.set(28,14,0);
        
            // PIEaddElement(textMesh15);
        }
        if(rand1!=16 && rand2 !=16 && rand3 != 16&&rand4!=16&&rand5!=16)
        {

            geometry=new THREE.BoxGeometry(10,10,2);
             number[5]=createMesh(geometry,"Sixteen.png");
            number[5].position.set(-28,1,0);
            PIEaddElement(number[5]);
           // var textGeom = new THREE.TextGeometry("16", 
           //  {
           //  size: 5, height: 3, curveSegments: 3,
           //  font: font, weight: "bold", style: "normal",
           //  bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
           //  material: 0, extrudeMaterial: 0
           //  });  
           //  textMaterial = new THREE.MeshFaceMaterial(materialArray);
           //  textMesh16 = new THREE.Mesh(textGeom, textMaterial );
           //  textMesh16.position.set(-31,-1,0);
        
           //  PIEaddElement(textMesh16);
 
        }
        if(rand1!=17 && rand2 !=17 && rand3 != 17&&rand4!=17&&rand5!=17)
        {

          geometry=new THREE.BoxGeometry(10,10,2);
             number[6]=createMesh(geometry,"Seventeen.png");
            number[6].position.set(-13,1,0);
            PIEaddElement(number[6]);
           // var textGeom = new THREE.TextGeometry("17", 
           //  {
           //  size: 5, height: 3, curveSegments: 3,
           //  font: font, weight: "bold", style: "normal",
           //  bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
           //  material: 0, extrudeMaterial: 0
           //  });  
           //  textMaterial = new THREE.MeshFaceMaterial(materialArray);
           //  textMesh17 = new THREE.Mesh(textGeom, textMaterial );
           //  textMesh17.position.set(-16,1,0);
        
           //  PIEaddElement(textMesh17);
 
        }
        if(rand1!=18 && rand2 !=18 && rand3 != 18&&rand4!=18&&rand5!=18)
        {

          geometry=new THREE.BoxGeometry(10,10,2);
             number[7]=createMesh(geometry,"Eighteen.png");
            number[7].position.set(2,1,0);
            PIEaddElement(number[7]);
            // var textGeom = new THREE.TextGeometry("18", 
            //  {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            //  });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh18 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh18.position.set(-1,-1,0);
        
            // PIEaddElement(textMesh18);

        }
        if(rand1!=19 && rand2 !=19 && rand3 != 19&&rand4!=19&&rand5!=19)
        {
            // var textGeom = new THREE.TextGeometry("19", 
            // {
            // size: 5, height: 3, curveSegments: 3,
            // font: font, weight: "bold", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
            // });  
            // textMaterial = new THREE.MeshFaceMaterial(materialArray);
            // textMesh19 = new THREE.Mesh(textGeom, textMaterial );
            // textMesh19.position.set(14,-1,0);
            geometry=new THREE.BoxGeometry(10,10,2);
             number[8]=createMesh(geometry,"Nineteen.png");
            number[8].position.set(17,1,0);
            PIEaddElement(number[8]);
            //PIEaddElement(textMesh19); 
        }
        if(rand1!=20 && rand2 !=20 && rand3 != 20&&rand4!=20&&rand5!=20)
        {
          geometry=new THREE.BoxGeometry(10,10,2);
             number[9]=createMesh(geometry,"Twenty.png");
            number[9].position.set(32,1,0);
            PIEaddElement(number[9]);
          // var textGeom = new THREE.TextGeometry("20", 
          //   {
          //   size: 5, height: 3, curveSegments: 3,
          //   font: font, weight: "bold", style: "normal",
          //   bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
          //   material: 0, extrudeMaterial: 0
          //   });  
          //   textMaterial = new THREE.MeshFaceMaterial(materialArray);
          //   textMesh20 = new THREE.Mesh(textGeom, textMaterial );
          //   textMesh20.position.set(29,-1,0);
        
          //   PIEaddElement(textMesh20);   
        }
        // var textGeom = new THREE.TextGeometry(rand1, 
        // {
        //     size: 7, height: 5, curveSegments: 3,
        //     font: font, weight: "bold", style: "normal",
        //     bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
        //     material: 0, extrudeMaterial: 0
        // });  
        //  textMaterial = new THREE.MeshFaceMaterial(materialArray);
        //  textMeshran1 = new THREE.Mesh(textGeom, textMaterial );
        // textMeshran1.position.set(-10,-30,0);
         
         k1=rand1%10;
         k2=rand2%10;
         k3=rand3%10;
         k4=rand4%10;
         k5=rand5%10;

         geometry=new THREE.BoxGeometry(10,10,2);
         textMeshran1=createMesh(geometry,array[k1]+".png");
         textMeshran1.position.set(-30,-29,0);
         PIEaddElement(textMeshran1);

        
        //PIEaddElement(textMeshran1);
        PIEdragElement(textMeshran1);
        PIErender();
        PIEsetDrag(textMeshran1,myMainDragran1);

        // var textGeom = new THREE.TextGeometry(rand2, 
        // {
        //     size:7,height: 5, curveSegments: 3,
        //     font: font, weight: "bold", style: "normal",
        //     bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
        //     material: 0, extrudeMaterial: 0
        // });  
        // textMaterial = new THREE.MeshFaceMaterial(materialArray);
        // textMeshran2 = new THREE.Mesh(textGeom, textMaterial );
        // textMeshran2.position.set(0,-30,0);

        geometry=new THREE.BoxGeometry(10,10,2);
        textMeshran2=createMesh(geometry,array[k2]+".png");
        textMeshran2.position.set(-15,-29,0);
         PIEaddElement(textMeshran2);
        
        //PIEaddElement(textMeshran2);
        PIEdragElement(textMeshran2);
        PIErender();
        PIEsetDrag(textMeshran2,myMainDragran2);
        // PIEsetDragEnd(textMesh11,myTwoEnd);

        // var textGeom = new THREE.TextGeometry(rand3, 
        // {
        //     size: 7, height: 5, curveSegments: 3,
        //     font: font, weight: "bold", style: "normal",
        //     bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
        //     material: 0, extrudeMaterial: 0
        // });  
        // textMaterial = new THREE.MeshFaceMaterial(materialArray);
        // textMeshran3 = new THREE.Mesh(textGeom, textMaterial );
        // textMeshran3.position.set(10,-30,0);
         geometry=new THREE.BoxGeometry(10,10,2);
        textMeshran3=createMesh(geometry,array[k3]+".png");
        textMeshran3.position.set(3,-29,0);
         PIEaddElement(textMeshran3);
        
       // PIEaddElement(textMeshran3);
        PIEdragElement(textMeshran3);
        PIErender();
        PIEsetDrag(textMeshran3,myMainDragran3);

         geometry=new THREE.BoxGeometry(10,10,2);
        textMeshran4=createMesh(geometry,array[k4]+".png");
        textMeshran4.position.set(20,-29,0);
         PIEaddElement(textMeshran4);
        
       // PIEaddElement(textMeshran3);
        PIEdragElement(textMeshran4);
        PIErender();
        PIEsetDrag(textMeshran4,myMainDragran4);

         geometry=new THREE.BoxGeometry(10,10,2);
        textMeshran5=createMesh(geometry,array[k5]+".png");
        textMeshran5.position.set(35,-29,0);
         PIEaddElement(textMeshran5);
        
       // PIEaddElement(textMeshran3);
        PIEdragElement(textMeshran5);
        PIErender();
        PIEsetDrag(textMeshran5,myMainDragran5);

        // PIEsetDragEnd(textMesh11,myTwoEnd);
        
      });
    }

    
    
}


    // var temp1,temp2,temp3;
    // temp1=rand1;
//     // temp2=rand2;
//     // temp3=rand3;
    
//     // if(temp1 <= 15)
//     // {
//     //     var noofsteps = rand1- 10;
//     //     whitebox1.position.set(-28+15*(noofsteps-1),16,0);
//     //     PIEaddElement(whitebox1);
//     //     temp1=0;
//     // }
//     // if(temp1>15)
// }
function validloader(){
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x990000} );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x990000} );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
     var textGeom = new THREE.TextGeometry("Enter a valid Number", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        validtext= new THREE.Mesh(textGeom, textMaterial );
        validtext.position.set(-22,-10,2);
        //validtext.visible=false;
        PIEaddElement(validtext);
        //validtext.visible=false;
    });

}
function multichoice(){
  count++;
  if(count==1)
  {
    PIEaddInputText("Count","",handlecount);
    PIEaddDualCommand("Submit",handlesubmit);
  }
    PIEchangeInputText("Count","");
    
    resetExperiment();
    removeMissingText();
    removeLearn();
    removeBanner();
    removetextcontent();
    //PIEscene.remove(correct_text);
    removeMultichoice();
    PIErender();
    PIEscene.remove(validtext);
    current=1;
    
    visibility();
    //textcontent();

    //var materialFront = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialFront = new THREE.MeshBasicMaterial( { color: 0x990000} );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x990000} );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
          var textGeom = new THREE.TextGeometry("Number of bundles and sticks", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textMesh[10] = new THREE.Mesh(textGeom, textMaterial );
        textMesh[10].position.set(-30,25,0);
        
        PIEaddElement(textMesh[10]);

         var textGeom = new THREE.TextGeometry("Enter a valid Number", 
        {
            size: 4, height: 2, curveSegments: 3,
            font: font, weight: "bold", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
        textMaterial = new THREE.MeshFaceMaterial(materialArray);
        validtext= new THREE.Mesh(textGeom, textMaterial );
        validtext.position.set(-22,-10,2);
        PIEaddElement(validtext);
        validtext.visible=false;
        
     });
    min=11;
    max=19;
    random =Math.floor(Math.random() * (max - min + 1)) + min ;
    console.log(random);
    x=0;
    numofbundle = Math.floor(random / 5) ;
    //random=19;
    numofsticks=random%10;
    geometry = new THREE.BoxGeometry( 20, 20, 0 );
            //console.log("hello");
            bundle[0] = createMesh(geometry,"bundle10.png");
            bundle[0].position.set(-20+x,10,2);
            PIEaddElement(bundle[0]);
            x=x+10;
         
            geometry = new THREE.BoxGeometry( 9, 13, 0 );
            plus[0] = createMesh(geometry,"plus.png");
            plus[0].position.set(-15+x,10,2);
            PIEaddElement(plus[0]);
           // group.add(plus[i]);
            //x=x+20;
       x=-5;
        for(i=0 ;i< numofsticks;i++)
        {
            x=x+5;
            geometry = new THREE.BoxGeometry( 2,18, 0 );
            stick[i] = createMesh(geometry,"stick.png");
            stick[i].position.set(0+x,10,2);
            PIEaddElement(stick[i]);
            //group.add(stick[i]);
         }
    // if(random%5==0)
    // {
    //     for(i=0;i<numofbundle;i++)
    //     {
    //         geometry = new THREE.BoxGeometry( 7, 15, 0 );
    //         //console.log("hello");
    //         bundle[i] = createMesh(geometry,"bundle2.png");
    //         bundle[i].position.set(-30+x,10,2);
    //         PIEaddElement(bundle[i]);
    //         //group.add(bundle[i]);
    //         x=x+20;
    //     }
    //     x=0;
    //     numofplus = numofbundle -1;
    //     for(i=0;i<numofplus;i++)
    //     {
    //         geometry = new THREE.BoxGeometry( 9, 13, 0 );
    //         plus[i] = createMesh(geometry,"plus.png");
    //         plus[i].position.set(-20+x,10,2);
    //         PIEaddElement(plus[i]);
    //        // group.add(plus[i]);
    //         x=x+20;
    //     }


    // }

    // //posx = -30;
    // else
    // {
    //     for( i=0;i < numofbundle ; i++)
    //     {

    //         geometry = new THREE.BoxGeometry( 7, 15, 0 );
    //         bundle[i] = createMesh(geometry,"bundle2.png");
    //         bundle[i].position.set(-30+x,10,2);
    //         PIEaddElement(bundle[i]);
    //         //group.add(bundle[i]);

    //         geometry = new THREE.BoxGeometry( 9, 13, 0 );
    //         plus[i]= createMesh(geometry,"plus.png");
    //         plus[i].position.set(-20+x,10,2);
    //         PIEaddElement(plus[i]);
    //         //group.add(plus[i]);
    //     //PIEdragElement(stick);
    //         x=x+20;
    //     }
    //     x=x-40;
    //     numofsticks = random - 5 * numofbundle;
    //     for(i=0 ;i< numofsticks;i++)
    //     {
    //         x=x+5;
    //         geometry = new THREE.BoxGeometry( 1.5,16, 0 );
    //         stick[i] = createMesh(geometry,"stick.png");
    //         stick[i].position.set(x,10,2);
    //         PIEaddElement(stick[i]);
    //         //group.add(stick[i]);
    //      }

    //}
    //textfunction();
    
    
    
    PIEstartAnimation();
   
}



function initialiseOtherVariables()
{

}

function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       return mesh;
}


function loadExperimentElements()
{

    resetExperiment();
    PIEsetExperimentTitle("Counting 11_19");
    PIEsetDeveloperName("Likhith Rajappa");
   
    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();
    

    initialiseControls();
    visibility();

   
   flag[0]=0;
   flag[1]=0;
   flag[2]=0;
  
    resetExperiment();



   PIEstartAnimation();
   

   
}    

/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/

/**
 * This function resets the position of all experiment elements to their default values.
 * <p>
 * This is called during initial document load.
 * This is also be called by the system provided reset button.
 * <p>
 * Apart from the position, this should also reset all variables which can be controlled by the user.
 * This function will also clear any output variables/graphs
 */
function resetExperiment()
{   
    
    // background.visible = false;
    removeMultichoice();
    removeMissingText();
    removeBanner();
    removeLearn();
    PIEscene.remove(tick);
    PIEscene.remove(wrong);
    PIEscene.remove(correct_text);
    PIErender();
    
   // tick.visible=false;
   // wrong.visible=false;
    
    //initialiseScene();

    //initialiseControls();


  
}

/******************* End of Reset Experiment code ***********************/

/******************* Update (animation changes) code ***********************/
function updateExperimentElements(t, dt)
{   
  var plt = t/1000;

  if(plt > 1){
    PIEstopAnimation();
  }

 
}

/******************* Update (animation changes) code ***********************/
