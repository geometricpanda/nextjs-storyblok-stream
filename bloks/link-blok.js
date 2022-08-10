import {Anchor} from "../components/anchor";

export const LinkBlok = ({blok}) => (
    <Anchor href={blok.url.url}
            size={blok.size}
            outline={blok.outline}
            variant={blok.variant}>
        {blok.text}
    </Anchor>
);
