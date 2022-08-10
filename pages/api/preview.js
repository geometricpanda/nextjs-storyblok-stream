import crypto from 'node:crypto';

const NOT_SO_SECRET_TOKEN = 'Cxz08fdIQQFvtN3sLvBmbAtt';

const handler = async (req, res) => {
    const slug = req.query['slug'];
    const storyBlokToken = req.query['_storyblok_tk[token]'];
    const storyBlokSpaceId = req.query['_storyblok_tk[space_id]'];
    const storyBlokTimestamp = req.query['_storyblok_tk[timestamp]'];

    if (!storyBlokToken || !storyBlokSpaceId || !storyBlokTimestamp) {
        return res.status(400)
            .json({message: 'Bad Request'});
    }

    if (+storyBlokTimestamp < Math.floor(Date.now() / 1000) - 3600) {
        return res.status(401)
            .json({message: 'Invalid Token'})
    }

    const validation = [
        storyBlokSpaceId,
        NOT_SO_SECRET_TOKEN,
        storyBlokTimestamp
    ].join(':');

    const validationToken = crypto
        .createHash('sha1')
        .update(validation)
        .digest('hex');

    if (storyBlokToken !== validationToken) {
        return res.status(401)
            .json({message: 'Invalid token'})
    }

    try {
        res.setHeader('Set-Cookie', 'SameSite=None;Secure');
        res.setPreviewData({});
        return res.redirect(`/${slug}`);
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .message(e.message);
    }


}

export default handler;

