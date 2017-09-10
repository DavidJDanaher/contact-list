// import angular from 'angular';

function component() {
		var element = document.createElement('div');

		element.innerHTML = 'Test';

		return element;
}

document.body.appendChild(component());
