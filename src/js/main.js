import "../bootstrap-5.3.2/scss/bootstrap.scss";
import '../sass/styles.scss'; 


import * as bootstrap from 'bootstrap'


/**
 * Scroll to an element with smooth behavior
 */
const scrollToElement = (el) => {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


