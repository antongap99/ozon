import {createProgressBar, createProgressBlock} from './ui/progressBar/createProgressBar.js';
import {createControls, controlProgressBar} from './ui/progressControls/progressControls.js'
import {createElement} from "./utils/createElements.js";

/**
 * Инициализирует блок прогресса в приложении.
 * @param {Object} initProgressBlockOptions - Параметры инициализации блока прогресса.
 * @param {HTMLElement} initProgressBlockOptions.app - Родительский элемент, к которому будет добавлен блок прогресса.
 * @param {string} initProgressBlockOptions.progressName - Имя прогресса.
 * @param {number} initProgressBlockOptions.stroke - Имя прогресса.
 * @param {number} initProgressBlockOptions.size - Размер блока прогресса.
 */
export const initProgressBlock = (initProgressBlockOptions) => {
	const {
		app,
		progressName,
		size,
		stroke
	} = initProgressBlockOptions;

	const progressBlockWrapper = createElement({
		elementType: 'div',
		classname: 'progress-block__wrapper'
	})
	const progressTitle = createElement({
		elementType: 'h3',
		classname: 'progress__title',
		text: 'Progress'
	})

	const progressBlock = createProgressBlock();
	const progressBar = createProgressBar(size, size, stroke);
	const controls = createControls(progressName);

	progressBlock.append(progressBar, controls);
	progressBlockWrapper.append(progressTitle, progressBlock)
	app.append(progressBlockWrapper);


	controlProgressBar(progressBlockWrapper);
}