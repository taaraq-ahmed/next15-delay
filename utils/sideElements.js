import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/taaraq-ahmed/',
        'instagram': 'https://www.instagram.com/taaraqahmed/',
        'twitter': 'https://x.com/taaraqahmed/',
        'linkedin': 'https://www.linkedin.com/in/taaraqahmed/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'taaraqahmed@gmail.com',
        onClick: () => openLink('mailto:taaraqahmed@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements