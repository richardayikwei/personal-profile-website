import { assets } from "../assets/assests"
import { Profile } from "../types/profile"
import { Projects } from "../types/projects"
import { Contacts } from "../types/contacts"
import { SocialLinks } from "../types/socialLinks"


export const profile: Profile[] = [
    {
        profilePic: assets.profilePic.profile1,
        name: 'Ayikwei Richard',
        position: 'Junior Software Engineer (Python & Frontend)',
        motto: 'Change is constant',
        cover: "Hi, I'm a software engineer with experience in Python, FastAPI, and React. I've built and deployed web applications and APIs, and I enjoy solving real-world problems through code. My background includes working with data, supporting systems, and exploring how software can improve everyday processes. I'm particularly interested in backend development, APIs, and building reliable, user- friendly applications. I'm continuously learning and improving my skills while working on projects that combine functionality, performance, and good user experience.",
        stack: {
            css: assets.stackIcons.BI,
            html: assets.stackIcons.python,
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
        image: assets.articleImages.power,
        title: 'Having Data May Not Be Enough — You Need to Check Its Power Level',
        summary: 'An Article on the effects of Power on data and data analysis',
        link: 'https://medium.com/@richardayikweibee/having-data-may-not-be-enough-you-need-to-check-its-power-level-1ee0376ad57f'
    },
    {
        image: assets.articleImages.restaurant,
        title: 'Your Corner Restaurant Might Need a Data Analyst',
        summary: 'An Article on how data can help anyone to improve their business',
        link: 'https://medium.com/@richardayikweibee/your-corner-restaurant-might-need-a-data-analyst-or-even-a-data-scientist-b8495fa369b4'
    },
    {
        image: assets.articleImages.fitness,
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
        image: assets.projectImages.passwordGenerator,
        title: 'Password Generator',
        summary: 'A password generator website built with React and Python(backend).',
        link: 'https://finite-frontend.vercel.app/'
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
