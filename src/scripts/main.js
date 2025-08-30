function initReadMore() {
    const charLimit = 200;
    const cards = document.querySelectorAll('.best-doctor-outer');

    cards.forEach(card => {
        const content = card.querySelector('.content-inner');
        const p = content.querySelector('p');

        if (p && p.textContent.length > charLimit && !content.querySelector('.read-more-btn')) {
            const readMoreBtn = document.createElement('button');
            readMoreBtn.className = 'read-more-btn';
            readMoreBtn.innerText = 'Read more';
            content.appendChild(readMoreBtn);

            readMoreBtn.addEventListener('click', (event) => {
                content.classList.toggle('expanded');
                if (content.classList.contains('expanded')) {
                    event.target.innerText = 'Read less';
                } else {
                    event.target.innerText = 'Read more';
                }
            });
        }
    });
}

window.addEventListener('load', () => {
    setTimeout(initReadMore, 500);
});

window.addEventListener('resize', () => {

});