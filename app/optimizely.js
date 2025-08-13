import * as optimizelySDK from '@optimizely/optimizely-sdk/dist/optimizely.browser.umd.min.js';

export default function getOptimizelyClient() {
    const optimizelyClient = optimizelySDK.createInstance({
        sdkKey: process.env.OPTIMIZELY_SDK_KEY
    });

    return optimizelyClient;
}
