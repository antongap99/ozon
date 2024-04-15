import {createProgressBlock} from './progressBar'

function init() {
	const app = document.getElementById('root');
    const progressBlock = createProgressBlock();
	

    const valueInput = document.createElement('input');
    valueInput.setAttribute('type', 'number');
    valueInput.setAttribute('id', 'value-input');
    valueInput.setAttribute('min', '0');
    valueInput.setAttribute('max', '100');
    valueInput.setAttribute('value', '50');

    const animateToggle = document.createElement('input');
    animateToggle.setAttribute('type', 'checkbox');
    animateToggle.setAttribute('id', 'animate-toggle');

    const animateLabel = document.createElement('label');
    animateLabel.setAttribute('for', 'animate-toggle');
    animateLabel.textContent = 'Animate';

    const hideToggle = document.createElement('input');
    hideToggle.setAttribute('type', 'checkbox');
    hideToggle.setAttribute('id', 'hide-toggle');

    const hideLabel = document.createElement('label');
    hideLabel.setAttribute('for', 'hide-toggle');
    hideLabel.textContent = 'Hide';


    app.append(
        valueInput,
        animateToggle,
        animateLabel,
        hideToggle,
        hideLabel,
        progressBlock
    );
    const progressCircle = document.querySelector('.progress-ring-circle');

    function updateProgress(value) {
        const circumference = 2 * Math.PI * progressCircle.r.baseVal.value;
        const offset = circumference * (1 - value / 100);
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
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);