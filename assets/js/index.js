//Wall Image Handlers
const wallImageInput = document.querySelector("#wallImageInput");
var uploadedWallImage = "";

wallImageInput.addEventListener('change', function() {
    const wallImageReader = new FileReader();
    wallImageReader.addEventListener('load', function() {
        uploadedWallImage = wallImageReader.result;
        document.querySelector("#displayWallImage").style.backgroundImage = `url(${uploadedWallImage})`
    });

    wallImageReader.readAsDataURL(this.files[0]);

});





//Painting Image Handlers
const paintingImageInput = document.querySelector("#paintingImageInput");
var uploadedPaintingImage = "";

paintingImageInput.addEventListener('change', function() {
    const paintingImageReader = new FileReader();
    paintingImageReader.addEventListener('load', function() {
        uploadedPaintingImage = paintingImageReader.result;
        document.querySelector("#displayPaintingImage").style.backgroundImage = `url(${uploadedPaintingImage})`
    });

    paintingImageReader.readAsDataURL(this.files[0]);

});




//Making Draggable and Resizable

interact('.resize-drag')
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'

        // translate when resizing from top or left edges
        //x += event.deltaRect.left
        //y += event.deltaRect.top

        //target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        //target.setAttribute('data-x', x)
        //target.setAttribute('data-y', y)
        //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 100 },
        max: { width: 500, height: 400 }
      })
    ],

    inertia: true
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ]
  })


//
$(document).ready(function() {
    $(".resize-drag").draggable({
		containment: "parent"
	});
  });


  // $(document).ready(function() {

  //   $('#paintingImageInput').on('change', function() {
  //     return confirm('You must need to fine-tune your uploaded Painting by zooming in & zooming out first');
  //   });
  // });


 
 

  $(document).ready(function() {

    $('#paintingImageInput').on('change', function() {
          // alertify.confirm("You must need to fine-tune your uploaded Painting by zooming in & zooming out first. Otherwise, you may face trouble to move your Uploaded Painting",
          //   function(){
          //     alertify.success('Ok');
          //   },
          //   function(){
          //     alertify.error('Cancel');
          //   });

            alertify
              .alert("You must need to fine-tune your uploaded Painting by zooming in & zooming out first. Otherwise, you may face trouble moving your Uploaded Painting Horizontally/Vertically. Please find the Zooming Control below, Thank you.", function(){
                alertify.message('OK');
              });
    });
  });







  
//Download the Output

   document.getElementById("downloadImageButton").addEventListener("click", function() {
    html2canvas(document.getElementById("displayWallImage")).then(function (canvas) { var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
       // document.getElementById("previewImg").appendChild(canvas);
        anchorTag.download = "filename.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
      });
   });





  // function ScreenShot() {
  //   var content = document.getElementById("displayWallImage");
  //   html2canvas(content).then(
  //     function (canvas){
  //       document.getElementById("ScreenOutput").appendChild(canvas);
  //       return Canvas2Image.saveAsPNG(canvas);
  //     }
  //   )
  // }
  

   
// Zoom In & Zoom Out
    var p = document.querySelector('#displayPaintingImage'),
    pRange = document.querySelector('#zoomInOut');

     pRange.addEventListener('input', function () {
     p.style.width = this.value + 'pt';
     p.style.height= this.value + 'pt';
     });
     


// Moving Left the Painting Image
    var p = document.querySelector('#displayPaintingImage'),
    pRange = document.querySelector('#moveLeftRight');

     pRange.addEventListener('input', function () {
     p.style.left= this.value + 'pt';
     });


// Moving Top & Bottom the Painting Image
var p = document.querySelector('#displayPaintingImage'),
pRange = document.querySelector('#moveTopBottom');

 pRange.addEventListener('input', function () {
 p.style.top = this.value + 'pt';
 });
 
 
 
 
 
 //For PC controlls
 
 // Zoom In & Zoom Out
    var p = document.querySelector('#displayPaintingImage'),
    pRange = document.querySelector('.zoomInOut');

     pRange.addEventListener('input', function () {
     p.style.width = this.value + 'pt';
     p.style.height= this.value + 'pt';
     });
     


// Moving Left the Painting Image
    var p = document.querySelector('#displayPaintingImage'),
    pRange = document.querySelector('.moveLeftRight');

     pRange.addEventListener('input', function () {
     p.style.left= this.value + 'pt';
     });


// Moving Top & Bottom the Painting Image
var p = document.querySelector('#displayPaintingImage'),
pRange = document.querySelector('.moveTopBottom');

 pRange.addEventListener('input', function () {
 p.style.top = this.value + 'pt';
 });
 
 
 
 
 
 
 
 
 
 
 //Clearing Cache
 
 let randomNumber = Math.floor((Math.random() * 100000) + 1);
 console.log(randomNumber);