// import angular from 'angular';
import './styles/style.css'

function component() {
		var element = document.createElement('div');

		element.innerHTML = 'NPM change';
		element.classList.add('home');

		return element;
}

document.body.appendChild(component());
