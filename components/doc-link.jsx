'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useGetFlag, useGetFlagVariable, useTrackEvent } from 'vwo-fme-react-sdk';

export default function DocLink() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Link href="https://docs.netlify.com/" target="_blank" className="btn btn-lg sm:min-w-64">
            Read The Docs
        </Link>
    );
}
