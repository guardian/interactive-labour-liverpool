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

function lightbox(){
  var figure = document.querySelector('.element--supporting');
  var lightbox = document.createElement('div');
  lightbox.setAttribute('class', 'lightbox--boot');
  var image = document.querySelector('.element--supporting > .u-responsive-ratio > picture > .gu-image');
  var imageCopy = image.cloneNode(true);
  imageCopy.setAttribute('src','https://i.guim.co.uk/img/media/76ce62a711f9e603241435d96c5389000df2a799/0_0_596_842/master/596.jpg?w=380&q=20&auto=format&usm=12&fit=max&dpr=2&s=d548fb737be4df8aeddd70d00f6bc79a');
  var close = document.createElement('div');
  close.setAttribute('class', 'close-button');
  close.innerHTML = '<svg width="28px" height="28px" viewBox="6 6 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="" stroke="none" fill="#000000" fill-rule="evenodd" points="20 23.0545455 8.13636364 33.8545455 6.37727273 32.0954545 17.2181818 20.2727273 6.37727273 8.45 8.13636364 6.69090909 20 17.4909091 31.8227273 6.65 33.5818182 8.40909091 22.7818182 20.2727273 33.5818182 32.1363636 31.8227273 33.8954545"></polygon></svg>';
  lightbox.appendChild(imageCopy);
  lightbox.appendChild(close);
  var container = document.querySelector('body');
  var paragraph = document.querySelectorAll('.l-side-margins')[0];

  container.insertBefore(lightbox, paragraph);

  figure.addEventListener('click', function(){
    lightbox.setAttribute('data-open', 'visible');
  });

  close.addEventListener('click', function(){
    lightbox.removeAttribute('data-open');
  });
}


export function init(el, context, config, mediator) {
    if (document.querySelector('.content--labour-liverpool-article')) {
        removeLabourTagLink();
        // for (var i = 0; i < document.getElementsByClassName('element-video').length; i++) {
        //     addVideoStyle('element-video', i);
        // }
        addBox();
        lightbox();
    }
}
