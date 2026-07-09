// Cast.js - Chromecast functionality for Ma Radio
// Version 2 - Improved error handling

let castSession = null;
let isConnecting = false;

// Initialize Cast API when sender library loads
window['__onGCastApiAvailable'] = function(isAvailable) {
  if (isAvailable) {
    console.log('Cast API est disponible');
    initCastApi();
  } else {
    console.warn('Cast API non disponible');
  }
};

// Initialize Cast API
function initCastApi() {
  try {
    if (!window.chrome || !window.chrome.cast) {
      console.error('Chrome Cast API non trouvé');
      return;
    }

    const options = {
      receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
      clientIdentifier: 'Ma_Radio_Client'
    };

    chrome.cast.initialize(options, onCastApiAvailable, onCastApiError);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation du Cast API:', error);
  }
}

// Called when Cast API becomes available
function onCastApiAvailable(isAvailable) {
  console.log('Cast API disponible:', isAvailable);
}

// Handle Cast API initialization errors
function onCastApiError(error) {
  console.error('Erreur Cast API:', error);
}

// Establish session with Chromecast device
function onSessionRequested(e) {
  if (isConnecting) {
    console.log('Connexion déjà en cours...');
    return;
  }

  isConnecting = true;
  const castButton = document.getElementById('Btn_Cast');
  
  if (castButton) {
    castButton.disabled = true;
    castButton.style.opacity = '0.5';
  }

  try {
    if (!window.chrome || !window.chrome.cast) {
      alert('API Cast non disponible. Assurez-vous d\'accéder via HTTP/HTTPS');
      isConnecting = false;
      if (castButton) {
        castButton.disabled = false;
        castButton.style.opacity = '1';
      }
      return;
    }

    const sessionRequest = new chrome.cast.SessionRequest(
      chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
    );

    chrome.cast.requestSession(onSessionSuccess, onSessionError, sessionRequest);
  } catch (error) {
    console.error('Erreur lors de la demande de session:', error);
    isConnecting = false;
    if (castButton) {
      castButton.disabled = false;
      castButton.style.opacity = '1';
    }
  }
}

// Successfully connected to Chromecast
function onSessionSuccess(session) {
  castSession = session;
  isConnecting = false;
  console.log('Session établie avec succès:', session);

  const castButton = document.getElementById('Btn_Cast');
  if (castButton) {
    castButton.disabled = false;
    castButton.style.opacity = '1';
    castButton.classList.add('casting-active');
  }

  // Get current audio source
  const audioPlayer = document.getElementById('audioPlayer');
  const currentSrc = audioPlayer.src;

  if (currentSrc) {
    console.log('Envoi de l\'audio vers Chromecast:', currentSrc);
    castAudio(currentSrc);
  } else {
    alert('Veuillez d\'abord sélectionner une station radio');
  }

  // Listen for session updates
  session.addUpdateListener(() => {
    if (session.isConnected) {
      console.log('Toujours connecté au Chromecast');
    } else {
      console.log('Déconnecté du Chromecast');
      castSession = null;
      if (castButton) {
        castButton.classList.remove('casting-active');
      }
    }
  });
}

// Handle session connection error
function onSessionError(error) {
  isConnecting = false;
  console.error('Erreur de session:', error);

  const castButton = document.getElementById('Btn_Cast');
  if (castButton) {
    castButton.disabled = false;
    castButton.style.opacity = '1';
  }

  let errorMessage = 'Erreur de connexion au Chromecast';
  
  if (error.code === 'CANCEL') {
    errorMessage = 'Connexion annulée par l\'utilisateur';
  } else if (error.code === 'SESSION_ERROR') {
    errorMessage = 'Aucun appareil Chromecast trouvé. Assurez-vous qu\'il est allumé et sur le même réseau WiFi.';
  } else if (error.code === 'CHANNEL_ERROR') {
    errorMessage = 'Erreur de communication avec le Chromecast';
  }

  console.error('Message d\'erreur:', errorMessage);
  alert(errorMessage);
}

