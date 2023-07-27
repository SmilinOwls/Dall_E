import React from 'react'

import { download } from '../../assets';
import { downloadImage } from '../../utils';

function ImgCard({ _id, name, prompt, photo}) {
  return (
    <div className='card group relative shadow-card rounded-xl hover:shadow-cardhover'>
        <img 
            className='w-full object-cover rounded-xl'
            src={photo}
            alt={prompt}
        />
        <div className='absolute bottom-0 left-0 right-0 my-2 p-4 bg-[#10131f] rounded-md group-hover:flex flex-col hidden'>
            <p className='text-white text-sm prompt truncate'> {prompt} </p>
            
            <div className='mt-4 flex items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <div className='w-7 h-7 rounded-full object-cover bg-blue-400 text-white text-sm font-bold'>{name[0]}</div>
                    <p className='text-gray-200 text-sm'>{name}</p>
                </div>
                <button type="button" onClick={() => downloadImage(_id, photo )} className="bg-transparent outline-none border-none">
                    <img src={download} alt="download" className='w-7 h-7 object-contain filter invert'/>
                </button>
            </div>

        </div>
    </div>
  )
}

export default ImgCard