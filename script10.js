//Code JS
// Create constants here
// =====================================
// recherche de la date du jour actuel
 
//let Son = $('#audioPlayer');
const Son=document.getElementById('audioPlayer');

  let RTL = "http://streaming.radio.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg";
  let RMC ="http://audio.bfmtv.com/rmcradio_128.mp3"
  let France_Info="http://icecast.radiofrance.fr/franceinfo-hifi.aac"
  let Europe_1 ="http://europe1.lmn.fm/europe1.aac";
  let M_Radio ="http://mfm.ice.infomaniak.ch/mfm-64.aac";
  let France_Inter="http://direct.franceinter.fr/live/franceinter-hifi.aac";
  let Radio_Classique="http://radioclassique.ice.infomaniak.ch/radioclassique-high.aac";
  let France_Musique ="http://icecast.radiofrance.fr/francemusique-hifi.aac"
  let FIP ="http://direct.fipradio.fr/live/fip-hifi.aac";
  let France_culture="http://direct.franceculture.fr/live/franceculture-hifi.aac";
  let Nostalgie="https://scdn.nrjaudio.fm/adwz2/fr/30601/mp3_128.mp3?origine=fluxradios";
  let Chérie_FM="https://scdn.nrjaudio.fm/adwz2/fr/30201/mp3_128.mp3?origine=fluxradios";
 let OTTO_Baroque=src="http://www.1.fm/tunestream/baroque/listen.pls";
 let OTTO_Baroque_type=type="mpeg";
 let ANCIEN_FM=src="https://mediaserv73.live-streams.nl:18058/stream";
 let CROONER=scr="http://croonerradio.ice.infomaniak.ch/croonerradio-hifi.aac";
//---------------------------- declaration boutons volume----------------
 
const Vol_son =document.getElementById("Vol_son");
 const RTL_r=document.getElementById('RTL');
const range = document.getElementById('slider');
const Btn_Pause=document.getElementById('Pause')
Vol_son.innerText=parseInt(Son.volume*10);
RTL_r.addEventListener('click', () => {
  
            let Station= RTL;
            initAudio(Station);;
            document.getElementById("Nom_Radio").innerText="Vous écoutez RTL";
            // On lit le track
            

});
const RMC_r=document.getElementById('Radio_RMC');
 
RMC_r.addEventListener('click', () => {
  
            let Station= RMC;
            initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez RMC";
            // On lit le track
             

});

const FINFO_r=document.getElementById('France_Info');
 
FINFO_r.addEventListener('click', () => {
  
            let Station= France_Info;
            initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez France Info";
            // On lit le track
             

});
const EUROPE1_r=document.getElementById('Europe_1');
 
EUROPE1_r.addEventListener('click', () => {
  
            let Station= Europe_1;
	    initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez Europe 1";
            // On lit le track
             

});

const MRADIO_r=document.getElementById('M_RADIO');
 
MRADIO_r.addEventListener('click', () => {
  
            let Station= M_Radio;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez M Radio";
            // On lit le track
            Son.play();

});
 
const FINTER_r=document.getElementById('France_Inter');
 
FINTER_r.addEventListener('click', () => {
  
            let Station= France_Inter;
             initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez France Inter";
             

});
const Rclassique_r=document.getElementById('Radio_Classique');
 
Rclassique_r.addEventListener('click', () => {
  
            let Station= Radio_Classique;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez Radio Classique1";
             
});
const FMusique_r=document.getElementById('France_Musique');
 
FMusique_r.addEventListener('click', () => {
  
            let Station= France_Musique;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez France Musique";
            

});
const FIP_r=document.getElementById('FIP');
 
FIP_r.addEventListener('click', () => {
  
            let Station= FIP;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez FIP";
             

});
const FCulture_r=document.getElementById('France_culture');
 
FCulture_r.addEventListener('click', () => {
  
            let Station= France_culture;
          initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez France Culture";
             
});
const Nostalgie_r=document.getElementById('Nostalgie');
 
Nostalgie_r.addEventListener('click', () => {
  
            let Station = Nostalgie;
            initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez Nostalgie";
             
});
const Cherie_r=document.getElementById('Chérie_FM');
Cherie_r.addEventListener('click', () => {
  
            let Station= Chérie_FM;
           initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez Chérie FM";
             
});
const OTTOBAROQUE_r=document.getElementById('OTTO');
OTTOBAROQUE_r.addEventListener('click', () => {
  
            let Station= OTTO_Baroque;
            initAudio(Station);
             
             document.getElementById("Nom_Radio").innerText="Vous écoutez OTTO";
             

});
const ANCIEN_FM_r=document.getElementById('ANCIEN_FM');
ANCIEN_FM_r.addEventListener('click', () => {
  
            let Station= ANCIEN_FM;
            initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez ANCIENT";
            

});
const CROONER_r=document.getElementById('CROONER');
CROONER_r.addEventListener('click', () => {
  
            let Station= CROONER;
           initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez CROONER";
             
});
// Gestion du volume
 range.addEventListener('change', () => {
        //elem.textContent = range.value;
        
        Son.volume=(range.value*.1)
        console.log("range.value=",range.value,"Son.volume",Son.volume)
        Vol_son.innerText=parseInt(10*Son.volume);
        //Son.volume=5;
    });
 
 
function initAudio (Station) {
   Son.src = Station;
     var playPromise = Son.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
      Son.load()
      Son.play(); 
      
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
      //Son.pause();
    });
  }
}
function play(MonPlayer, control) {

    if (Son.paused) {
        Son.play();
        control.textContent = '||';
       control.style.backgroundColor = "rgb(60,179,113)";
    } else {
        Son.pause();
        control.textContent = '>';
        control.style.backgroundColor = "rgb(255,19,113)";
    }

}


function resume(MonPlayer) {
    Son.currentTime = 0;

    Son.pause();
}
 
