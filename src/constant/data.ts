import { assets } from "../assets/assests"
import { Profile } from "../types/profile"
import { Projects } from "../types/projects"
import { Contacts } from "../types/contacts"
import { SocialLinks } from "../types/socialLinks"


export const profile: Profile[] = [
    {
        profilePic: assets.profilePic.profile1,
        name: 'Ayikwei Richard',
        position: 'Frontend Developer',
        motto: 'Change is constant',
        cover: 'I am a front-end developer with a love for React. I am passionate about programming, technology, and creating visually appealing websites and apps with easy-to-navigate UIs.',
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

export const articles = [
    {
        image: assets.projectImages.trafalgar,
        title: 'Having Data May Not Be Enough — You Need to Check Its Power Level',
        summary: 'An Article on the effects of Power on data and data analysis',
        link: 'https://medium.com/@richardayikweibee/having-data-may-not-be-enough-you-need-to-check-its-power-level-1ee0376ad57f'
    },
    {
        image: assets.projectImages.trafalgar,
        title: 'Your Corner Restaurant Might Need a Data Analyst (or Even a Data Scientist)',
        summary: 'An Article on how data can help anyone to improve their business',
        link: 'https://medium.com/@richardayikweibee/your-corner-restaurant-might-need-a-data-analyst-or-even-a-data-scientist-b8495fa369b4'
    },
    {
        image: assets.projectImages.trafalgar,
        title: 'Your Calendar Might Predict Your Fitness Habits',
        summary: 'An Article on how data can help improve fitness and general life',
        link: 'https://medium.com/@richardayikweibee/your-calendar-might-predict-your-fitness-habits-a31db5a90685'
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
        summary: 'A photo gallery built with react using the fetch API with drag and drop capabilities.',
        link: 'https://photo-gallery-eta-wheat.vercel.app/'
    },
    {
        image: assets.projectImages.porfolio,
        title: 'Portfolio website',
        summary: 'A portfolio website built with react and of custom design.',
        link: 'https://www.richardayikwei.com/'
    },
    {
        image: assets.projectImages.travellerGame,
        title: 'Traveler Game',
        summary: 'A game website built with React using Redux to manage state.',
        link: 'https://redux-travel-game.vercel.app/'
    },
    {
        image: assets.projectImages.theBlackWebsite,
        title: 'The black website',
        summary: 'A demo website built with jQuery emphasizing DOM manipulation.',
        link: 'https://the-black-website.vercel.app/'
    },

]

export const contacts: Contacts =
{
    image: assets.social.emailIcon,
    summary: 'richardayikweibee@gmail.com',
}

export const socialLinks: SocialLinks = {
    linkedIn: "https://www.linkedin.com/in/richard-ayikwei-48b171112/",
    x: "https://x.com/ayikwei_richard",
    gitHub: "https://github.com/richardayikwei"

}
