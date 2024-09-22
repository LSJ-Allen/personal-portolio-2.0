"use client";
import React from 'react';
import Layout from "../components/Layout";
import MobileLayout from '@/components/mobile/MobileLayout';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import DeskTopMobileRender from '@/components/DeskTopMobileRender';
const Home = () => {
  return (
    <DeskTopMobileRender DeskTopComponent={Layout} MobileComponent={MobileLayout}/>
  )
};
 
export default Home;