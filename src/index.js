// import angular from 'angular';
import printMe from './print.js';
import './styles/style.css'

function component() {
		var element = document.createElement('div');
		var button = document.createElement('button');

		element.innerHTML = 'NPM change';
		element.classList.add('home');
		button.innerHTML = 'Click';
		button.onclick = printMe;
		element.appendChild(button);

		return element;
}
document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function(){
    console.log('Updating...');
    printMe();
  })
}
