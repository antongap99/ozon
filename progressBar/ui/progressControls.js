import {createSwitch} from "./switch/switch.js";
import {createElement} from "../utils/createElements.js";

export const createControls = () => {
    const controls = createElement({
		elementType: 'div',
		classname: 'progress-block__controls'
	});


	const valueLabel = createElement({
		elementType: 'label',
		text: 'Value',
		attrs: {
			'id': 'value-input',
		}
	})

	const valueInput = createElement({
		elementType: 'input',
		classname: 'progress-value__input',
		attrs: {
			'type': 'number',
			'id': 'value-input',
			'min': '0',
			'max': '100',
			'value': '50',
		}
	});

	const valueControl = createElement({
		elementType: 'div',
		classname: 'progress-control',
		children: [valueInput, valueLabel ]
	})


	const animateToggle = createSwitch({
		'type':  'checkbox',
		'id': 'animate-toggle',
	});


	const animateLabel = createElement({
		elementType: 'label',
		attrs: {
			'for': 'hide-toggle'
		},
		text: 'Animate',
	});

	const animateControl = createElement({
		elementType: 'div',
		classname: 'progress-control',
		children: [animateToggle, animateLabel]
	})

	const hideToggle = createSwitch({
		'type':  'checkbox',
		'id': 'hide-toggle',
	});

	const hideLabel = createElement({
		elementType: 'label',
		attrs: {
			'for': 'hide-toggle'
		},
		text: 'Hide'
	});

	const hideControl = createElement({
		elementType: 'div',
		classname: 'progress-control',
		children: [hideToggle, hideLabel]
	})

	const progressCircle = document.querySelector('.progress-ring-circle');

	function updateProgress(percent) {
		const circumference = 2 * Math.PI * progressCircle.r.baseVal.value;
		const offset = circumference * (1 - percent / 100);
		progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
		progressCircle.style.strokeDashoffset = offset;
	}

	function toggleAnimation(isAnimated) {
		if (isAnimated) {
			progressCircle.classList.add('animated');
		} else {
			progressCircle.classList.remove('animated');
		}
	}

	function toggleVisibility(isVisible) {
		//
	}


	valueInput.addEventListener('input', () => {
		updateProgress(valueInput.value);
	});



	animateToggle.addEventListener('change', () => {
		toggleAnimation(animateToggle.checked);
	});


	hideToggle.addEventListener('change', () => {
		toggleVisibility(!hideToggle.checked);
	});

	// Инициализация
	updateProgress(valueInput.value);
	toggleAnimation(animateToggle.checked);
	toggleVisibility(!hideToggle.checked);



	controls.append(
		valueControl,
		animateControl,
		hideControl,
	)

	return controls;
}