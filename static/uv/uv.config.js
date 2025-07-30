self.__uv$config = {
    prefix: '/service/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/gh/titaniumnetwork-dev/Ultraviolet@main/src/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: 'https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/uv/uv.config.js',
    sw: 'https://cdn.jsdelivr.net/gh/titaniumnetwork-dev/Ultraviolet@main/src/uv.sw.js',
};
