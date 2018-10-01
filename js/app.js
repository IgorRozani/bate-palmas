var claps = [
                "./Claps/AlexanderClap.gif",
                "./Claps/CreapyClap.gif",
                "./Claps/DelcanClap.gif",
                "./Claps/dogClap.gif",
                "./Claps/HeidiClap.gif",
                "./Claps/kidClap.gif",
                "./Claps/PinguClap.gif",
                "./Claps/putinClap.gif",
                "./Claps/RihannaClap.gif",
                "./Claps/RyanClap.gif"
            ];

// Replacing $(document).ready()
function ready(fn) {
    if (document.readyState != 'loading') {
        onReady();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// Adicionando função no ready
ready(onReady);

function onReady() {
    document.getElementById("clap").src = claps[Math.floor(Math.random() * 9)];
    document.getElementById('start-clap-btn').addEventListener('click', () => {
            myAudio = new Audio('./Audio/applause.mp3'); 
            myAudio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            myAudio.play();
        });
}
