function removeLabourTagLink() {
    var firstPara = document.querySelectorAll('.content__article-body p')[0];
    var labourLink = firstPara.getElementsByTagName('a')[0];
    var labourText = document.createElement('span');

    if (labourLink) {
        labourText.innerHTML = labourLink.innerHTML;
        firstPara.replaceChild(labourText, labourLink);
    }
}

function addVideoStyle(el, index) {
    var videoEl = document.createElement('div');
    var video = document.getElementsByClassName(el);
    videoEl.setAttribute('class', 'membership-video-background');
    video[index].appendChild(videoEl);
}

function addBox() {
    var container = document.querySelector('.js-article__body');
    var paragraph = document.querySelectorAll('.js-article__body>p')[9];

    var box = document.createElement('figure');
    box.setAttribute('class', 'element element-interactive interactive element--supporting element--lab-atom');
    box.setAttribute('style', 'height: 100%;');
    box.innerHTML = '<div class="supporting-text"> <h1 class="supporting-text__header">What is Labour & Liverpool?</h1> <p class="supporting-text__content">This weekly series, led by Ewen MacAskill and guided by you, turns a spotlight on the Labour party. It is an experiment in collaborative reporting: we need you to contribute ideas, suggestions and feedback as Ewen visits Liverpool – bastion of Labour and lens through which we hope to understand the party – in the run-up to September’s party conference in the city. Weekly reports should keep you updated but not inundated.</p></div>';

    container.insertBefore(box, paragraph);
}

function addPartNumber() {

}

export function init(el, context, config, mediator) {
    if (document.querySelector('.content--labour-liverpool-article')) {
        removeLabourTagLink();
        // for (var i = 0; i < document.getElementsByClassName('element-video').length; i++) {
        //     addVideoStyle('element-video', i);
        // }
        addBox();
    }
}
