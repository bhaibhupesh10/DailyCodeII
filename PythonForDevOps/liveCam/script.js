const video = document.getElementById('video');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error("Error accessing the camera: ", err);
        });
} else {
    alert("Sorry, your browser does not support getUserMedia API");
}
