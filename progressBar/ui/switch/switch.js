import {createElement} from "../../utils/createElements.js";


/**
 * Создает переключатель (switch) с заданными атрибутами и классами.
 * @param {object} attrs - Объект с атрибутами для элемента input.
 * @param {string} attrs.type - Тип элемента input.
 * @param {string} attrs.id - Идентификатор элемента input.
 * @param {string} classname - Класс для элементов input и span.
 * @returns {HTMLElement} - Созданный переключатель.
 */
export const createSwitch = (attrs, classname) => {

	const input = createElement(
		{
			elementType: 'input',
			attrs,
			classname,
		}
	)

	const span = createElement({
		elementType: 'span',
		classname:  'slider round',
	})

	return createElement({
		elementType: 'label',
		classname: 'switch',
		children:  [input, span],
	})
}