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
	const width = 60
	const stroke = 8;
	const radius = width - (stroke * 2)
	setAttr(progressRingCircle, { 'cx': `${width}`, 'cy': `${width}`, 'r': `${radius}` });
	return progressRingCircle;
};


export const  createProgressBlock = () => {
	const progressBlock = document.createElement('div');
	progressBlock.classList.add('progress-block');

	const progressBar= document.createElement('div');
	progressBar.classList.add('progress-bar');


	const progressRing = createProgressRing();
	const progressRingCircle = createProgressRingCircle();

	progressRing.append(progressRingCircle);
	progressBar.append(progressRing)
	progressBlock.append(progressBar);

	return progressBlock;
}