define([], function () {
    return {
        boot: function (el, context, config, mediator) {
            function addCss(css) {
                var el = document.createElement('link');
                var head = document.querySelector('head');
                el.setAttribute('href', css);
                el.setAttribute('rel', 'stylesheet');
                el.setAttribute('type', 'text/css');
                el.setAttribute('class', 'boot-membership');
                head.appendChild(el);
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

            function formatHeader() {
                var pageHeader = document.getElementsByClassName('content__headline');
                var headerContent = pageHeader[0].innerHTML;
                var headerAmended = headerContent.split('-');
                pageHeader[0].innerHTML = headerAmended[0] + '<span class="membership-byline">' + headerAmended[1] + '</span>';
            }

            function formatStandFirst() {
                var standfirst = document.getElementsByClassName('content__standfirst');
                var body = document.getElementsByClassName('content__article-body');
                var child = body[0].childNodes[0];
                var newStandfirst = document.createElement('div');
                newStandfirst.setAttribute('class', 'membership-standfirst');
                newStandfirst.innerHTML = standfirst[0].innerText;
                body[0].insertBefore(newStandfirst, child);
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

            function addBio() {
                var main = document.getElementsByClassName('content__main');
                var bioColumn = document.createElement('div');
                var bioContainer = document.createElement('aside');
                var bio = document.createElement('div');
                var bioHeadshot = document.createElement('div');
                var bioImage = document.createElement('img');
                var bioLinks = document.createElement('div');
                var bioTwitter = document.createElement('div');
                var bioText = document.createElement('div');

                bioImage.setAttribute('src', 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/contributor/2015/8/18/1439913873894/Ewen-MacAskill-R.png?w=300&q=55&auto=format&usm=12&fit=max&s=2c8dc813795a8c11dd98e28377a5893f');
                bioHeadshot.setAttribute('class', 'bio-headshot');
                bio.setAttribute('class', 'membership-interactive__bio');
                bioColumn.setAttribute('class', 'content__main-column');
                bioContainer.setAttribute('class', 'element--immersive bio gs-container');
                bioTwitter.setAttribute('class', 'bio-twitter');
                bioLinks.setAttribute('class', 'bio-links');
                bioText.setAttribute('class', 'bio-text');
                bioTwitter.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"' +
                    'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12.42px"' +
                    'height="10.159px" viewBox="0 0 12.42 10.159" enable-background="new 0 0 12.42 10.159"' +
                    'xml:space="preserve"><g><path fill="#00578A"' +
                    'd="M10.932,2.63c0,0.096,0.027,0.218,0.027,0.314c0,3.247-2.497,6.984-7.012,6.984c-1.364,0-2.729-0.382-3.779-1.078c0.164,0.041,0.382,0,0.586,0.041c1.146-0.014,2.224-0.382,3.042-1.078c-1.091,0-1.951-0.709-2.292-1.692C1.874,6.218,2.201,6.19,2.624,6.082C1.519,5.822,0.632,4.908,0.632,3.64c0.218,0.109,0.914,0.327,1.132,0.287C1.096,3.53,0.66,2.698,0.66,1.88c0-0.437,0.15-0.873,0.327-1.241c1.296,1.514,3.001,2.469,5.088,2.578c-0.055-0.15-0.068-0.409-0.068-0.56c0-1.337,1.119-2.455,2.456-2.455c0.764,0,1.364,0.313,1.814,0.764c0.532-0.041,1.091-0.354,1.569-0.586c-0.178,0.586-0.546,1.05-1.105,1.364c0.532-0.068,0.955-0.191,1.432-0.396C11.846,1.825,11.422,2.262,10.932,2.63z"></path></g></svg>' +
                    '<a target="_blank" href="https://www.twitter.com/ewenmacaskill"><spanclass="text">Twitter</span></a></div>';

                bioText.innerHTML = '<h1>A little about Ewen</h1> I have spent more than 40 years as a journalist, half of that' +
                    'time on the Guardian. I&apos;ve been chief political correspondent, diplomatic editor and Washington bureau' +
                    'chief, and recently worked as part of the Pulitzer Prize-winning team that broke the Edward Snowden leaks.' +
                    'Born in Glasgow, I&apos;m now based in London covering defence and intelligence but also occasionally politics -' +
                    'from the Scottish referendum to Jeremy Corbyn&apos;s election campaign. Outside of journalism, mountaineering has' +
                    'consumed me since my early 20s, and so too has football. I am in a book club, a film club and a veterans' +
                    'club, the last an occasional pub gathering to argue about everything but mainly politics.';
                bioLinks.appendChild(bioTwitter);
                bioHeadshot.appendChild(bioImage);
                bioHeadshot.appendChild(bioLinks);
                bio.appendChild(bioHeadshot);
                bio.appendChild(bioText);
                bioColumn.appendChild(bio);
                bioContainer.appendChild(bioColumn);
                main[0].appendChild(bioContainer);
            }

            function addFooter() {
                var main = document.getElementsByClassName('content__main');
                var footer = document.createElement('div');
                var footerContainer = document.createElement('div')
                var footerHeader = document.createElement('div');
                var footerSlice = document.createElement('div');
                footerHeader.setAttribute('class', 'fc-container__header membership-footer-header');
                footerSlice.setAttribute('class', 'fc-slice-wrapper');
                footerHeader.innerHTML = "Sign up for the Labour and Liverpool Newsletter";
                footerSlice.innerHTML = '<iframe id="iframe_id" class="membership-form" height="310px" width="100%" src="https://s3.amazonaws.com/gdn-cdn/embed/labour-and-liverpool-forms/emailform.html"></iframe>';
                footer.setAttribute('class', 'membership-footer gs-container');
                footer.appendChild(footerHeader);
                footer.appendChild(footerSlice);
                main[0].appendChild(footer);
            }

            if (document.querySelector('.content--immersive-article')) {
                addCss('https://s3.amazonaws.com/gdn-cdn/membership-article-two/style.css'/*'/style.css'*/);
                addHeaderElement('week-title');
                addHeaderElement('series-identity');
                addHeader('headline');
                addCutout();
                for (var i = 0; i < document.getElementsByClassName('element-video').length; i++) {
                    addVideoStyle('element-video', i);
                }
                addLinks();
                addBio();
                addFooter();
            }
        }
    };
});
