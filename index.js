import {createProgressBlock} from './progressBar/index.js'
import {createControls} from "./progressBar/ui/progressControls.js";

function init() {
	const app = document.getElementById('root');
    const progressBlock = createProgressBlock();

    app.append(progressBlock);
	const controls = createControls()
	progressBlock.append(controls)
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);