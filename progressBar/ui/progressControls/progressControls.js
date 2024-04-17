import {createSwitch} from "../switch/switch.js";

/**
 * Создает контролы прогресса.
 * @param {string} idPrefix - Префикс для идентификаторов контролов.
 * @param {number} defaultValue - Начальное значение прогрессбара
 * @returns {HTMLElement} - Созданные контролы прогресса.
 */
export const createControls = (idPrefix, defaultValue) => {

	const valueInputId = `${idPrefix}-value-input`;
	const animateToggleId = `${idPrefix}-animate-toggle`;
	const hideToggleId = `${idPrefix}-hide-toggle`;

	const controlsHTML = `
        <div class="progress-block__controls">
            <div class="progress-control">
                <input 
                	type="number" 
                	pattern="\\d*" 
                	class="progress-value__input" 
                	id="${valueInputId}" 
                	min="0" 
                	max="100" 
                	value="${defaultValue || 0}"
                	inputmode="numeric"
                >
                <label class="progress__label progress-value__label" for="${valueInputId}">Value</label>
            </div>
            <div class="progress-control">
                ${createSwitch({ type: 'checkbox', id: animateToggleId}, 'progress-animate__input').outerHTML}
                <label class="progress__label progress-animate__label" for="${animateToggleId}">Animate</label>
            </div>
            <div class="progress-control">
                ${createSwitch({ type: 'checkbox', id: hideToggleId }, 'progress-hide__input').outerHTML}
                <label class="progress__label progress-hide__label" for="${hideToggleId}">Hide</label>
            </div>
        </div>
    `;

	const controlsContainer = document.createElement('div');
	controlsContainer.insertAdjacentHTML('beforeend', controlsHTML);

	return controlsContainer.firstElementChild;
}


/**
 * Управляет прогрессом прогресс-бара.
 * @param {HTMLElement} parentBlock - Родительский блок прогресс-бара.
 */
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
			progressSvg.classList.remove('hidden');
		} else {
			progressSvg.classList.add('hidden');
		}
	}


	valueInput.addEventListener('input', (event) => {
		const inputValue = event.target.value;
		if(inputValue.match(/[^0-9]/g)){
			valueInput.value = inputValue.replace(/[^0-9]/g, "");
		}
		if(inputValue > 100){
			valueInput.value = 100;
		}

		if(inputValue < 0){
			valueInput.value = 0;
		}

		updateProgress(inputValue);
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