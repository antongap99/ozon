import {initProgressBlock} from './progressBar/index.js'

const init = () =>  {
    const options = {
        app: document.getElementById('root'),
        progressName: 'progressTest',
        size: 150,
        stroke: 10,
        defaultValue: 40,
    }
    initProgressBlock(options);
}

document.addEventListener('DOMContentLoaded', init);