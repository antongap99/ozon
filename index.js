import {createProgressBlock} from './progressBar/index.js'
import {createControls} from "./progressBar/ui/progressControls.js";
import {createSwitch} from "./progressBar/ui/switch/switch.js";
import {createElement} from "./progressBar/utils/createElements.js";

function init() {
	const app = document.getElementById('root');
    const progressBlock = createProgressBlock();

	// TODO Вынести в функцию createInput
    const valueInput = createElement('input',{
        'type': 'number',
        'id': 'value-input',
        'min': '0',
        'max': '100',
        'value': '50',
    });

    const animateToggle = createSwitch({
        'type':  'checkbox',
        'id': 'animate-toggle',
    });


	// TODO Вынести в функцию createLabel
    const animateLabel = document.createElement('label');
    animateLabel.setAttribute('for', 'animate-toggle');
    animateLabel.textContent = 'Animate';

	// TODO Вынести в функцию createInput
    const hideToggle = createSwitch({
        'type':  'checkbox',
        'id': 'hide-toggle',
    });

	// TODO Вынести в функцию createLabel
    const hideLabel = document.createElement('label');
    hideLabel.setAttribute('for', 'hide-toggle');
    hideLabel.textContent = 'Hide';

	const controls = createControls()

	controls.append(
		valueInput,
		animateToggle,
		animateLabel,
		hideToggle,
		hideLabel,
	)

	progressBlock.append(controls)
    app.append(progressBlock);


    const progressCircle = document.querySelector('.progress-ring-circle');

	//
    function updateProgress(percent) {
        const circumference = 2 * Math.PI * progressCircle.r.baseVal.value;
        const offset = circumference * (1 - percent / 100);
        console.log('offset', offset)
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

	// TODO Добавить визуал
    valueInput.addEventListener('input', () => {
        updateProgress(valueInput.value);
    });


// TODO Добавить визуал
    animateToggle.addEventListener('change', () => {
        toggleAnimation(animateToggle.checked);
    });

	// TODO Добавить визуал
    hideToggle.addEventListener('change', () => {
        toggleVisibility(!hideToggle.checked);
    });

    // Инициализация
    updateProgress(valueInput.value);
    toggleAnimation(animateToggle.checked);
    toggleVisibility(!hideToggle.checked);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);