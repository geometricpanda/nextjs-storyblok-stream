import {useEffect, useState} from "react";
import {loadStoryblokBridge} from "@storyblok/js";

export const Bridge = () => {
    const [bridgeInstance, setBridgeInstance] = useState(null);

    useEffect(() => {
        loadStoryblokBridge()
            .then(() => setBridgeInstance(new window.StoryblokBridge({})))
    }, []);

    useEffect(() => {
        if (!bridgeInstance) {
            return;
        }


    }, [bridgeInstance])


    return null;
}
