import {Anchor} from "../components/anchor";
import {storyblokEditable} from "@storyblok/react";

export const LinkBlok = ({blok}) => (
    <Anchor href={blok.url.url}
            size={blok.size}
            outline={blok.outline}
            variant={blok.variant}
            {...storyblokEditable(blok)}>
        {blok.text}
    </Anchor>
);
