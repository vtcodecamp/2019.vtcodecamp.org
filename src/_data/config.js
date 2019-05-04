
// require('dotenv').config()


const CONTEXT = process.env.CONTEXT;
const URL = process.env.URL;
const DEPLOY_PRIME_URL = process.env.DEPLOY_PRIME_URL;
const DEFAULT_DEV_URL = 'http://localhost:8080';

  
module.exports = {
    buildContext: (CONTEXT) ? CONTEXT : 'development',
    baseUrl: getBaseUrl(),
    baseUrlCanonical: (URL) ? URL : DEFAULT_DEV_URL,
};


function getBaseUrl()
{
    if (CONTEXT == 'production') {
        return URL;
    } else if (DEPLOY_PRIME_URL) {
        return DEPLOY_PRIME_URL;
    } else {
        return DEFAULT_DEV_URL;
    }
}