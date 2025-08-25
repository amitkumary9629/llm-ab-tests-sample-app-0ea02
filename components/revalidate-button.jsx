'use client';

import { useFormStatus } from 'react-dom';
import { useGetFlag, useGetFlagVariable, useTrackEvent } from 'vwo-fme-react-sdk';

export function RevalidateButton({ revalidateWiki }) {
    const { trackEvent } = useTrackEvent();

    const revalidateButtonFeatureFlag = useGetFlag('revalidateButtonFeatureFlag');

    const variationName = useGetFlagVariable(revalidateButtonFeatureFlag.flag, 'RevalidateButton', '');

    function revalidatePage() {
        trackEvent('trackClickOnRevalidateButton');
        revalidateWiki();
    }

    console.log(variationName);

    const revalidateButtonBackroundColor = {
        baseline: 'bg-blue-500',
        Variation1: 'bg-green-500',
        Variation2: 'bg-red-500'
    };

    const { pending } = useFormStatus();
    return (
        <button
            className={`btn ${revalidateButtonBackroundColor[variationName]} mb-5`}
            type="submit"
            onClick={revalidatePage}
            disabled={pending}
        >
            Click to Revalidate({variationName})
        </button>
    );
}
