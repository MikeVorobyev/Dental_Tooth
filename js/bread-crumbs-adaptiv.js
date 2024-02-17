// Адаптация для хлебных крошек
const sectionBreadcrumbs = document.querySelector('.section__breadcrumbs');
const breadcrumbsLink = sectionBreadcrumbs.querySelectorAll('.breadcrumbs__link');

const arrBreadcrumbsTextHTML = [];

function addDotsForBreadCrumbs() {
    arrBreadcrumbsTextHTML.push(breadcrumbsLink[breadcrumbsLink.length - 1].innerText)

    let viewportWidth = innerWidth;
    const points = '...'
    
    if(viewportWidth < 700 && breadcrumbsLink[breadcrumbsLink.length - 1].innerText.length > 20) {
        breadcrumbsLink[breadcrumbsLink.length - 1].innerText = breadcrumbsLink[breadcrumbsLink.length - 1].innerText.slice(0, 20) + points;
    }

    if(viewportWidth > 700) {
        breadcrumbsLink[breadcrumbsLink.length - 1].innerText = arrBreadcrumbsTextHTML[0];
    }
}

addDotsForBreadCrumbs()

window.addEventListener('resize', () => {
addDotsForBreadCrumbs()
});