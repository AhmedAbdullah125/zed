'use client'
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader" style={{ direction: "ltr" }}>
        <div className="box red delay1"></div>
        <div className="box"></div>
      </div></div>

  );
}

export default Loader;
