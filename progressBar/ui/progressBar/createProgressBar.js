import {setAttr} from '../../utils/setAttr.js'
import {createElement} from "../../utils/createElements.js";

const createProgressRing = (width, height) => {
	const progressRing = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	progressRing.classList.add('progress-ring');
	setAttr(progressRing, { width, height });
	return progressRing;
};

const createProgressRingCircle = (width, stroke, classname) => {
	const progressRingCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	progressRingCircle.classList.add(classname);
	const radius = width - (stroke * 2)
	setAttr(progressRingCircle, { 'cx': `${width}`, 'cy': `${width}`, 'r': `${radius}` });
	return progressRingCircle;
};

export const createProgressBar = (width, height) => {

	const progressBar = createElement({
		elementType: 'div',
		classname: 'progress-bar',
	});
	const progressRing = createProgressRing(width, height);
	const progressRingTrack= createProgressRingCircle(width / 2, 8, 'progress-ring-track');
	const progressRingCircle = createProgressRingCircle(width / 2, 8, 'progress-ring-circle');

	progressRing.append(progressRingTrack, progressRingCircle);
	progressBar.append( progressRing)

	return progressBar;
}


export const createProgressBlock = () => {
	return createElement({
		elementType: 'div',
		classname: 'progress-block',
	});
}