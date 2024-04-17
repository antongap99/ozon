import {createProgressBar, createProgressBlock} from './ui/progressBar/createProgressBar.js';
import {createControls, controlProgressBar} from './ui/progressControls/progressControls.js'
import {createElement} from "./utils/createElements.js";

export const initProgressBlock = (initProgressBlockOptions) => {
	const {
		app,
		progressName,
		size,
	} = initProgressBlockOptions;

	const progressBlockWrapper = createElement({
		elementType: 'div',
		classname: 'progress-block__wrapper'
	})
	const progressTitle = createElement({
		elementType: 'span',
		classname: 'progress__title',
		text: 'Progress'
	})

	const progressBlock = createProgressBlock();
	const progressBar = createProgressBar(size, size);
	const controls = createControls(progressName);

	progressBlock.append(progressBar, controls);
	progressBlockWrapper.append(progressTitle, progressBlock)
	app.append(progressBlockWrapper);


	controlProgressBar(progressBlockWrapper);
}