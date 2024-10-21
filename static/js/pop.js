const pop = document.getElementById('pop');
const overlay = document.getElementById('overlay');

function popup(card) {
    document.getElementById('pop-heading').textContent = card.getAttribute('data-title');
    document.getElementById('pop-description').textContent = card.getAttribute('data-description');
    document.getElementById('pop-icon').src = card.getAttribute('data-icon');
    document.getElementById('pop-category').textContent = card.getAttribute('data-category');
    document.getElementById('pop-date').textContent = card.getAttribute('data-date');
    url = card.getAttribute('data-url');

    if (!card.hasAttribute('data-file')) {
        document.getElementById('file-description').style.display = 'none';
    }
    else {
        file = card.getAttribute('data-file');
        document.getElementById('file-description').style.display = 'block';
        document.getElementById('file-download').setAttribute('href', file)
    }
    if (url == "None") {
        document.getElementById('frame-part').style.display = 'none';
    } 
    else {
        document.getElementById('frame-part').style.display = 'flex';
        document.getElementById('play-button').setAttribute('href', url);
        document.getElementById('frame').src = url
    }
    if (window.innerWidth > 800) {
        let takenHeight = document.getElementById('fixed').offsetHeight;
        let popHeight = pop.offsetHeight;
        var description = document.getElementById('pop-description-container');
        description.style.maxHeight = popHeight-takenHeight-45+'px';
    } /*else {
        let takenHeight = document.getElementById('fixed').offsetHeight+document.getElementById('frame').offsetHeight+30;
        let popHeight = pop.offsetHeight;
        var description = document.getElementById('pop-description-container');
        description.style.maxHeight = popHeight-takenHeight-45+'px';

    }*/
    pop.style.visibility = 'visible';
    overlay.style.visibility = 'visible';
    document.body.style.overflowY = 'hidden';
}
function popupClose() {
    document.body.style.overflowY = 'scroll';
    pop.style.visibility = 'hidden';
    pop.classList = [];
    overlay.style.visibility = 'hidden';
}