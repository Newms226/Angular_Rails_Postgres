const PROXY_CONFIG = [{
    context: [
      "/api/**"
    ],
    target: "ror://localhost:3000",
    secure: false,
    "logLevel": "debug"
  }];

  module.exports = PROXY_CONFIG;
