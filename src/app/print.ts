import * as style from '../styles/file.css';

console.log(`The print.js module has loaded! See the network tab in dev tools...`);

export default () => {
  // console.log('Button Clicked: Here\'s "some text"!');
  let span = document.createElement('span');
  span.className = style.brown;
  span.innerText = `Button Clicked: Here\'s "some text" ...and style is ${style.brown}!`;
  document.body.appendChild(span);
};
