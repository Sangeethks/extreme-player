import backwardSvgIco from '../assets/icons/backward.svg';
import playSvgIco from '../assets/icons/play.svg';
import pauseSvgIco from '../assets/icons/pause.svg';
import forwardSvgIco from '../assets/icons/forward.svg';
import volumeOffSvgIco from '../assets/icons/volume-off.svg';
import volumeReducedSvgIco from '../assets/icons/volume-reduced.svg';
import volumeFullSvgIco from '../assets/icons/volume-full.svg';
import fullscreenSvgIco from '../assets/icons/fullscreen.svg';
import fullscreenExitSvgIco from '../assets/icons/fullscreen-exit.svg';

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

    // (child .ext-player) video tag
    let extElPlayer = document.createElement('video');
    extElPlayer.setAttribute('id', 'ext-el-player');

    // (sibling .ext-player)  .ext-controls-ui
    let extVideoUi = document.createElement('div');
    extVideoUi.className = 'ext-controls-ui';

    // (child extVideoUi)
    let topControls = document.createElement('div');

    // (child extVideoUi)
    let playbackControls = document.createElement('div');
    playbackControls.setAttribute('style', `position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.3);
      z-index: 22;`
    );

    // (child playbackControls)
    let pbcBox = document.createElement('div');

    // (child pbcBox)
    let pbcBkwd = document.createElement('div');
    pbcBkwd.setAttribute('style', `
      margin-right: 40px;
      display: inline-block;
    `);
    // (child pbcBkwd) img
    let pbcBkwdImg = document.createElement('div');
    pbcBkwdImg.setAttribute('src', backwardSvgIco);
    pbcBkwdImg.setAttribute('style', `
      cursor: pointer;
      width: 60px;
    `);

    // Append to pbcBkwd
    pbcBkwd.appendChild(pbcBkwdImg);

    // (child pbcBox)
    let pbcPlay = document.createElement('div');
    pbcPlay.className = 'pbc-play';
    pbcPlay.setAttribute('style', `
      display: inline-block;
    `);
    // (child pbcPlay) play.svg
    let pbcPlayPlayIco = document.createElement('img');
    pbcPlayPlayIco.setAttribute('src', playSvgIco);
    pbcPlayPlayIco.setAttribute('style', `
      width: 90px;
      position: relative;
      top: 15px;
      cursor: pointer;
    `);
    // (child pbcPlay) pause.svg
    let pbcPlayPuaseIco = document.createElement('img');
    pbcPlayPuaseIco.setAttribute('src', playSvgIco);
    pbcPlayPuaseIco.setAttribute('style', `
      display: none;
      width: 90px;
      position: relative;
      top: 15px;
      cursor: pointer;
    `);
    // Append to pbcPlay
    pbcPlay.appendChild(pbcPlayPlayIco);
    pbcPlay.appendChild(pbcPlayPauseIco);

    // (child pbcBox)
    let pbcFwd = document.createElement('div');
    pbcFwd.setAttribute('style', `
      margin-left: 40px;
      display: inline-block;
    `);
    // (child pbcFwd) img
    let pbcFwdImg = document.createElement('div');
    pbcFwdImg.setAttribute('src', forwardSvgIco);
    pbcFwdImg.setAttribute('style', `
      cursor: pointer;
      width: 60px;
    `);

    // Append to pbcBox
    pbcBox.appendChild(pbcBkwd);
    pbcBox.appendChild(pbcPlay);
    pbcBox.appendChild(pbcFwd);

    // Append to playbackControls
    playbackControls.appendChild(pbcBox);

    // Bottom Controls
    // .ext-bottom-controls
    let bottomControls = document.createElement('div');
    bottomControls.setAttribute('style', `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 6px 0;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.3);
      background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#4c4c4c), to(transparent));
      background: -webkit-linear-gradient(top, transparent, #4c4c4c);
      background: -moz-linear-gradient(top, transparent, #4c4c4c);
      background: -ms-linear-gradient(top, transparent, #4c4c4c);
      background: -o-linear-gradient(top, transparent, #4c4c4c);
    `);
    bottomControls.className = 'ext-bottom-controls';

    // .ext-bt-ctrls
    let btCtrls = document.createElement('div');
    btCtrls.className = 'ext-bt-ctrls';

    // .bt-progress
    let progress = document.createElement('div');
    progress.className = 'bt-progress';
    progress.setAttribute('style', `
      margin-bottom: 6px;
    `);

    // input[type="range"]
    let inputRange = document.createElement('input');
    inputRange.setAttribute('type', 'range');
    inputRange.setAttribute('style', `
      -webkit-appearance: none;
      width: 100%;
      margin: 0;
    `);

    // Now start appending to bt-btCtrls
    progress.appendChild(inputRange);

    // .btn-ctrls-misc
    let ctrlsMisc = document.createElement('div');
    ctrlsMisc.setAttribute('style', `
      padding: 5px 10px;
    `);
    ctrlsMisc.className = 'btn-ctrls-misc';

    // .misc-left
    let miscLeft = document.createElement('div');

    btCtrls.appendChild(progress);

    extPlayer.appendChild(extElPlayer);
    extVideoUi.appendChild(playbackControls);

    // append to videoContainer
    videoContainer.appendChild(extPlayer);
    videoContainer.appendChild(extVideoUi);

    // Append to container
    container.appendChild(videoContainer);
  }
}

export default ExtremePlayer;
