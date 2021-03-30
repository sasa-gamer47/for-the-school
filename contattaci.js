const CopyRightLink = document.getElementById('CopyRight')
const linksContainer = document.getElementById('links-container')
const footer = document.querySelector('footer')

CopyRightLink.addEventListener('click', () => {
    document.body.classList.add('body')
    linksContainer.classList.add('hide')
    footer.classList.add('hide')

    const box = document.createElement('div')
    box.classList.add('container')
    document.body.appendChild(box)

    const button = document.createElement('button')
    button.innerHTML = 'x'
    button.classList.add('close-button')
    box.appendChild(button)
    console.log(box);

    const text = document.createElement('p')
    text.classList.add('text')
    text.innerHTML = "(in inglese: All Rights Reserved) è una formula con cui il titolare del diritto d'autore dichiara che una determinata opera dell'ingegno non è riproducibile senza la sua espressa autorizzazione. Nella maggior parte dei paesi le leggi sul diritto d'autore non richiedono questa dicitura, sebbene la formula persista poiché probabilmente intesa come protezione sul ''diritto di copia'' (copyright). Un tempo l'apposizione dell'espressione Tutti i diritti riservati era richiesta come nota che tutti i diritti di copia erano di proprietà di colui che deteneva il diritto d'autore, e che ci sarebbero state azioni legali contro le eventuali violazioni del diritto di copia o copyright."
    box.appendChild(text)
    console.log(box);

    button.addEventListener('click', () => {
        document.body.classList.remove('body')
        linksContainer.classList.remove('hide')
        footer.classList.remove('hide')
        document.body.removeChild(box)
    })
})