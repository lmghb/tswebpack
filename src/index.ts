import _ from 'lodash';

export function component() {
  let element = document.createElement('div');

  let button = document.createElement('button');
  let br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    let print = module.default;
    print();
  });
  return element;
}

document.body.appendChild(component());
