import {useCallback, useEffect, useState} from "react";
import {loadStoryblokBridge} from "@storyblok/js";
import {useRouter} from "next/router";

export const Bridge = () => {
    const router = useRouter();
    const [bridgeInstance, setBridgeInstance] = useState(null);

    useEffect(() => {
        loadStoryblokBridge()
            .then(() => setBridgeInstance(new window.StoryblokBridge({})))
    }, []);

    const onPublished = useCallback(() => {
        router.reload();
    }, [router]);

    const onUnpublished = useCallback(() => {
        router.reload()
    }, [router]);

    const onChange = useCallback(async ($event) => {
        if (!$event) {
            return router.reload();
        }

        if ($event.slugChanged) {
            const options = {unstable_skipClientCache: true};
            await router.push(`/${$event.slug}`, `/${$event.slug}`, options);
        }

        const options = {scroll: false, unstable_skipClientCache: true};
        await router.replace(`/${$event.slug}`, `/${$event.slug}`, options);
    }, [router])

    useEffect(() => {
        if (!bridgeInstance) {
            return;
        }

        bridgeInstance.on('published', onPublished);
        bridgeInstance.on('unpublished', onUnpublished);
        bridgeInstance.on('change', onChange);

    }, [bridgeInstance, onPublished, onUnpublished, onChange]);


    return null
}
