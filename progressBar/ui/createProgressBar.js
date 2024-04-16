import {setAttr} from '../utils/setAttr.js'
import {createElement} from "../utils/createElements.js";

const createProgressRing = (width, height) => {
	const progressRing = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	progressRing.classList.add('progress-ring');
	setAttr(progressRing, { width, height });
	return progressRing;
};

const createProgressRingCircle = (width, stroke) => {
	const progressRingCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	progressRingCircle.classList.add('progress-ring-circle');
	const radius = width - (stroke * 2)
	setAttr(progressRingCircle, { 'cx': `${width}`, 'cy': `${width}`, 'r': `${radius}` });
	return progressRingCircle;
};

export const  createProgressBar = () => {

	const progressBar = createElement({
		elementType:'div',
		classname: 'progress-bar',
	});
	const progressRing = createProgressRing(150, 150);
	const progressRingCircle = createProgressRingCircle(75, 8);

	progressRing.append(progressRingCircle);
	progressBar.append(progressRing)

	return progressBar;
}


export const createProgressBlock = () => {
	const progressBlock = createElement({
		elementType: 'div',
		classname: 'progress-block',
	});
	progressBlock.append(createProgressBar());
	return progressBlock;
}