console.log('The print.js module has loaded! See the network tab in dev tools...');

export default () => {
  // console.log('Button Clicked: Here\'s "some text"!');
  let span = document.createElement('span');
  span.innerText = 'Button Clicked: Here\'s "some text"!';
  document.body.appendChild(span);
};