// Cast audio to Chromecast
function castAudio(audioUrl) {
  if (!castSession) {
    console.error('Pas de session Cast active');
    alert('Pas de connexion active au Chromecast');
    return;
  }

  try {
    // Vérifier l'URL
    if (!audioUrl || audioUrl.trim() === '') {
      alert('URL audio invalide');
      return;
    }

    // Créer les informations média
    const mediaInfo = new chrome.cast.media.MediaInfo(audioUrl, 'audio/mpeg');
    
    // Définir les métadonnées
    const musicMediaMetadata = new chrome.cast.media.MusicTrackMediaMetadata();
    musicMediaMetadata.title = document.getElementById('Nom_Radio').innerText || 'Ma Radio';
    musicMediaMetadata.artist = 'Station Radio';
    
    // Ajouter l'image si disponible
    const imgElement = document.getElementById('ImgRadioEcoute');
    if (imgElement && imgElement.src) {
      musicMediaMetadata.images = [
        new chrome.cast.Image(imgElement.src)
      ];
    }
    
    mediaInfo.metadata = musicMediaMetadata;

    // Créer la requête de chargement
    const request = new chrome.cast.media.LoadRequest(mediaInfo);
    request.autoplay = true;
    request.currentTime = 0;

    // Charger le média
    if (castSession.media && castSession.media.length > 0) {
      // Arrêter le média précédent
      castSession.media[0].stop(
        () => {
          console.log('Média précédent arrêté');
          castSession.media[0].loadMedia(request, onMediaLoadSuccess, onMediaLoadError);
        },
        (error) => {
          console.warn('Erreur arrêt média précédent:', error);
          castSession.media[0].loadMedia(request, onMediaLoadSuccess, onMediaLoadError);
        }
      );
    } else {
      // Première charge - utiliser loadMedia directement
      const namespace = 'urn:x-cast:com.google.cast.media';
      castSession.sendMessage(
        namespace,
        { type: 'LOAD', media: mediaInfo, autoplay: true },
        onMediaLoadSuccess,
        onMediaLoadError
      );
    }
  } catch (error) {
    console.error('Erreur lors de la transmission de l\'audio:', error);
    alert('Erreur lors de l\'envoi du flux audio au Chromecast');
  }
}

// Successfully loaded media on Chromecast
function onMediaLoadSuccess() {
  console.log('Média chargé avec succès sur le Chromecast');
  
  // Update UI to show casting is active
  const castButton = document.getElementById('Btn_Cast');
  if (castButton) {
    castButton.classList.add('casting-active');
  }

  // Pause local playback if casting
  const audioPlayer = document.getElementById('audioPlayer');
  if (audioPlayer && !audioPlayer.paused) {
    audioPlayer.pause();
  }
}

// Handle media load error
function onMediaLoadError(error) {
  console.error('Erreur de chargement média:', error);
  alert('Erreur lors du chargement du flux audio sur le Chromecast. Vérifiez l\'URL de la station.');
  
  const castButton = document.getElementById('Btn_Cast');
  if (castButton) {
    castButton.classList.remove('casting-active');
  }
}

// Stop casting
function stopCasting() {
  if (castSession) {
    castSession.stop(
      () => {
        console.log('Casting arrêté');
        castSession = null;
        
        // Update UI
        const castButton = document.getElementById('Btn_Cast');
        if (castButton) {
          castButton.classList.remove('casting-active');
          castButton.disabled = false;
          castButton.style.opacity = '1';
        }

        // Resume local playback
        const audioPlayer = document.getElementById('audioPlayer');
        if (audioPlayer && audioPlayer.paused) {
          audioPlayer.play().catch(err => console.log('Lecture locale:', err));
        }
      },
      (error) => {
        console.error('Erreur lors de l\'arrêt du casting:', error);
      }
    );
  }
}

// Toggle casting on/off
function toggleCasting() {
  const audioPlayer = document.getElementById('audioPlayer');

  // Vérifier qu\'une station est sélectionnée
  if (!audioPlayer.src || audioPlayer.src.trim() === '') {
    alert('Veuillez d\'abord sélectionner une station radio');
    return;
  }

  if (castSession) {
    // Already casting - stop it
    stopCasting();
  } else {
    // Start new cast session
    onSessionRequested();
  }
}

// Add click listener to Cast button when page loads
window.addEventListener('load', () => {
  console.log('Initialisation du système Cast');
  
  const castButton = document.getElementById('Btn_Cast');
  if (castButton) {
    castButton.addEventListener('click', toggleCasting);
    console.log('Écouteur d\'événement Cast ajouté');
  } else {
    console.warn('Bouton Cast non trouvé');
  }
});

// Handle disconnection when page unloads
window.addEventListener('beforeunload', () => {
  if (castSession) {
    castSession.stop(() => {}, () => {});
  }
});

