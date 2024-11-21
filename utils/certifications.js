import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'DevOps on AWS Specialization',
            platform: 'Coursera',
            link: '',
            date: 'Working...',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Docker for absolute beginners',
            platform: 'Coursera',
            link: '',
            date: 'Working...',
            logo: '/assets/docker.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'AWS Cloud Technical Essentials',
            platform: 'Coursera',
            link: '',
            date: 'Working...',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Certified Mobile and Web App Developer',
            platform: 'SMIT | Saylani Mass IT Training',
            link: '',
            date: 'Working...',
            logo: '/assets/smit.png',
            aos: 'zoom-out-right'
        },
        {
            size: 2,
            title: 'Hackathon on creating OLX App using PWA Development',
            platform: 'SMIT | Saylani Mass IT Training',
            link: '',
            date: 'Working...',
            logo: '/assets/smit.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications