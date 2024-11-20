import React from 'react'
import { menuImages } from '../../../data/menu';

export const ImageMenu = () => {
  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 '>
        {
            menuImages.map((image) => (
                <div className='w-full h-full outline outline-2 outline-black' key={image}>
                    <img src={image} className='w-full h-full' alt='Some img' />
                </div>
            ))
        }
    </div>
  )
}
