import {createProgressBlock} from './ui/createProgressBar.js';
import {createControls, controlProgressBar} from './ui/progressControls.js'

export const initProgressBlock = (app) => {
	const progressBlock = createProgressBlock();
	const controls = createControls();
	progressBlock.append(controls)
	app.append(progressBlock)
	controlProgressBar()
}