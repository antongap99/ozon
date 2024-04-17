import {createSwitch} from "../switch/switch.js";

export const createControls = (idPrefix) => {

	const valueInputId = `${idPrefix}-value-input`;
	const animateToggleId = `${idPrefix}-animate-toggle`;
	const hideToggleId = `${idPrefix}-hide-toggle`;

	const controlsHTML = `
        <div class="progress-block__controls">
            <div class="progress-control">
                <input type="number" class="progress-value__input" id="${valueInputId}" min="0" max="100" value="50">
                <label class="progress-value__label" for="${valueInputId}">Value</label>
            </div>
            <div class="progress-control">
                ${createSwitch({ type: 'checkbox', id: animateToggleId}, 'progress-animate__input').outerHTML}
                <label class="progress-animate__label" for="${animateToggleId}">Animate</label>
            </div>
            <div class="progress-control">
                ${createSwitch({ type: 'checkbox', id: hideToggleId }, 'progress-hide__input').outerHTML}
                <label class="progress-hide__label" for="${hideToggleId}">Hide</label>
            </div>
        </div>
    `;

	const controlsContainer = document.createElement('div');
	controlsContainer.insertAdjacentHTML('beforeend', controlsHTML);

	return controlsContainer.firstElementChild;
}


export const controlProgressBar = (parentBlock) => {
	const progressSvg = parentBlock.querySelector('.progress-ring');
	const progressCircle = parentBlock.querySelector('.progress-ring-circle');
	const animateToggle = parentBlock.querySelector('.progress-animate__input');
	const hideToggle = parentBlock.querySelector('.progress-hide__input');
	const valueInput = parentBlock.querySelector('.progress-value__input');

	function updateProgress(percent) {
		const circumference = 2 * Math.PI * progressCircle.r.baseVal.value;
		progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
		if (percent > 100 || percent < 0) return;
		const offset = circumference - percent / 100 * circumference;
		progressCircle.style.strokeDashoffset = `${offset}`;
	}

	function toggleAnimation(isAnimated) {
		if (isAnimated) {
			progressCircle.classList.add('animated');
		} else {
			progressCircle.classList.remove('animated');
		}
	}

	function toggleVisibility(isVisible) {
		if(isVisible){
			progressSvg.classList.remove('hide');
		} else {
			progressSvg.classList.add('hide');
		}
	}


	valueInput.addEventListener('input', () => {
		if(valueInput.value > 100){
			valueInput.value = 100;
		}

		if(valueInput.value < 0){
			valueInput.value = 0;
		}

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