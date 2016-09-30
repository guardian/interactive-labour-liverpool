var parts = [
  'guardian-labour-liverpool-ewen-macaskill',
  'labour-liverpool-ewen-macaskill',
  'momentum-and-liverpool-is-labour-heading-for-a-split-jeremy-corbyn',
  'angela-eagle-anger-rises-in-her-wallasey-constituency-corbyn-labour',
  'labour-leadership-readers-put-case-for-and-against-corbyn-liverpool',
  'labour-liverpool-clp-constituency',
  'labour-liverpool-meeting',
  'peter-kilfoyle-liverpool-labour-momentum-jeremy-corbyn',
  'explore-series-comradely-debate-at-our-live-public-meeting',
  'explore-series-young-people-merseyside-corbyn',
  'louise-ellman-mp-liverpool-riverside-labour',
  'if-you-value-our-labour-liverpool-series-please-support-it',
  'labour-and-liverpool-the-city-that-reveals-cracks-in-party'
];

var interactive = 'https://interactive.guim.co.uk/2016/06/interactive-labour-liverpool-article-2/1/assets/imgs/';
var glass = [
  '01.png',
  '02.png',
  '03.png',
  '04.png',
  '05.png',
  '06.png',
  '07.png',
  '08.png',
  '09.png',
]

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
    if(window.location.href.indexOf('labour-and-liverpool-the-city-that-reveals-cracks-in-party') > -1){
      box.setAttribute('class', 'element element-interactive interactive element--supporting element--lab-atom longread');
    }
    box.setAttribute('style', 'height: 100%; z-index:3000;');
    box.innerHTML = '<a target="_blank" href="https://membership.theguardian.com/uk/supporter?INTCMP=gdnwb_copts_editorial_mem_longreadewen_embed"><div class="supporting-text"> <h1 class="supporting-text__header">What is Labour & Liverpool?</h1> <p class="supporting-text__content">This weekly series, led by Ewen MacAskill and guided by readers, has turned a spotlight on the Labour party through regular articles. An experiment in collaborative reporting, readers have contributed ideas, suggestions and feedback as Ewen explored Liverpool – bastion of Labour and lens through which we tried to better understand the party, and the challenges it is facing. Use the timeline to explore different episodes - this is the final instalment. </br></br> This is a new approach to our journalism – if you value this work, <u>please support it by becoming a Guardian member.</u></p></div></a>';
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

function isPhotoEssay(){
  if(document.querySelector('.element-image.element--immersive')){
    document.body.setAttribute('data-photo-essay', 'isPhotoEssay');
  }
}

function isAsk(){
  if(window.location.href.indexOf("if-you-value-our-labour-liverpool-series-please-support-it") > -1){
    document.body.setAttribute('data-ask', 'isAsk');
    var container = document.querySelector('.js-article__body');
    var paragraph = document.querySelectorAll('.js-article__body>p')[9];

    var box = document.createElement('figure');
    box.setAttribute('class', 'element element-interactive interactive element--supporting element--lab-story');
    box.setAttribute('style', 'height: 100%;');
    box.innerHTML = '<div class="quoted-text"><h2>Some of your reactions to the series so far</h2> <h1>A refreshing return to old-style journalism. MacAskill reports on meetings from outside London. He reports what people say. He doesn&#8217;t appear to overly &#8217;opinionate&#8217; on everything. <span class="attribute">— Theleme1532</span></h1><h1>These MacAskill articles have been a real breath of fresh air. Please keep them up. One of the few sources of reporting which is not hysterically screaming from one side or the other. <span class="attribute">- gallbladder</span></h1><h1>Hurrah! At last, someone whose thinking and reasoning actually corresponds to the way I think and reason about these issues.Many thanks for this, Ewen. Top job! <span class="attribute">— Martyn Richard Jones</span> </h1> <h1>Really useful article that helps shed some light on what is going on in the labour party and more importantly why.<span class="attribute">- Nimbus020</span></h1></div>';

    container.insertBefore(box, paragraph);
  }
}

function checkPart(){
  for(var i = 0; i < parts.length; i++){
    if(window.location.href.indexOf(parts[i]) > -1){
      var part = document.createElement('div');
      part.innerHTML = '<h1>Part ' + i + ' / </h1>';
      part.setAttribute('class', 'part__label');
      var headline = document.querySelector('.explore-series-headline__content');
      var newHeadline = headline.cloneNode(true);
      var value = i + 1;
      if(value != 13){
        headline.innerHTML = '<span class="lal__kicker">Part ' + value + '</span> <span class="lal__dash">/ </span>' +  newHeadline.innerHTML;
      }else{
        headline.innerHTML = '<span class="lal__kicker">The Long Read</span> <span class="lal__dash">/ </span>' +  newHeadline.innerHTML;
      }
    }
  }
}

function immersive() {
  if(window.location.href.indexOf('labour-and-liverpool-the-city-that-reveals-cracks-in-party') > -1) {
    var image = document.querySelector('.immersive-header-container');
    image.classList.add('explore-immersive');
  }
}

function addGlass() {
  console.log('glass');
  for(var i = 0; i < glass.length; i++) {
    var glassEl = document.createElement('div');
    glassEl.setAttribute('class', 'desktop-only glass glass__shard' + i);
    var container = document.querySelector('.js-article__body');
    var paragraph = document.querySelectorAll('.js-article__body>p')[0];

    container.insertBefore(glassEl, paragraph);
  }
}

function scroller(){
    var container = document.getElementsByClassName('explore-series-headline');
    var glass = document.getElementsByClassName('glass');
    // Create cross browser requestAnimationFrame method:
      window.requestAnimationFrame = window.requestAnimationFrame
       || window.mozRequestAnimationFrame
       || window.webkitRequestAnimationFrame
       || window.msRequestAnimationFrame
       || function(f){setTimeout(f, 1000/60)}

    function parallaxbubbles(){
       var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
       var containerOffset =  container[0].getBoundingClientRect().top;
       var parrallax = containerOffset / 10;
       console.log(containerOffset);
       glass[0].style.marginTop = parrallax * -2 + 'px' // move bubble1 at 20% of scroll rate
       glass[1].style.marginTop = parrallax * -1 + 'px'
       glass[2].style.marginTop = parrallax * -1.5 + 'px'
       glass[3].style.marginTop = parrallax * -2.5 + 'px'
       glass[4].style.marginTop = parrallax * -1 + 'px'
       glass[5].style.marginTop = parrallax * -2 + 'px'
       glass[6].style.marginTop = parrallax * -1.5 + 'px'
       glass[7].style.marginTop = parrallax * -2 + 'px'
       glass[8].style.marginTop = parrallax * -2.8 + 'px'
      }

      window.addEventListener('scroll', function(){ // on page scroll
       requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
      }, false)
}

export function init(el, context, config, mediator) {
    if (document.querySelector('.content--explore-series-article')) {
        removeLabourTagLink();
        if(window.location.href.indexOf("localhost") > -1){
          console.log('local');
        }else{
          addBox();
        }
        if(window.location.href==="https://www.theguardian.com/membership/2016/jul/20/labour-liverpool-clp-constituency"){
          lightbox();
        }
        isPhotoEssay();
        isAsk();
        checkPart();
        immersive();
        if(window.location.href==="https://www.theguardian.com/news/2016/sep/22/labour-and-liverpool-the-city-that-reveals-cracks-in-party" || window.location.href==="http://preview.gutools.co.uk/news/2016/sep/22/labour-and-liverpool-the-city-that-reveals-cracks-in-party"){
          addGlass();
          scroller();
        }
    }
}
