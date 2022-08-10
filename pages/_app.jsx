import '../styles/globals.css'
import {apiPlugin, storyblokInit} from "@storyblok/react";
import {JumbotronBlok, PageBlok} from "../bloks";
import {LinkBlok} from "../bloks/link-blok";
import {Bridge} from "../components/bridge/bridge";

storyblokInit({
    accessToken: "Cxz08fdIQQFvtN3sLvBmbAtt",
    use: [apiPlugin],
    components: {
        jumbotron: JumbotronBlok,
        page: PageBlok,
        link: LinkBlok,
    }
});


const MyApp = ({Component, pageProps, router}) => (
    <>
        {router.isPreview && (<Bridge/>)}
        <Component {...pageProps} />
    </>
)

export default MyApp
