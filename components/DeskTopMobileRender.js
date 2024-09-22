"use client";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
const DeskTopMobileRender = ({DeskTopComponent, MobileComponent}) => {
    const [isMounted, setIsMounted] = useState(false);
    // Detect if the device is mobile
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    // Set a flag when the component has mounted
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Only render after the component has mounted to avoid server-client mismatch
    if (!isMounted) {
        return null; // or you can return a loading spinner
    }

    return (
        <>
        {isMobile ? <MobileComponent /> : <DeskTopComponent />}
        </>
    );
}
export default DeskTopMobileRender;