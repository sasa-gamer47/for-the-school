const mapsButton = document.getElementById('maps-button')

mapsButton.addEventListener('click', () => {    
    const mapContent = document.getElementById('map-content')
    document.body.appendChild(mapContent)
    const mapsIframe = document.createElement('iframe')
    mapsIframe.src = 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10337.770084310303!2d17.235533287194436!3d40.78217851918741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1strulli%20alberobello!5e1!3m2!1sit!2sit!4v1617047574364!5m2!1sit!2sit' 
    mapsIframe.width = '1000'
    mapsIframe.height = '450'
    mapsIframe.style.border = '0'
    mapsIframe.style.transform = 'translateY(-1370px)'
    mapsIframe.style.marginLeft = '220px'
    mapContent.appendChild(mapsIframe)

    const closeButton = document.getElementById('close-button')

    closeButton.classList.remove('hide')
    mapsButton.classList.add('hide')

    closeButton.addEventListener('click', () => {
    mapContent.removeChild(mapsIframe)
    closeButton.classList.add('hide')
    mapsButton.classList.remove('hide')
})
})