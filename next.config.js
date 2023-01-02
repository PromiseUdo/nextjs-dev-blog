const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_uri: "mongodb://127.0.0.1:27017",
        mongodb_database: "my-blog",
      },
    };
  }
  
  return {
    env: {
      mongodb_uri: "mongodb://127.0.0.1:27017",
      mongodb_database: "my-blog",
    },
  };
};
