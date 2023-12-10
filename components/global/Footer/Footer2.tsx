// todo: add social media icons
import Image from 'next/image'
import React from 'react'

const Footer2 = () => {
  const images = [
    '/image1.png', //
    '/image2.png',
    '/image3.png',
    '/image4.png',
  ]
  return (
    <footer className="">
      <div className="flex justify-center items-center gap-3 mx-auto max-w-screen-xl mt-3">
        {images.map((image, index) => (
          <div key={index} className="w-full h-80 relative">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              sizes="500px"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
      <div className="text-right max-w-screen-xl mx-auto my-4 px-4">
        <p className="text-white uppercase text-3xl sm:text-4xl font-league tracking-widest">
          Breng je leven in balans
        </p>
        <p className="text-white italic font-playfair mr-1">
          Puur Counselling en dieetiek
        </p>
      </div>
      <p className="text-xs text-white text-center">
        &copy; 2024 Puur Counselling. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer2
