import {setAttr} from '../utils/setAttr.js'
const createProgressRing = () => {
	const progressRing = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	progressRing.classList.add('progress-ring');
	setAttr(progressRing, { 'width': '120', 'height': '120' });
	return progressRing;
};

const createProgressRingCircle = () => {
	const progressRingCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	progressRingCircle.classList.add('progress-ring-circle');
	setAttr(progressRingCircle, { 'cx': '60', 'cy': '60', 'r': '54' });
	return progressRingCircle;
};


export const  createProgressBlock = () => {
	const progressBlock = document.createElement('div');
	progressBlock.classList.add('progress-block');


	const progressRing = createProgressRing();
	const progressRingCircle = createProgressRingCircle();

	progressRing.appendChild(progressRingCircle);
	progressBlock.appendChild(progressRing);

	return progressBlock;
}