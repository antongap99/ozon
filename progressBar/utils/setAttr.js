/**
 * Добавляет атрибуты к указанному элементу.
 * @param {Element} element - Элемент DOM, к которому будут добавлены атрибуты.
 * @param {Object} attributes - Объект с атрибутами для добавления к элементу.
 */
export const setAttr = (element, attributes) =>  {
	// Проверка на наличие элемента и объекта атрибутов
	if (!element || !attributes || typeof attributes !== 'object') {
		return;
	}


	if (Object.keys(attributes).length === 0) {
		return;
	}

	for (let key in attributes) {
		if (attributes.hasOwnProperty(key)) {
			// Проверка на пустое значение атрибута
			if (!attributes[key]) {
				console.warn(`Empty value for attribute '${key}'.`);
				continue;
			}
			element.setAttribute(key, attributes[key]);
		}
	}
}
