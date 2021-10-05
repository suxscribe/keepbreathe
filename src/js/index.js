import gsap from 'gsap';

import { BreathContainer } from './components/breath-container';
import { variables } from './components/variables';

// some svg magic. SVG to shadow root
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('../svg/', true, /\.svg$/));

// DOCUMENT READY
// COMMON SCRIPTS

const container = document.querySelector('.container');
const text = document.querySelector('.text');

const totalTime =
  variables.inhaleTime +
  variables.holdTime +
  variables.exhaleTime +
  variables.hold2Time;

// const timeMultiplier = 50;

const breatheTextAnimation = () => {
  text.innerHTML = 'Inhale';
  container.classList.remove('shrink');
  container.classList.add('grow');

  setTimeout(() => {
    text.innerHTML = 'Hold';

    setTimeout(() => {
      text.innerHTML = 'Exhale';
      container.classList.remove('grow');
      container.classList.add('shrink');

      setTimeout(() => {
        text.innerHTML = 'Hold';
      }, variables.exhaleTime * 1000);
    }, variables.holdTime * 1000);
  }, variables.inhaleTime * 1000);
};

breatheTextAnimation();
setInterval(breatheTextAnimation, totalTime * 1000);

const blockContainer1 = new BreathContainer();
const blockContainer2 = new BreathContainer();
const blockContainer3 = new BreathContainer();

const blockContainerInitialPosition = 0;
const blockContainerDelta = 0.5; // total time by fps ??

let blockContainerPosition = 0;

//
const ball = document.querySelector('.blocks__ball');
const ballHeight = 10;
const blockHeight = 200;

const ballTopY = -blockHeight + ballHeight;
const ballBottomY = ballHeight;

let timeline = new gsap.timeline({ repeat: -1 });
timeline.to(ball, {
  duration: variables.inhaleTime,
  ease: 'power1.inOut',
  y: ballTopY,
});
timeline.to(ball, {
  duration: variables.holdTime,
  ease: 'power1.inOut',
  y: ballTopY,
});
timeline.to(ball, {
  duration: variables.exhaleTime,
  ease: 'power1.inOut',
  y: ballBottomY,
});
timeline.to(ball, {
  duration: variables.hold2Time,
  ease: 'power1.inOut',
  y: ballBottomY,
});

let timelineBlocks = new gsap.timeline({ repeat: -1 });

timelineBlocks.to(variables.blocksWrap, {
  duration: totalTime,
  ease: 'linear',
  x: blockContainer1.getWidth() * -1,
});

// OLD ANIMATION WITH requestAnimationFrame
// const animation = () => {
//   blockContainerPosition -= blockContainerDelta;

//   blocksWrap.style.transform = `translateX(${blockContainerPosition}px)`;

//   if (blockContainerPosition < blockContainer1.getWidth() * -1) {
//     blockContainerPosition = blockContainerInitialPosition;
//   }

//   // ball animation
//   // 1 - ball inhale. goes up with ease

//   // 2 - ball

//   requestAnimationFrame(animation);
// };

// animation();
