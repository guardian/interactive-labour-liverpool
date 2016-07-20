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

function addCutout() {
    var cutOut = document.createElement('div');
    cutOut.setAttribute('class', 'membership-cutout');
    var body = document.getElementsByClassName('content__article-body');
    var child = body[0].childNodes[0];
    body[0].insertBefore(cutOut, child);
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

function addLightBox(){
  var link = '<a href="#img-2" class="article__img-container js-gallerythumbs" data-link-name="Launch Article Lightbox" data-is-ajax="">';
  var linkEnd = '</a>';
  var expander = '<span class="inline-expand-image inline-icon centered-icon rounded-icon article__fullscreen modern-visible"><svg width="22" height="22" viewBox="0 0 22 22" class="centered-icon__svg rounded-icon__svg article__fullscreen__svg modern-visible__svg inline-expand-image__svg inline-icon__svg"><path d="M3.4 20.2L9 14.5 7.5 13l-5.7 5.6L1 14H0v7.5l.5.5H8v-1l-4.6-.8M18.7 1.9L13 7.6 14.4 9l5.7-5.7.5 4.7h1.2V.6l-.5-.5H14v1.2l4.7.6"></path></svg></span>';
  var image = document.querySelector('.element--supporting');
  var imageWrapper = document.querySelector('.u-responsive-ratio')[0];
  var caption = document.querySelector('.caption--img')[0];

  image.insertBefore(link, imageWrapper);
  image.insertBefore(linkEnd, caption);

}

export function init(el, context, config, mediator) {
    if (document.querySelector('.content--labour-liverpool-article')) {
        removeLabourTagLink();
        // addCutout();
        // for (var i = 0; i < document.getElementsByClassName('element-video').length; i++) {
        //     addVideoStyle('element-video', i);
        // }
        addBox();
        addLightBox();
    }
}
