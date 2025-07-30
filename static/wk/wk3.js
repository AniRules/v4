self.__uv$config = {
    prefix: '/assignments/',
    bare: '/seal/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/wk/wk1.js', // handler
    bundle: 'https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/wk/wk2.js', // bundle
    config: 'https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/wk/wk3.js', // config
    sw: 'https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/wk/wk4.js', // sw
};
