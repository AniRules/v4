self.__uv$config = {
    prefix: '/service/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: 'https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
