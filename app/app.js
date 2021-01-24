window.addEventListener('load', main)

/**
 * Main function that runs at window load
 */
function main() {
    addEventListeners()
}

function addEventListeners() {
    showH1()
    showTop()
    showFooter()
}

function showH1() {
    const devH1 = document.querySelector('.dev-h1')
    const photoH1 = document.querySelector('.photo-h1')

    setTimeout(()=> {
        devH1.style.transform = 'translate(0%)'
    },1200)

    setTimeout(()=> {
        photoH1.style.transform = 'translate(0%)'
    },1200)

    setTimeout(()=> {        
        devH1.classList.add('h1-opacity')
    },1700)

    setTimeout(()=> {
        photoH1.classList.add('h1-opacity')
    },1900)
}

function showTop() {
    const h2 = document.querySelector('h2')
    const h3 = document.querySelector('h3')

    setTimeout(()=> {
        h2.style.opacity ='1'
    }, 100)

    setTimeout(()=> {
        h3.style.opacity ='1'
    }, 900)
}

function showFooter() {
    const footer = document.querySelector('footer')

    setTimeout(()=> {
        footer.style.opacity ='1'
    },2000)
}