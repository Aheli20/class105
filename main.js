Webcam.set({
    height: 500,
    width: 500,
    image_format: "png",
    png_quality: 90
});


camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="output" src="' + data_uri + '"/>';
    });
}

console.log("ml5version:", ml5.version);

v1 = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OFOvFj0Nu/model.json', v3);
function v3() {
    console.log("model is loaded");
}

function identify() {
    image_cam = document.getElementById('output');
    v1.classify(image_cam, qwerty);
}

function qwerty(error, results) {
    if (errror) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}