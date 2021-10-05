import { variables } from './variables';

export class BreathContainer {
  constructor() {
    this.blockContainer = document.createElement('div');
    this.blockContainer.classList.add('blocks__container');

    variables.blocksWrap.appendChild(this.blockContainer);

    const inhaleWidth = variables.inhaleTime * variables.timeMultiplier;
    this.blockInhale = document.createElement('div');
    this.blockInhale.classList.add('inhale', 'breath');
    this.blockInhale.style.width = inhaleWidth + 'px';

    this.blockInhale.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="none"><path class="cls-1" d="M0,${
      variables.blocksHeight
    }C${inhaleWidth / 2},${variables.blocksHeight},${
      inhaleWidth / 2
    },0,${inhaleWidth},0"/></svg>`;

    // M0,98C50,98,51,1,101,1
    // M0,${variables.blockHeight}C${blockWidth / 2},${variables.blockHeight},${blockWidth / 2},0,${blockWidth / 2},0
    const hold1Width = variables.holdTime * variables.timeMultiplier;
    this.blockHold1 = document.createElement('div');
    this.blockHold1.classList.add('hold1', 'breath');
    this.blockHold1.style.width = hold1Width + 'px';
    this.blockHold1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="none"><path class="cls-1" d="M0,0L${hold1Width},0"/></svg>`;

    const exhaleWidth = variables.exhaleTime * variables.timeMultiplier;

    this.blockExhale = document.createElement('div');
    this.blockExhale.classList.add('exhale', 'breath');
    this.blockExhale.style.width = exhaleWidth + 'px';

    this.blockExhale.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="none"><path  d="M0,0C${
      exhaleWidth / 2
    },0,${exhaleWidth / 2},${variables.blocksHeight},${exhaleWidth},${
      variables.blocksHeight
    }"/></svg>`;

    const hold2Width = variables.hold2Time * variables.timeMultiplier;

    this.blockHold2 = document.createElement('div');
    this.blockHold2.classList.add('hold2', 'breath');
    this.blockHold2.style.width =
      variables.hold2Time * variables.timeMultiplier + 'px';
    this.blockHold2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="none"><path class="cls-1" d="M0,${variables.blocksHeight}L${hold2Width},${variables.blocksHeight}"/></svg>`;

    this.blockContainer.appendChild(this.blockInhale);

    this.blockContainer.appendChild(this.blockHold1);
    this.blockContainer.appendChild(this.blockExhale);
    this.blockContainer.appendChild(this.blockHold2);
  }

  setX(positionX) {
    this.blockContainer.style.transform = `translateX(${positionX}px)`;
  }

  getWidth() {
    const totalTime =
      variables.inhaleTime +
      variables.holdTime +
      variables.exhaleTime +
      variables.hold2Time;
    return totalTime * variables.timeMultiplier;
  }

  destroy() {}
}
