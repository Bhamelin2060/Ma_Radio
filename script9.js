//Code JS
// Create constants here
// =====================================
// recherche de la date du jour actuel
 
//let audioPlayer = $('#audioPlayer');
let audioPlayer=document.getElementById('audioPlayer');
  let RTL = "http://icecast.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg";
  let RMC ="http://chai5she.cdn.dvmr.fr/rmcinfo"
  let France_Info="http://icecast.radiofrance.fr/franceinfo-hifi.aac"
  let Europe_1 ="http://europe1.lmn.fm/europe1.aac";
  let M_Radio ="http://mfm.ice.infomaniak.ch/mfm-64.aac";
  let France_Inter="http://direct.franceinter.fr/live/franceinter-hifi.aac";
  let Radio_Classique="http://radioclassique.ice.infomaniak.ch/radioclassique-high.aac";
  let France_Musique ="http://icecast.radiofrance.fr/francemusique-hifi.aac"
  let FIP ="http://direct.fipradio.fr/live/fip-hifi.aac";
  let France_culture="http://direct.franceculture.fr/live/franceculture-hifi.aac"
  let Nostalgie="https://scdn.nrjaudio.fm/adwz2/fr/30601/mp3_128.mp3?origine=fluxradios"
  let Chérie_FM="https://scdn.nrjaudio.fm/adwz2/fr/30201/mp3_128.mp3?origine=fluxradios"

const RTL_r=document.getElementById('RTL');
 
RTL_r.addEventListener('click', () => {
  
            let trackUrl = RTL;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});
const RMC_r=document.getElementById('Radio_RMC');
 
RMC_r.addEventListener('click', () => {
  
            let trackUrl = RMC;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});

const FINFO_r=document.getElementById('France_Info');
 
FINFO_r.addEventListener('click', () => {
  
            let trackUrl = France_Info;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});
const EUROPE1_r=document.getElementById('Europe_1');
 
EUROPE1_r.addEventListener('click', () => {
  
            let trackUrl = Europe_1;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});

const MRADIO_r=document.getElementById('M_RADIO');
 
MRADIO_r.addEventListener('click', () => {
  
            let trackUrl = M_Radio;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});
 
const FINTER_r=document.getElementById('France_Inter');
 
FINTER_r.addEventListener('click', () => {
  
            let trackUrl = France_Inter;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});
const Rclassique_r=document.getElementById('Radio_Classique');
 
Rclassique_r.addEventListener('click', () => {
  
            let trackUrl = Radio_Classique;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});
const FMusique_r=document.getElementById('France_Musique');
 
FMusique_r.addEventListener('click', () => {
  
            let trackUrl = France_Musique;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});
const FIP_r=document.getElementById('FIP');
 
FIP_r.addEventListener('click', () => {
  
            let trackUrl = FIP;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});
const FCulture_r=document.getElementById('France_culture');
 
FCulture_r.addEventListener('click', () => {
  
            let trackUrl = France_culture;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});
const Nostalgie_r=document.getElementById('Nostalgie');
 
Nostalgie_r.addEventListener('click', () => {
  
            let trackUrl = Nostalgie;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});
const Cherie_r=document.getElementById('Chérie_FM');
Cherie_r.addEventListener('click', () => {
  
            let trackUrl = Chérie_FM;
            audioPlayer.src = trackUrl;
            // On lit le track
            audioPlayer.play();

});