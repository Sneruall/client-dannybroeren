import React from 'react'

import Image from 'next/image'

const Footer2 = () => {
  const images = [
    '/image1.png', //
    '/image1.png',
    '/image1.png',
    '/image1.png',
  ]
  return (
    <footer className="">
      <div className="flex justify-center items-center gap-3 mx-auto max-w-screen-xl mt-3">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="responsive"
              width={100} // These values are placeholders and will be overridden by the responsive layout
              height={100}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="text-right max-w-screen-xl mx-auto my-4 px-4">
        <p className="text-white uppercase text-4xl font-league tracking-widest">
          Breng je leven in balans
        </p>
        <p className="text-white italic font-playfair mr-1">
          Puur Counselling en dieetiek
        </p>
      </div>
      <p className="text-xs text-white text-center">
        &copy; 2022 Your Company. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer2
