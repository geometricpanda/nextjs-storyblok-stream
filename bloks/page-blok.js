import {StoryblokComponent, storyblokEditable} from "@storyblok/react";

export const PageBlok = ({blok}) => (
    <div className={'container py-4'}
         {...storyblokEditable(blok)}>
        {blok.body?.map(innerBlok => (
            <StoryblokComponent
                key={innerBlok._uid}
                blok={innerBlok}/>
        ))}
    </div>
)
