import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Md Tarikul Islam,',
    decrypTexts: [
        'A Web Developer',
        'A Full Stack Developer',
        'I build things for the web',
        'A Video Editor',
        'A Web3 Developer',
        'A Traveler',
    ],
    desciption: `A dedicated and disciplined Full Stack Development who love to create things for internet, having more than years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:taaraqahmed@gmail.com?subject=Hello')
    }
}

export default outer
