const cookieBannerAcceptAll = () => {
    console.log('acceptAll')
}

const cookieBannerToggleList = () => {
    const el = document.querySelector('.app-cookie-banner__list');

    console.log('toggle')

    if(el) {
        el.classList.toggle('active');
    }
}