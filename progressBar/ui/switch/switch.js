import {createElement} from "../../utils/createElements.js";

export const createSwitch = (attrs) => {

	const input = createElement(
		{
			elementType: 'input',
			attr: attrs,
		}
	)

	const span = createElement({
		elementType: 'span',
		classname:  'slider round',
	})

	return createElement({
		elementType: 'label',
		classname: 'switch',
		children:  [span, input],
	})
}