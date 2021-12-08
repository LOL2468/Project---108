function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EuQpo0MVL/.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    }

    img = document.getElementById('dog');
    img1 = document.getElementById('cat');
    img2 = document.getElementById('ear')

    if (results[0].label == "Barking") {
        img.src = 'dog barking.jfif';
    } else 
    if (results[0].label == "Meowing") {
        img1.src = 'cat meowing.jfif';
    } else 
    if (results[0].label == "---") {
    } else{
        img.src = 'ear.png';
    }
}