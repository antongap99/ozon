import {setAttr} from "./setAttr.js";

/**
 * Создает DOM элемент с указанным типом, атрибутами и обработчиком события.
 * @param {Object} createElementOptions - Объект с параметрами для создания элемента.
 * @param {string} createElementOptions.elementType - Тип создаваемого DOM элемента (например, 'input', 'label' и т.д.).
 * @param {string} [createElementOptions.classname] - Классы для стилизации.
 * @param {Object} [createElementOptions.attrs] - Объект с атрибутами для добавления к элементу.
 * @param {string} [createElementOptions.text] - Строка, являющаяся содержимым элемента (только для label).
 * @param {Array<HTMLElement>} [createElementOptions.children] - Массив с дочерними элементами (только для label).
 * @param {Object} [createElementOptions.handler] - Объект с информацией о обработчике события (необязательный).
 * @param {string} createElementOptions.handler.type - Тип события, к которому будет добавлен обработчик (например, 'click', 'change' и т.д.).
 * @param {Function} createElementOptions.handler.function - Функция-обработчик события.
 * @returns {HTMLElement} - Новый DOM элемент с указанными атрибутами и обработчиком события.
 */
export const createElement = (createElementOptions) => {
	const {
		elementType,
		classname,
		attrs,
		text,
		children,
		handler,
	} = createElementOptions
	// Проверка типа данных для параметра elementType
	if (typeof elementType !== 'string') {
		throw new Error('elementType должен быть строкой');
	}

	const element = document.createElement(elementType);

	if (typeof attrs === 'object' && attrs !== null && !Array.isArray(attrs)) {
		setAttr(element, attrs);
	}


	if ('textContent' in  element && typeof text === 'string') {
		element.textContent = text;
	}

	if (children && Array.isArray(children)) {
		element.append(...children);
	}

	// Добавляем обработчик, если он передан
	if (handler && typeof handler.type === 'string' && typeof handler.function === 'function') {
		element.addEventListener(handler.type, handler.function);
	}

	if(classname){
		element.className = classname;
	}

	return element;
};
