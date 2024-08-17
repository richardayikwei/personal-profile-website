import { assets } from "../assets/assests"
import { Profile } from "../types/profile"


export const profile : Profile[] = [
    {
        name: 'Ayikwei Richard',
        position: 'Frontend Developer',
        motto: 'Change is constant',
        cover: 'I am a front-end developer specializing in the React framework. I am passionate about creating visually appealing websites and apps with  easy to navigate UI"s',
        stack: {
            css: assets.logos.logo1,
            html: assets.stackIcons.htmlIcon,
            javaScript: assets.stackIcons.javascriptIcon,
            jQuery: assets.stackIcons.jqueryIcon,
            react: assets.stackIcons.reactIcon,
            tailwindCSS: assets.stackIcons.tailwindcssIcon,
            typeScript: assets.stackIcons.typescriptIcon,
        },
    }
]