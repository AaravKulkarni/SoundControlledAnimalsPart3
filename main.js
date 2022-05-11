 Dog = 0;
 Cat = 0;
 Cow = 0;
 Lion = 0;function check(){
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/udLaM6SMt/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("animaltimes").innerHTML = "Dog - "+Dog+" Cat - "+Cat+" Lion - "+Lion+" Cow - "+Cow;
        document.getElementById("animalclassname").innerHTML = "I Can Hear - "+results[0].label;
        document.getElementById("animaltimes").style.color = "rgb("+random_number_r +","+ random_number_g +","+ random_number_b +")";
        document.getElementById("animalclassname").style.color = "rgb("+random_number_r +","+ random_number_g +","+ random_number_b +")";
        img = document.getElementById("allimg");
        if(results[0].label == "Barking"){
            img.src = "dog.png";
            Dog = 1;
            Cat = 0;
            Cow = 0;
            Lion = 0;
        }
        if(results[0].label == "Meowing"){
            img.src = "cat.png";
            Dog = 0;
            Cat = 1;
            Cow = 0;
            Lion = 0;
        }
        if(results[0].label == "Mooing"){
            img.src = "cow.png";
            Dog = 0;
            Cat = 0;
            Cow = 1;
            Lion = 0;
        }
        if(results[0].label == "Roaring"){
            img.src = "lion.png";
            Dog = 0;
            Cat = 0;
            Cow = 0;
            Lion = 1;
        }
        if(results[0].label == "Background Noise"){
            img.src = "ear.png";
            Dog = 0;
            Cat = 0;
            Cow = 0;
            Lion = 0;
        }
    }
}