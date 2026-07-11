// Cast.js - Chromecast functionality for Ma Radio

let castSession = null;

// Initialize Cast API
function initCastApi() {
  if (!window.chrome || !window.chrome.cast) {
    console.warn('Cast API not available. Please serve over HTTP/HTTPS');
    return;
  }

  const options = {
    receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  };

  chrome.cast.initialize(options, onCastApiAvailable, onCastApiError);
}

// Called when Cast API becomes available
function onCastApiAvailable(isAvailable) {
  if (isAvailable) {
    console.log('Cast API is available');
    // Optional: Show cast button when API is ready
  }
}

// Handle Cast API initialization errors
function onCastApiError(error) {
  console.error('Cast API Error:', error);
}

// Establish session with Chromecast device
function onSessionRequested(e) {
  const sessionRequest = new chrome.cast.SessionRequest(
    chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
  );

  chrome.cast.requestSession(onSessionSuccess, onSessionError, sessionRequest);
}

// Successfully connected to Chromecast
function onSessionSuccess(session) {
  castSession = session;
  console.log('Session established:', session);

  // Get current audio source
  const audioPlayer = document.getElementById('audioPlayer');
  
  const currentSrc = audioPlayer.src;
  Bouton_cast.get
  document.getElementById("Btn_cast").bgColor = "green";  // mest le logo casten Vert

  if (currentSrc) {
    castAudio(currentSrc);
  }
}

// Handle session connection error
function onSessionError(error) {
  console.error('Session Error:', error);
  alert('Failed to connect to Chromecast device. Make sure it is available and on the same network.');
}

// Cast audio to Chromecast
function castAudio(audioUrl) {
  if (!castSession) {
    console.error('No active Cast session');
    return;
  }

  const mediaInfo = new chrome.cast.media.MediaInfo(audioUrl, 'audio/mp3');
  
  // Set metadata for the audio (optional but recommended)
  const musicMediaMetadata = new chrome.cast.media.MusicTrackMediaMetadata();
  musicMediaMetadata.title = document.getElementById('Nom_Radio').innerText || 'Ma Radio';
  musicMediaMetadata.artist = 'Radio Stream';
  musicMediaMetadata.images = [
    new chrome.cast.Image(document.getElementById('ImgRadioEcoute').src)
  ];
  
  mediaInfo.metadata = musicMediaMetadata;

  const request = new chrome.cast.media.LoadRequest(mediaInfo);
  request.autoplay = true;

  castSession.media[0].media.loadMedia(request, onMediaLoadSuccess, onMediaLoadError);
}

// Successfully loaded media on Chromecast
function onMediaLoadSuccess() {
  console.log('Media successfully loaded on Chromecast');
  
  // Update UI to show casting is active
  const castButton = document.getElementById('Btn_Cast');
  if (castButton) {
    castButton.classList.add('casting-active');
  }
}

// Handle media load error
function onMediaLoadError(error) {
  console.error('Media load error:', error);
  alert('Failed to load media on Chromecast');
}

// Stop casting
function stopCasting() {
  if (castSession) {
    castSession.stop(
      () => {
        console.log('Casting stopped');
        castSession = null;
        
        // Update UI
        const castButton = document.getElementById('Btn_Cast');
        if (castButton) {
          castButton.classList.remove('casting-active');
        }
      },
      (error) => {
        console.error('Error stopping cast session:', error);
      }
    );
  }
}

// Toggle casting on/off
function toggleCasting() {
  const audioPlayer = document.getElementById('audioPlayer');

  if (castSession) {
    // Already casting - stop it
    stopCasting();
  } else {
    // Start new cast session
    onSessionRequested();
  }
}

// Add click listener to Cast button
window.addEventListener('load', () => {
  const castButton = document.getElementById('Btn_Cast');
  if (castButton) {
    castButton.addEventListener('click', toggleCasting);
  }

  // Initialize Cast API
  if (chrome && chrome.cast) {
    initCastApi();
  }
});
