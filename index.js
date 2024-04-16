import {initProgressBlock} from './progressBar/index.js'

function init() {
	const app = document.getElementById('root');
    initProgressBlock(app);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);