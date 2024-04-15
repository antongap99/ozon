function initProgressBlock() {
    const progressBlock = document.createElement('div');
    progressBlock.classList.add('progress-block');

    const progressRing = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    progressRing.classList.add('progress-ring');
    progressRing.setAttribute('width', '120');
    progressRing.setAttribute('height', '120');

    const progressRingCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    progressRingCircle.classList.add('progress-ring-circle');
    progressRingCircle.setAttribute('cx', '60');
    progressRingCircle.setAttribute('cy', '60');
    progressRingCircle.setAttribute('r', '54');

    progressRing.appendChild(progressRingCircle);
    progressBlock.appendChild(progressRing);

    return progressBlock;
}

function init() {
    const progressBlock = initProgressBlock();
    const app = document.getElementById('root');


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