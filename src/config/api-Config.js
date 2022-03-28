const apiConfig = {
  protocol: process.env.API_PROTOCOL || "http",
  host: process.env.API_HOST || "localhost",
  port: process.env.API_PORT || "3000",
  prefix: process.env.API_PREFIX || "/api",
};

export default {
  api: `${apiConfig.protocol}://${apiConfig.host}${
    apiConfig.port ? `:${apiConfig.port}` : ""
  }${apiConfig.prefix}`,
  frontend: `${apiConfig.protocol}://${apiConfig.host}${
    apiConfig.port ? `:${apiConfig.port}` : ""
  }`,
};
