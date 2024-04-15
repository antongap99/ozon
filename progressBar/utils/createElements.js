import {setAttr} from "./setAttr.js";

/**
 * Создает элемент input с указанными атрибутами и обработчиком события.
 * @param {Object} attr - Объект с атрибутами для добавления к элементу input.
 * @param {Object} [handler] - Объект с информацией о обработчике события (необязательный).
 * @param {string} handler.type - Тип события, к которому будет добавлен обработчик (например, 'click', 'change' и т.д.).
 * @param {Function} handler.function - Функция-обработчик события.
 * @returns {HTMLInputElement} - Новый элемент input с указанными атрибутами и обработчиком события.
 */
export const createInput = (attr, handler) => {
	const input = document.createElement('input');
	setAttr(input, attr);

	// Добавляем обработчик, если он передан
	if (handler && handler.type && handler.function && typeof handler.function === 'function') {
		input.addEventListener(handler.type, handler.function);
	}

	return input;
}


/**
 * Создает  элемент label с указанными атрибутами и обработчиком события.
 * @param {Object} attr - Объект с атрибутами для добавления к элементу label.
 * @param {string} text - Строка, являющаяся содержимым label.
 * @returns {HTMLLabelElement} - Новый элемент label с указанными атрибутами.
 */
export const createLabel = (attr, text) => {
	const label = document.createElement('label');
	setAttr(label, attr);
	return label;
}

