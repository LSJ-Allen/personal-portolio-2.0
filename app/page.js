"use client";
import React from 'react';
import Layout from "../components/Layout";
import MobileLayout from '@/components/mobile/MobileLayout';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
const Home = () => {
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
      {isMobile ? <MobileLayout /> : <Layout />}
    </>
  );
};
 
export default Home;