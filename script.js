const text = document.getElementById("text");
const btn = document.getElementById("accessBtn");

let messages = [
    "Initializing system...",
    "Decrypting database...",
    "Scanning identity...",
    "Searching records...",
    "Identity match found..."
];

let i = 0;

let loading = setInterval(() => {

    text.innerHTML = messages[i];
    i++;

    if (i === messages.length) {

        clearInterval(loading);

        btn.style.display = "inline-block";
        text.innerHTML = "Subject Identified: AGENT P-20";

    }

}, 1500);



btn.onclick = function() {

    document.getElementById("loading").style.display = "none";
    btn.style.display = "none";

    document.getElementById("file")
    .classList.remove("hidden");

};



// FILE 001 → FILE 002

const nextBtn = document.getElementById("nextBtn");

if(nextBtn){

nextBtn.onclick = function(){

    document.getElementById("file").style.display = "none";

    document.getElementById("charges")
    .classList.remove("hidden");


    let charges = [
        "☑ Making people laugh without permission 😂",
        "☑ Being too caring ❤️",
        "☑ Causing unlimited irritation 😤",
        "☑ Stealing the title of favourite person ⭐"
    ];


    let box = document.getElementById("chargeText");

    let index = 0;


    let show = setInterval(()=>{

        box.innerHTML += charges[index] + "<br><br>";

        index++;


        if(index === charges.length){

            clearInterval(show);

            document.getElementById("verdict")
            .classList.remove("hidden");

            document.getElementById("reason")
            .classList.remove("hidden");


            let evidenceBtn =
            document.getElementById("openEvidence");

            if(evidenceBtn){
                evidenceBtn.classList.remove("hidden");
            }

        }

    },1200);


};

}
// FILE 002 → FILE 003

const openEvidence = document.getElementById("openEvidence");

if (openEvidence) {

    openEvidence.onclick = function () {

        // Hide File 002
        document.getElementById("charges").style.display = "none";

        // Show File 003
        document.getElementById("evidence").classList.remove("hidden");

        // Show first photo
        document.getElementById("photoBox").innerHTML =
        `<img src="images/pabo1.jpg" width="280">`;

        // Caption
        document.getElementById("caption").innerHTML =
        "Evidence #001: Caught being awesome.";

    };

}
const evidencePhotos = [
    "images/pabo1.jpg",
    "images/pabo2.jpg",
    "images/pabo3.jpg",
    "images/pabo4.jpg",
    "images/pabo5.jpg"
];

const evidenceCaptions = [
    "Evidence #001: Suspect spotted looking suspiciously handsome. 😎",
    "Evidence #002: Caught spreading smiles without permission. 😊",
    "Evidence #003: Positive vibes detected everywhere. ✨",
    "Evidence #004: Confirmed mastermind behind unforgettable memories. ❤️",
    "Evidence #005: Final proof that Agent P-20 is one of a kind. 👑"
];

let currentPhoto = 0;

const evidenceNext = document.getElementById("evidenceNext");

if (evidenceNext) {

    evidenceNext.onclick = function () {

        currentPhoto++;

        if (currentPhoto < evidencePhotos.length) {

            document.getElementById("photoBox").innerHTML =
            `<img src="${evidencePhotos[currentPhoto]}" width="280">`;

            document.getElementById("caption").innerHTML =
            evidenceCaptions[currentPhoto];

        } else {

            evidenceNext.innerHTML = "OPEN FINAL REPORT";

            document.getElementById("evidence").classList.add("hidden");
document.getElementById("finalReport").classList.remove("hidden");

        }

    };

}
const birthdayReveal = document.getElementById("birthdayReveal");

if (birthdayReveal) {

    birthdayReveal.onclick = function(){

    document.getElementById("finalReport").classList.add("hidden");
document.getElementById("birthdayFinal").classList.remove("hidden");

birthdayReveal.style.display = "none";

        startConfetti();

    };

}


function startConfetti(){

    for(let i=0; i<100; i++){

        let confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "25px";

        document.body.appendChild(confetti);


        let fall = confetti.animate(
        [
            {transform:"translateY(0)"},
            {transform:"translateY(100vh)"}
        ],
        {
            duration:3000,
            iterations:1
        });


        fall.onfinish = ()=> confetti.remove();

    }

}


// FILE 002 → FILE 003

