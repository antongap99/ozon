import {setAttr} from '../../utils/setAttr.js'
import {createElement} from "../../utils/createElements.js";

/**
 * Создает кольцо прогресс-бара.
 * @param {number} width - Ширина кольца прогресс-бара.
 * @param {number} height - Высота кольца прогресс-бара.
 * @returns {SVGSVGElement} - Созданное кольцо прогресс-бар.
 */
const createProgressRing = (width, height) => {
	const progressRing = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	progressRing.classList.add('progress-ring');
	setAttr(progressRing, { width, height });
	return progressRing;
};


/**
 * Создает круг для кольцевого прогресс-бара.
 * @param {number} width - Ширина области, в которой рисуется круг.
 * @param {number} stroke - Ширина обводки круга.
 * @param {string} classname - Классы для круга.
 * @returns {SVGCircleElement} - Созданный круг для кольцевого прогресс-бара.
 */

const createProgressRingCircle = (width, stroke, classname) => {
	const progressRingCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	progressRingCircle.classList.add(classname);
	const radius = width - (stroke * 2)
	setAttr(progressRingCircle, { 'cx': `${width}`, 'cy': `${width}`, 'r': `${radius}` });
	return progressRingCircle;
};

/**
 * Создает прогресс-бар.
 * @param {number} width - Ширина прогресс-бара.
 * @param {number} height - Высота прогресс-бара.
 * @returns {HTMLElement} - Созданный прогресс-бар.
 */
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



/**
 * Создает блок прогресса.
 * @returns {HTMLElement} - Созданный блок прогресса.
 */
export const createProgressBlock = () => {
	return createElement({
		elementType: 'div',
		classname: 'progress-block',
	});
}