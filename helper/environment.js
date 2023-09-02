/*
Program Name ==
Description ===
Author ==
Date == 2023-09-02 00:35:04
*/

const env = {};
env.staging = {
    port: 3000,
    envName: 'staging',
};
env.production = {
    port: 3000,
    envName: 'production',
};

// Check and set the current environment
let currentEnvironment = 'staging';
if (typeof process.env.NODE_ENV === 'string') {
    currentEnvironment = process.env.NODE_ENV;
}

// Export the appropriate environment object
const environmentToExport = env[currentEnvironment] ? env[currentEnvironment] : env.staging;
module.exports = environmentToExport;
