/************************************
GENERATED FROM TEMPLATE: DO NOT EDIT
************************************/

import {init} from './main';

function addCSS(url) {
    var head = document.querySelector('head');
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', url);
    head.appendChild(link);
}

export function boot(el, context, config, mediator) {
    config = {
        'assetPath': 'https://interactive.guim.co.uk/testing/2016/06/interactive-labour-liverpool-article-2/1'
    };

    addCSS('https://interactive.guim.co.uk/testing/2016/06/interactive-labour-liverpool-article-2/1/style.css');
    init(el, context, config, mediator);
}
