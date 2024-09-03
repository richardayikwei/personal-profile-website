import { assets } from "../assets/assests"
import { Profile } from "../types/profile"
import { Projects } from "../types/projects"
import { Contacts } from "../types/contacts"


export const profile: Profile[] = [
    {
        profilePic: assets.profilePic.profile1,
        name: 'Ayikwei Richard',
        position: 'Frontend Developer',
        motto: 'Change is constant',
        cover: 'I am a front-end developer specializing in the React framework. I am passionate about creating visually appealing websites and apps with  easy to navigate UI"s.',
        stack: {
            css: assets.stackIcons.cssIcon,
            html: assets.stackIcons.htmlIcon,
            javaScript: assets.stackIcons.javascriptIcon,
            jQuery: assets.stackIcons.jqueryIcon,
            react: assets.stackIcons.reactIcon,
            tailwindCSS: assets.stackIcons.tailwindcssIcon,
            typeScript: assets.stackIcons.typescriptIcon,
        },
    },

]

export const projects: Projects[] = [
    {
        image: assets.projectImages.trafalgar,
        title: 'Trafalgar landing page',
        summary: 'A demo landing page built with react and  based on a figma design.',
        link: 'https://trafalgar-react-theta.vercel.app/'
    },
    {
        image: assets.projectImages.photoGallery,
        title: 'Photo Gallery',
        summary: 'A photo gallery built with react using the fetch API with drag and drop capables.',
        link: 'https://photo-gallery-eta-wheat.vercel.app/'
    },
    {
        image: assets.projectImages.porfolio,
        title: 'Portfolio website',
        summary: 'A portfolio website built with react and of custom design.',
        link: 'https://www.richardayikwei.com/'
    },
    {
        image: assets.projectImages.theBlackWebsite,
        title: 'The black website',
        summary: 'A demo website built with jQuery with animation.',
        link: 'https://the-black-website.vercel.app/'
    },
]

export const contacts: Contacts =
{
    image: assets.social.emailIcon,
    summary: 'richardayikweibee@gmail.com',
}
