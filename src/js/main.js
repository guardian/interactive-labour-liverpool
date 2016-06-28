 function addCss(css) {
    var el = document.createElement('link');
    var head = document.querySelector('head');
    el.setAttribute('href', css);
    el.setAttribute('rel', 'stylesheet');
    el.setAttribute('type', 'text/css');
    el.setAttribute('class', 'boot-membership');
    head.appendChild(el);
}

 function addLogoHeaderElement(element) {
     var titleLink = document.createElement('a');
     var bylineLink = document.createElement('a');
     var cutout = document.createElement('div');
     var header = document.getElementsByClassName('tonal content--immersive-article');

     titleLink.setAttribute('href', 'https://www.theguardian.com/membership/ng-interactive/2016/jun/23/labour-liverpool');
     titleLink.setAttribute('class', 'series-identity-title');
     titleLink.innerHTML = 'Labour & Liverpool';
     bylineLink.setAttribute('href', 'https://www.theguardian.com/membership/ng-interactive/2016/jun/23/labour-liverpool');
     bylineLink.setAttribute('class', 'series-identity-byline');
     bylineLink.innerHTML = 'with Ewen MacAskill';
     cutout.setAttribute('class', element);
     cutout.appendChild(titleLink);
     cutout.appendChild(bylineLink);
     header[0].appendChild(cutout);
 }

function addHeaderElement(element) {
    var cutout = document.createElement('div');
    var header = document.getElementsByClassName('tonal content--immersive-article');
    cutout.setAttribute('class', element);
    header[0].appendChild(cutout);
}

function addHeader(element) {
    var cutout = document.createElement('div');
    var header = document.getElementsByClassName('tonal content--immersive-article');
    var headline = document.createElement('h1');
    var pageHeadline = document.getElementsByClassName('content__headline');
    var headerBackground = document.createElement('div');
    headerBackground.setAttribute('class', 'header-background');
    headline.innerHTML = pageHeadline[0].innerText;
    cutout.appendChild(headline);
    cutout.appendChild(headerBackground);
    cutout.setAttribute('class', element);
    header[0].appendChild(cutout);
}

function addCutout() {
    var cutOut = document.createElement('div');
    cutOut.setAttribute('class', 'membership-cutout');
    var body = document.getElementsByClassName('content__article-body');
    var child = body[0].childNodes[0];
    body[0].insertBefore(cutOut, child);
}

function addVideoStyle(el, index) {
    var videoEl = document.createElement('div');
    var video = document.getElementsByClassName(el);
    videoEl.setAttribute('class', 'membership-video-background');
    video[index].appendChild(videoEl);
}

function addLinks() {
    var timeline = document.createElement('div');
    timeline.setAttribute('class', 'membership-timeline');
    var body = document.getElementsByClassName('content__article-body');
    var child = body[0].childNodes[1];
    var timeLineItem = document.createElement('div');
    var timeLineItemTwo = document.createElement('div');
    timeLineItem.setAttribute('class', 'timeline-item');
    timeLineItemTwo.setAttribute('class', 'timeline-item');
    timeline.appendChild(timeLineItem);
    timeline.appendChild(timeLineItemTwo);
    body[0].insertBefore(timeline, child);
}

function removeLabourTagLink() {
    var firstPara = document.querySelectorAll('.content__article-body p')[0];
    var labourLink = firstPara.getElementsByTagName('a')[0];
    var labourText = document.createElement('span');

    labourText.innerHTML = labourLink.innerHTML;
    firstPara.replaceChild(labourText, labourLink);
}

function buildBio() {
    function buildTextBox() {
        var textBox = document.createElement('div');
        var quote = document.createElement('div');
        var image = document.createElement('img');

        textBox.setAttribute('class', 'ewen-textbox');
        quote.setAttribute('class', 'textbox-container');
        quote.innerHTML = 'Want to ask a question or contact me directly?';
        image.setAttribute('src', 'https://interactive.guim.co.uk/2016/06/interactive-labour-liverpool/1466688646612/assets/imgs/Ewen.png');
        textBox.appendChild(quote);
        textBox.appendChild(image);

        return textBox;
    }
    function buildContactButtons() {
        var contactButtons = document.createElement('div');
        var twitterButton = document.createElement('a');
        var emailButton = document.createElement('a');

        contactButtons.setAttribute('class', 'contact-buttons');
        twitterButton.setAttribute('class', 'contact-twitter');
        twitterButton.setAttribute('href', 'https://twitter.com/ewenmacaskill');
        twitterButton.innerHTML = 'Twitter';
        emailButton.setAttribute('class', 'contact-mail');
        emailButton.setAttribute('href', 'mailto:e.macaskill@guardian.co.uk');
        emailButton.innerHTML = 'Email';
        contactButtons.appendChild(twitterButton);
        contactButtons.appendChild(emailButton);

        return contactButtons;
    }
    var bio = document.createElement('div');

    bio.setAttribute('id', 'contact-ewen-section');
    bio.appendChild(buildTextBox());
    bio.appendChild(buildContactButtons());

    return bio;
}

function buildFooter() {
    var footer = document.createElement('div');
    var footerHeader = document.createElement('div');
    var footerSlice = document.createElement('div');

    footerHeader.setAttribute('class', 'fc-container__header membership-footer-header');
    footerSlice.setAttribute('class', 'fc-slice-wrapper');
    footerHeader.innerHTML = 'Sign up for the Labour and Liverpool Newsletter';
    footerSlice.innerHTML = '<iframe id="iframe_id" class="membership-form" height="350px" width="100%" src="https://s3.amazonaws.com/gdn-cdn/embed/labour-and-liverpool-forms/emailform.html"></iframe>';
    footer.setAttribute('class', 'membership-footer');
    footer.id = 'footer';
    footer.appendChild(footerHeader);
    footer.appendChild(footerSlice);

    return footer;
}

function addFooter() {
    var main = document.getElementsByClassName('content__main');
    var footerContainer = document.createElement('div');
    var column = document.createElement('div');
    var footer = buildFooter();
    var bio = buildBio();

    column.setAttribute('class', 'content__main-column');
    footerContainer.setAttribute('class', 'gs-container');
    column.appendChild(footer);
    column.appendChild(bio);
    footerContainer.appendChild(column);
    main[0].appendChild(footerContainer);
}

function addBox() {
    var container = document.querySelector('.js-article__body');
    var paragraph = container.querySelectorAll('p')[9];

    var box = document.createElement('figure');
    box.setAttribute('class', 'element element-interactive interactive element--supporting');
    box.setAttribute('style', 'height: 100%;');
    box.innerHTML = '<div class="supporting-text"> <h1 class="supporting-text__header"> Join us as we launch an innovative form of collaborative journalism </h1> <p class="supporting-text__content"> Follow a Guardian journalist as they dig into a topic off the beaten news track, track their working out as they go, and contribute ideas, suggestions and feedback. With weekly updates, we hope to keep interested readers updated but not inundated on the issues they care about, and give them the chance to collaborate in our reporting. </p> <a class="supporting-text__footer" href="#footer">Sign up to the Labour &amp; Liverpool newsletter</a></div>';

    container.insertBefore(box, paragraph);
}

export function init(el, context, config, mediator) {
    if (document.querySelector('.content--immersive-article')) {
        removeLabourTagLink();
        addHeaderElement('week-title');
        addLogoHeaderElement('series-identity');
        addHeader('headline');
        addCutout();
        for (var i = 0; i < document.getElementsByClassName('element-video').length; i++) {
            addVideoStyle('element-video', i);
        }
        addLinks();
        addFooter();
        addBox();
    }
}
