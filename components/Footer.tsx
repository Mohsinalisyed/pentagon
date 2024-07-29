'use client'
import React from 'react';
import Image from 'next/image';
import { useViewport } from '@/hooks/useViewPort';
const Footer: React.FC = () => {
  const {width} =useViewport()
  return (
    <footer className="w-full bg-black text-white">
          <div className="pt-2">
            <Image
              src={width < 600 ? '/Resfooter.svg' :"/footer.svg"}
              alt="Pentagon Games Logo"
              width={1600}
              height={50}
              objectFit="contain"
            />
          </div>
    </footer>
  );
};
export default Footer;