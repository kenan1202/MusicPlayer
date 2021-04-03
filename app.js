//Start Button
const startBtn = document.getElementById("beginOne");
//Stop Button
const stopBtn = document.getElementById("stopOne");
//Next Button
const nextBtn = document.getElementById("nextOne");
//Previous Button
const prevBtn = document.getElementById("prevOne");

//Music1
let music1 = document.getElementById("music1");
//Music2
let music2 = document.getElementById("music2");
//Music3
let music3 = document.getElementById("music3");

//Photo1
let photo1 = document.getElementById("Photo1");
let photo2 = document.getElementById("Photo2");
let photo3 = document.getElementById("Photo3");

//Circle
let circleBtn = document.getElementById("circle");
let musicPart = document.getElementById("musicPart");


//Musics array
let musics = [music1,music2,music3];
//Photos array
let photos = [photo1, photo2, photo3];

let queue = 0;
musics[queue] = music1;
photos[queue] = photo1;
let checkSound = 0;

function manageSounds() {
    musicPart.addEventListener("click", function(e) {
        if(e.pageX >= 540 && e.pageX <= 840) {
            circleBtn.style.left = (300 - (840 - e.pageX)) + "px";
            musics[queue].volume = ((300 - (840 - e.pageX)) / 300).toFixed(2);
        }
        else if(e.pageX >= 526 && e.pageX <= 540) {
            circleBtn.style.left = "0px";
            musics[queue].volume = 0;
        }
  });
}
manageSounds();

function mainButtons() {
    startBtn.addEventListener("click", function() {
        musics[queue].play();
        startBtn.style.display = "none";
        stopBtn.style.display = "block";
    
        checkSound = 1;
    });
    
    
    stopBtn.addEventListener("click", function() {
        musics[queue].pause();
        startBtn.style.display = "block";
        stopBtn.style.display = "none";
    
        checkSound = 0;
    });
}
mainButtons();

function checkMusicSound() {
    if(checkSound) {
        musics[queue].play();
    }
    else {
        musics[queue].pause();
    }
}





nextBtn.addEventListener("click", function() {
    queue++;

    if(queue === musics.length) {
        let yeni1 = 0;
        queue = yeni1;
        photos[queue].style.display = "block";
        photos[photos.length - 1].style.display = "none";
        musics[musics.length - 1].pause();

        checkMusicSound();

        manageSounds();

        mainButtons();

    }
    else {
        photos[queue].style.display = "block";
        photos[queue - 1].style.display = "none";
        musics[queue - 1].pause();

        checkMusicSound();

        manageSounds();


        mainButtons();

    }
});


prevBtn.addEventListener("click", function() {
    queue--;

    if(queue === -1) {
        let yeni2 = 2;
        queue = yeni2;

        photos[queue].style.display = "block";
        photos[photos.length - 3].style.display = "none";
        musics[musics.length - 3].pause();

        checkMusicSound();

        manageSounds();


        mainButtons();
    }
    else {
        photos[queue].style.display = "block";
        photos[queue + 1].style.display = "none";
        musics[queue + 1].pause();

        checkMusicSound();

        manageSounds();

        mainButtons();
    }
});

