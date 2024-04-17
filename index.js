import {initProgressBlock} from './progressBar/index.js'

function init() {
    const options = {
        app: document.getElementById('root'),
        progressName: 'progressTest',
        size: 150
    }
    initProgressBlock(options);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);