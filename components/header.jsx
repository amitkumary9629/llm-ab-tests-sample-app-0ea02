'use client';

import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
//import getOptimizelyClient from '../app/optimizely.js';
import { useEffect, useState } from 'react';

import { createInstance } from '@optimizely/react-sdk';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    const [variation, setVariation] = useState(null);

    useEffect(() => {
        const optimizelyClient = createInstance({
            sdkKey: 'VGvFriAUTHDnCx1xRowvQ'
        });

        optimizelyClient.onReady().then(() => {
            const userId = 'user_' + Math.floor(Math.random() * 1000000); // unique per user/session
            const variationKey = optimizelyClient.activate('button_color_difference', userId);

            console.log(`Variation= ${variationKey}`);

            setVariation(variationKey);
        });
    }, []);

    function getVariations() {
        return (
            <>
                {variation === 'off' && `Revalidation`}
                {variation === 'on' && `Revalidation2`}
                {variation === null && `Revalidation3`}
            </>
        );
    }

    function revalidate() {
        const properties = {
            Text: 'Revalidate'
        };
        const tags = {
            $opt_event_properties: properties
        };
        optimizely.track('button_color_differentiation', tags);
    }

    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={netlifyLogo} alt="Netlify logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            <Link
                href="https://github.com/netlify-templates/next-platform-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex lg:ml-auto"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>

            <button onClick={revalidate}>{getVariations()}</button>
        </nav>
    );
}
