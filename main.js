prediction_1="";


Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snapshot" src="'+data_uri+'">';
    });
}

console.log("ml5 version=",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xRQutRzdc/model.json",model_loaded);

function model_loaded(){
    console.log("Model Loaded!")
}



function check(){
    img = document.getElementById("snapshot");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        
        prediction_1=results[0].label;
       
       

        if(results[0].label == "amazing"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if(results[0].label == "best"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(results[0].label == "victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }



        
    }  
}
