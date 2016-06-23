import mainHTML from './text/main.html!text'
import share from './lib/share'
import dot from 'olado/doT';

var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');

export function init(el, context, config, mediator) {
    //const mainTemplate = mainHTML.replace(/%assetPath%/g, config.assetPath);
    const templateFn = dot.template(mainHTML);

    el.innerHTML = templateFn({ headline: 'Labour & Liverpool week two headline local' });


    [].slice.apply(el.querySelectorAll('.interactive-share')).forEach(shareEl => {
        var network = shareEl.getAttribute('data-network');
        shareEl.addEventListener('click', () => shareFn(network));
    });
}
