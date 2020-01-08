//Fonction IIFE
(function(){
   //Création d'un object vide dans lequel sera stoqué l'élément qui est entré d'être drag and dropé
   let storage = {};

   //fonction d'initialisation
   function init(){
      //récupération de la classe draggable
      let drag = document.querySelectorAll('.draggableBox');

      //Boucle qui contient deux events mousedown et mouseup
      for(let i=0; i<drag.length; i++){
         //function qui applique l'event sur l'élément qui est maintenu appuiyé
         drag[i].addEventListener('mousedown', function(e){
            
            storage.target = e.target;
            storage.offsetX = e.clientX - storage.target.offsetLeft;
            storage.offsetY = e.clientY - storage.target.offsetTop;
         });

         //function qui applique l'event mouseup sur l'élément drag
         drag[i].addEventListener('mouseup', function(){
            storage = {};
         });

      }

      //function qui déclanche l'event mousemove, appliqué sur le document
      document.addEventListener('mousemove', function(e){
         target = storage.target;
         

         if(target){
            target.style.top = e.clientY - storage.offsetY + 'px';
            target.style.left = e.clientX - storage.offsetX + 'px';
            console.log(target);
         }
      });

   }
   init();


})();