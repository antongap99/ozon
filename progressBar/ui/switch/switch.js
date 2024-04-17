import {createElement} from "../../utils/createElements.js";

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