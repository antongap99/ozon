import {createElement} from "../../utils/createElements.js";

export const createSwitch = (attrs) => {

	const input = createElement('input', attrs)
	const span = createElement('span', {'class': 'slider round'}, '')

	const label = createElement( 'label', {}, '', [input, span])
	label?.classList.add('switch')
	return label
}