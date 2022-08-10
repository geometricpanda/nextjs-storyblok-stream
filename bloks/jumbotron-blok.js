import {useEffect, useState} from "react";
import {Jumbotron} from "../components/jumbotron";
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.cjs'
import {StoryblokComponent, storyblokEditable} from "@storyblok/react";

const resolver = new RichTextResolver({});

export const JumbotronBlok = ({blok}) => {

    const [content, setContent] = useState();

    useEffect(() => {
        const html = resolver.render(blok.content);
        setContent(html);
    }, [blok])

    return (
        <Jumbotron title={blok.title} {...storyblokEditable(blok)}>
            <div className={'col-md-8 fs-4'} dangerouslySetInnerHTML={{__html: content}}></div>
            {blok.links.length && (
                <div className={'pt-3'}>
                    {blok.links.map(linkBlok => (
                        <StoryblokComponent
                            key={linkBlok._uid}
                            blok={linkBlok}/>
                    ))}
                </div>
            )}
        </Jumbotron>
    )
}
