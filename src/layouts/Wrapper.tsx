
"use client"

import React from 'react';
import DarkLight from '@/components/common/DarkLight';
import ScrollToTop from '@/components/common/ScrollToTop';

const Wrapper = ({ children }: any) => {

  return (
    <>
      <ScrollToTop />
      <DarkLight />
      {children}
    </>
  );
};

export default Wrapper;