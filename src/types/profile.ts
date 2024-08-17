interface InnerObject {
    css: string,
    html: string,
    javaScript: string,
    jQuery: string,
    react: string,
    tailwindCSS: string,
    typeScript: string,
}

export type Profile = {
    profilePic:string,
    name: string,
    position: string,
    motto:string,
    cover: string,
    stack: InnerObject ,
}