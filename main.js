
 

 function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nVrXEZvJw/model.json' , modelReady);
 }
 
 function modelReady(){
    classifier.classify(gotResults)
 }

 function gotResults (error, results) {
   if (error) {
       console.log(error);
   } 
   else {
       console.log(results);
       random_num_r = Math.floor(Math.random() * 255) + 1;
       random_num_g = Math.floor(Math.random() * 255) + 1;
       random_num_b = Math.floor(Math.random() * 255) + 1;

       document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
       document.getElementById("result_confidence").innerHTML = 'Accuracy -' + (results[0].confidence*100).toFixed(2)+ "%"
       document.getElementById("result_label").style.color = "rgb(" + random_num_r + "," + random_num_g + "," + random_num_b + ")";
       document.getElementById("result_confidence").style.color = "rgb(" + random_num_r + "," + random_num_g + "," + random_num_b + ")";

       img = document.getElementById("image1");

       if (results[0].label=="Barking") {
           img.src = "dogg.png";
       }
       else if (results[0].label == "Meowing") {
           img.src = "cattt.png";
       }
       else if (results[0].label == "Mooing") {
           img.src = "coww.png";
       }

       else if (results[0].label == "Roaring") {
         img.src = "tigerr.png";
     }

      else{
            img.src ="hearing.gif"
           }
           
       
   }
}