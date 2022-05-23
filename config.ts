const config = {
  url: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:5000' : 'tj-client.prod-shared.dev.wsp.staging.plesk.tech',
  api: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:5000' : 'tj-server.prod-shared.dev.wsp.staging.plesk.tech',
};

export default config;