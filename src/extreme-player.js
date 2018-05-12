class ExtremePlayer {
  constructor(container) {
    this.container = container;
  }

  createPlayerDOM () {
    console.log('[ExtremePlayer createPlayerDOM]');

    // Check for existence of element with Id in the DOM
    let container = document.getElementById(this.container);
    if (!container) throw `Error: Element with id ${this.container} does not exists`;

    // Start creating the DOM Tree
    // ext-video-container
    let videoContainer = document.createElement('div');
    videoContainer.className = 'ext-vdo-container';
    videoContainer.setAttribute('style', 'position: relative; width: 100%;');

    // .ext-player
    let extPlayer = document.createElement('div');
    extPlayer.className = 'ext-player';
    // ext-controls-ui
    let extVideoUi = document.createElement('div');
    extVideoUi.className = 'ext-controls-ui';

    // append to videoContainer
    videoContainer.appendChild(extVideo);
    videoContainer.appendChild(extVideoUi);

    // Append to container
    container.appendChild(videoContainer);
  }
}

export default ExtremePlayer;
