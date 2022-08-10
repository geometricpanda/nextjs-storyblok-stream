import '../styles/globals.css'
import {apiPlugin, storyblokInit} from "@storyblok/react";
import {JumbotronBlok, PageBlok} from "../bloks";
import {LinkBlok} from "../bloks/link-blok";

storyblokInit({
    accessToken: "Cxz08fdIQQFvtN3sLvBmbAtt",
    use: [apiPlugin],
    components: {
        jumbotron: JumbotronBlok,
        page: PageBlok,
        link: LinkBlok,
    }
});


function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default MyApp
