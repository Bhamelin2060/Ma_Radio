/Code JS
// Create constants here
// =====================================
// recherche de la date du jour actuel
 
//let Son = $('#audioPlayer');
const Son=document.getElementById('audioPlayer');

  let RTL = "http://streaming.radio.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg";
  let RMC =" http://audio.bfmtv.com/rmcradio_128.mp3";
  let France_Info="http://icecast.radiofrance.fr/franceinfo-hifi.aac";
  let Europe_1 ="http://europe1.lmn.fm/europe1.aac";
  let M_Radio ="http://mfm.ice.infomaniak.ch/mfm-64.aac";
  let France_Inter="http://direct.franceinter.fr/live/franceinter-hifi.aac";
  let Radio_Classique="http://radioclassique.ice.infomaniak.ch/radioclassique-high.aac";
  let France_Musique ="http://icecast.radiofrance.fr/francemusique-hifi.aac"
  let FIP ="http://direct.fipradio.fr/live/fip-hifi.aac";
  let France_culture="http://direct.franceculture.fr/live/franceculture-hifi.aac";
  let Nostalgie="http://streaming.nrjaudio.fm/oug7girb92oc?origine=fluxradios;origine=fluxradios";
  let Chérie_FM="http://streaming.nrjaudio.fm/ouuku85n3nje?origine=fluxradios";
 let BFM_r=" http://audio.bfmtv.com/bfmbusiness_128.mp3";
 let OTTO_Baroque="https://strmreg.1.fm/baroque_mobile_mp3";
 let ANCIEN_FM=src="https://mediaserv73.live-streams.nl:18058/stream";
 let CROONER=scr="http://croonerradio.ice.infomaniak.ch/croonerradio-hifi.aac";
 let Radio_Jazz="http://jazzradio.ice.infomaniak.ch/jazzradio-high.aac";
 let Sanef_107_7="http://sanef.ice.infomaniak.ch/sanef1077-idf.mp3";
 let Jazz_fip="http://direct.fipradio.fr/live/fipjazz-hifi.aac";


//---------------------------- declaration boutons volume----------------
 
const Vol_son =document.getElementById("Vol_son");

const range = document.getElementById('slider');
range.value=3;
Son.volume=0.3;
Vol_son.innerText=4;
const Btn_Pause=document.getElementById('Pause');
const Lecture_bt=document.getElementById('lecture');
const Icon_HP=document.getElementById('hautparleur');
Vol_son.innerText=parseInt(Son.volume*10);
const Image_Radio_Live=document.getElementById("ImgRadioEcoute")
const RTL_r=document.getElementById('RTL');
RTL_r.addEventListener('click', () => {
  
            let Station= RTL;
            initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images/RTL.png";
});
const RMC_r=document.getElementById('RMC');
RMC_r.addEventListener('click', () => {
  
            let Station=RMC;
            initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/RMC.png";
             

});

const FINFO_r=document.getElementById('France_Info');
 
FINFO_r.addEventListener('click', () => {
  
            let Station= France_Info;
            initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images/France_Info.png";
             

});
const EUROPE1_r=document.getElementById('Europe_1');
 
EUROPE1_r.addEventListener('click', () => {
  
            let Station= Europe_1;
	    initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images/Europe_1.jpg";
             

});

const MRADIO_r=document.getElementById('M_RADIO');
 
MRADIO_r.addEventListener('click', () => {
  
            let Station= M_Radio;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/MRadio.jpg";
             // Son.play();

});
 
const FINTER_r=document.getElementById('France_Inter');
 
FINTER_r.addEventListener('click', () => {
  
            let Station= France_Inter;
             initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/franceinter.png";

});
const Rclassique_r=document.getElementById('Radio_Classique');
 
Rclassique_r.addEventListener('click', () => {
  
            let Station= Radio_Classique;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/Radio_Classique.png";
});
const FMusique_r=document.getElementById('France_Musique');
 
FMusique_r.addEventListener('click', () => {
  
            let Station= France_Musique;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images/France musique.jpg";

});
const FIP_r=document.getElementById('FIP');
 
FIP_r.addEventListener('click', () => {
  
            let Station= FIP;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/fip.png";

});
const FIP_jazz_r=document.getElementById('Fip_jazz');
FIP_jazz_r.addEventListener('click', () => {
  
            let Station= Jazz_fip;
            initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/FIP_JAZZ.jpg";

});
const FCulture_r=document.getElementById('France_culture');
 
FCulture_r.addEventListener('click', () => {
  
            let Station= France_culture;
          initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/France culture.png";
});
const Nostalgie_r=document.getElementById('Nostalgie');
 
Nostalgie_r.addEventListener('click', () => {
  
            let Station = Nostalgie;
            initAudio(Station);
            document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/nostalgie.png";
});
const Cherie_r=document.getElementById('Chérie_FM');
Cherie_r.addEventListener('click', () => {
  
            let Station= Chérie_FM;
           initAudio(Station);
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images/cheriefm.png"; 
});
const OTTOBAROQUE_r=document.getElementById('OTTO');
OTTOBAROQUE_r.addEventListener('click', () => {
  
            let Station= OTTO_Baroque;
            initAudio(Station);
             
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/OTTO_ Baroque.png";

});
const ANCIEN_FM_r=document.getElementById('ANCIEN_FM');
ANCIEN_FM_r.addEventListener('click', () => {
  
            let Station= ANCIEN_FM;
            initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
            Image_Radio_Live.src="./images/ancientfm.png";

});
const CROONER_r=document.getElementById('CROONER');
CROONER_r.addEventListener('click', () => {
  
            let Station= CROONER;
           initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/LOGO-CROONER-RADIO.jpg";
});
const JazzRadio_r=document.getElementById('Jazz_Radio');
JazzRadio_r.addEventListener('click', () => {
  
            let Station= Radio_Jazz;
           initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/Jazz_radio.jpg";
});
const Sanef_r=document.getElementById('SANEF');
Sanef_r.addEventListener('click', () => {
  
            let Station= Sanef_107_7;
           initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoutez";
             Image_Radio_Live.src="./images/SANEF.jpg";
});

const BFM_rd=document.getElementById('BFM');
BFM_rd.addEventListener('click', () => {
  
            let Station= BFM_r;
           initAudio(Station);
           
             document.getElementById("Nom_Radio").innerText="Vous écoute";
             Image_Radio_Live.src="./images/BFM.png";
});
// Gestion du volume
 range.addEventListener('change', () => {
        //elem.textContent = range.value;
        
        Son.volume=(range.value*.1)
        console.log("range.value=",range.value,"Son.volume",Son.volume)
        Vol_son.innerText=parseInt(10*Son.volume);
        if (Son.volume==0){
        Icon_HP.className='fa-solid fa-volume-off';
        }
        if (Son.volume>0){
        Icon_HP.className='fa-solid fa-volume-high';
        }
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
      //  control.textContent = '||';
       
         Lecture_bt.className='fa-solid fa-pause'
       control.style.backgroundColor = "rgb(60,179,113)";
    } else {
        Son.pause();
        // control.textContent = '>';
         Lecture_bt.className='fa-solid fa-play'
        control.style.backgroundColor = "rgb(255,19,113)";
    }

}


function resume(MonPlayer) {
    Son.currentTime = 0;

    Son.pause();
}
// api cast 




