export class Marquee {
    constructor() {
        this.marqueeWrapper = document.querySelector('.js-marquee-wrapper')
        if (!this.marqueeWrapper) {
            return false
        }
        this.marqueeTextElements = document.querySelectorAll('.js-marquee-text-element')
        this.chapterDescriptionWrapper = document.querySelector('.js-chapter-description-wrapper')
        this.chapterDescriptionTextElements = document.querySelectorAll('.js-chapter-description-text-element')
        this.heartRectangleGoals = document.querySelector('.js-heart-rectangle-goals')
        this.heartRectangleAudiences = document.querySelector('.js-heart-rectangle-audiences')
        this.heartRectangleInspiration = document.querySelector('.js-heart-rectangle-inspiration')
        this.heartRectangleBrandConcept = document.querySelector('.js-heart-rectangle-brand-concept')
        this.heartRectangleCompetitors = document.querySelector('.js-heart-rectangle-competitors')
        this.heartRectangleVisualIdentity = document.querySelector('.js-heart-rectangle-visual-identity')
        this.heartRectangleBrandStory = document.querySelector('.js-heart-rectangle-brand-story')
        this.heartRectangleToneOfVoice = document.querySelector('.js-heart-rectangle-tone-of-voice')
        this.init()
    }

    init = () => {}

    showMarquee = (rectangle) => {
        let marqueeText = ''
        let chapterDescriptionText = ''
        if (rectangle === this.heartRectangleGoals) {
            marqueeText = 'Goals'
            chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        }
        if (rectangle === this.heartRectangleAudiences) {
            marqueeText = 'Audiences'
            chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        }
        if (rectangle === this.heartRectangleInspiration) {
            marqueeText = 'Inspiration'
            chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        }
        if (rectangle === this.heartRectangleBrandConcept) {
            marqueeText = 'Brand Concept'
            chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        }
        if (rectangle === this.heartRectangleCompetitors) {
            marqueeText = 'Competitors'
            chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        }
        if (rectangle === this.heartRectangleVisualIdentity) {
            marqueeText = 'Visual Identity'
            chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        }
        if (rectangle === this.heartRectangleBrandStory) {
            marqueeText = 'Brand Story'
            chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        }
        if (rectangle === this.heartRectangleToneOfVoice) {
            marqueeText = 'Tone Of Voice'
            chapterDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        }
        this.marqueeTextElements.forEach(el => {
            el.textContent = marqueeText
        })
        this.chapterDescriptionTextElements.forEach(el => {
            el.textContent = chapterDescriptionText
        })
        this.marqueeWrapper.style.display = 'flex'
        this.chapterDescriptionWrapper.style.display = 'flex'
    }

    hideMarquee = () => {
        this.marqueeWrapper.style.display = 'none'
        this.chapterDescriptionWrapper.style.display = 'none'
    }
}




