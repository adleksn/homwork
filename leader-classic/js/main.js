
// Бургер

document.querySelector('.burger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.mobile-nav').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});





// ====================
// Slider

document.addEventListener("DOMContentLoaded", initSlider);

const sliderEl = document.querySelector("#range");
const sliderValue = document.querySelector(".portfolio__slider--value");
const DEFAULT_VALUE = 30;

sliderEl.min = 0;
sliderEl.max = 100;
sliderEl.value = DEFAULT_VALUE;

sliderEl.addEventListener("input", (event) => {
    const currentValue = parseInt(event.target.value);

    sliderValue.textContent = currentValue + "%";

    let progress;
    if (currentValue <= DEFAULT_VALUE) {

        progress = (currentValue / DEFAULT_VALUE) * 30;
    } else {

        progress = 30 + ((currentValue - DEFAULT_VALUE) / (100 - DEFAULT_VALUE)) * 70;
    }

    sliderEl.style.background = `
    linear-gradient(to right, 
      #425A4B 0% ${progress}%, 
      #303030 ${progress}% 100%
    )`;
});

function initSlider() {
    sliderValue.textContent = DEFAULT_VALUE + "%";

    sliderEl.style.background = `
    linear-gradient(to right, 
      #425A4B 0% 30%, 
      #303030 0% 100%
    )`;
}



// ==============
// Accordion

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget;
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
        const accordionOpenedControl = accordionOpenedItem?.querySelector('.accordion-list__control');

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;

        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            const openedContent = accordionOpenedControl.nextElementSibling;
            openedContent.style.maxHeight = null;
        }

        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});
