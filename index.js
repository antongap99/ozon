import {createProgressBlock} from './progressBar/index.js'
import {createControls} from "./progressBar/ui/progressControls.js";

function init() {
	const app = document.getElementById('root');
    const progressBlock = createProgressBlock();

	// TODO Вынести в функцию createInput
    const valueInput = document.createElement('input');
    valueInput.setAttribute('type', 'number');
    valueInput.setAttribute('id', 'value-input');
    valueInput.setAttribute('min', '0');
    valueInput.setAttribute('max', '100');
    valueInput.setAttribute('value', '50');

	// TODO Вынести в функцию createInput
    const animateToggle = document.createElement('input');
    animateToggle.setAttribute('type', 'checkbox');
    animateToggle.setAttribute('id', 'animate-toggle');

	// TODO Вынести в функцию createLabel
    const animateLabel = document.createElement('label');
    animateLabel.setAttribute('for', 'animate-toggle');
    animateLabel.textContent = 'Animate';

	// TODO Вынести в функцию createInput
    const hideToggle = document.createElement('input');
    hideToggle.setAttribute('type', 'checkbox');
    hideToggle.setAttribute('id', 'hide-toggle');

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
        if (isVisible) {
            progressBlock.style.display = 'block';
        } else {
            progressBlock.style.display = 'none';
        }
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