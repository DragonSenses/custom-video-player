/* Global Variables */
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timeStamp');

// Play & Pause video
function toggleVideoStatus(){
  /* Since video is connected to HTML5 <video> tag, can use API that has
  methods such as paused() */
  (video.paused) ? video.play() : video.pause();
}

// Update play/pause icon
function updatePlayIcon() {
  if(video.paused) {
    play.innerHtml = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" />
    </svg>`;
    console.log(play);
    console.log(play.innerHTML);
  } else {
    play.innerHtml = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
    </svg> `;
    console.log(play);
    console.log(play.innerHTML);

  }
}
 
// Update progress & timestamp
function updateProgress(){
  /* Format of video.currentTime example: 7.117271 */
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stops & Resets the video progress
function stopVideo(){
  // Reset current time to 0 and pauses it
  video.currentTime = 0;
  video.pause();
}


/* Event Listeners */
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);