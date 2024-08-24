import { assets } from "../assets/assests"
import { Profile } from "../types/profile"
import { Projects } from "../types/projects"


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

export const projects : Projects[] = [
    {
        image: assets.projectImages.trafalgar,
        title: 'Trafalgar landing page',
        summary: 'A demo landing page built based on a figma design'
    },
    {
        image: assets.projectImages.porfolio,
        title: 'Portfolio website',
        summary: 'A portfolio website of custom design'
    },
    {
        image: assets.projectImages.theBlackWebsite,
        title: 'The black website',
        summary: 'A demo website built with jQuery'
    },
]