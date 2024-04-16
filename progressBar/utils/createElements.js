import {setAttr} from "./setAttr.js";

/**
 * Создает DOM элемент с указанным типом, атрибутами и обработчиком события.
 * @param {string} elementType - Тип создаваемого DOM элемента (например, 'input', 'label' и т.д.).
 * @param {Object} attr - Объект с атрибутами для добавления к элементу.
 * @param {string} [text] - Строка, являющаяся содержимым элемента (только для label).
 * @param {Array<HTMLElement>} [children] - Массив с дочерними элементами (только для label).
 * @param {Object} [handler] - Объект с информацией о обработчике события (необязательный).
 * @param {string} handler.type - Тип события, к которому будет добавлен обработчик (например, 'click', 'change' и т.д.).
 * @param {Function} handler.function - Функция-обработчик события.
 * @returns {HTMLElement} - Новый DOM элемент с указанными атрибутами и обработчиком события.
 */
export const createElement = (
	elementType,
	attr,
	text,
	children,
	handler
) => {
	// Проверка типа данных для параметра elementType
	if (typeof elementType !== 'string') {
		throw new Error('elementType должен быть строкой');
	}

	const element = document.createElement(elementType);

	// Проверка типа данных для параметра attr
	if (typeof attr !== 'object' || attr === null || Array.isArray(attr)) {
		throw new Error('attr должен быть объектом');
	}

	setAttr(element, attr);

	if ('textContent' in  element) {
		// Проверка типа данных для параметра text
		if (typeof text === 'string') {
			element.textContent = text;
		}
	}

	if (children && Array.isArray(children)) {
		element.append(...children);
	}

	// Добавляем обработчик, если он передан
	if (handler && typeof handler.type === 'string' && typeof handler.function === 'function') {
		element.addEventListener(handler.type, handler.function);
	}

	return element;
};
