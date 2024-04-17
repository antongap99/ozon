import {setAttr} from "./setAttr.js";

/**
 * Создает DOM элемент с указанным типом, атрибутами и обработчиком события.
 * @param {Object} createElementOptions - Объект с параметрами для создания элемента.
 * @param {string} createElementOptions.elementType - Тип создаваемого DOM элемента (например, 'input', 'label' и т.д.).
 * @param {string} [createElementOptions.classname] - Классы для стилизации.
 * @param {Object} [createElementOptions.attrs] - Объект с атрибутами для добавления к элементу.
 * @param {string} [createElementOptions.text] - Строка, являющаяся содержимым элемента (только для label).
 * @param {Array<HTMLElement>} [createElementOptions.children] - Массив с дочерними элементами (только для label).
 * @returns {HTMLElement} - Новый DOM элемент с указанными атрибутами и обработчиком события.
 */
export const createElement = (createElementOptions) => {
	const {
		elementType,
		classname,
		attrs,
		text,
		children,
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


	if(classname){
		element.className = classname;
	}

	return element;
};
