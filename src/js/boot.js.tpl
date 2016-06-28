/************************************
<%= warningCommentForGeneratedFile %>
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
        'assetPath': '<%= assetPath %>'
    };

    addCSS('<%= assetPath %>/style.css');
    init(el, context, config, mediator);
}