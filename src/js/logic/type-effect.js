export class TypeEffect {
    constructor() {
        this.words = []
        this.spanArray = []
        this.wrapper = document.querySelector('.js-type-effect-wrapper') 
        if (this.wrapper) {
            this.init()
        }
    }

    init = () => {
        this.splitLineInWords()
        this.emptyLine()
        this.animateLine()
    }

    splitLineInWords = () => {
        this.line = this.wrapper.querySelector('p')
        this.words = this.line.textContent.split(' ')
    }

    emptyLine = () => {
        this.line.textContent = ''
        this.wrapper.style.opacity = 1
    }

    animateLine = () => {
        this.words.forEach((word) => {
            const span = document.createElement('span')
            span.classList.add('opacity-0')
            span.textContent = word + ' '
            this.line.appendChild(span)
            this.spanArray.push(span)
        })

        this.line.classList.remove('opacity-0')

        this.spanArray.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('ll-text-effect-fade-in')
            }, 200 * index)
        })
    }
}











