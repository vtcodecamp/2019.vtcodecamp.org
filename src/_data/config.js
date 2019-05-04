
const CONTEXT = process.env.CONTEXT;
const URL = process.env.URL;
const DEPLOY_PRIME_URL = process.env.DEPLOY_PRIME_URL;
const DEFAULT_DEV_URL = 'http://localhost:8080';


module.exports = {

    /**
     * Build Context 
     * https://www.netlify.com/docs/continuous-deployment/#deploy-contexts
     * Values:  production | deploy-preview | branch-deploy | development
     */
    buildContext: (CONTEXT) ? CONTEXT : 'development',

    /**
     * Base URL (protocol, domain)
     * For when fully qualified urls are needed.  
     * https://www.netlify.com/docs/continuous-deployment/#environment-variables
     * Values:  https://www.vtcodecamp.org | https://deploy-preview-x--vtcodecamp2019.netlify.com/ 
     *          https://branch--vtcodecamp2019.netlify.com | http://localhost:8080 
     */
    baseUrl: getBaseUrl(),

    /**
     * Base Canonical URL
     * Only for <link rel="canonical">
     * Values:  https://www.vtcodecamp.org | http://localhost:8080
     */
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
