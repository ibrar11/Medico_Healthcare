import React from 'react'

const TreatmentItem = ({image="",alt="",text2="",styles=""}) => {
  return (
    <div className={`relative max-w-80 h-60 max-h-60 ${styles}`}>
        <img src={image} alt={alt} />
        <div className=' gap-y-1 absolute bottom-0 left-9 bg-primary text-white rounded-lg flex flex-col justify-center items-start px-8 py-4'>
            <p className='font-bold text-sm'>For your health</p>
            <p className='font-bold text-xl'>{text2}</p>
      </div>
    </div>
  )
}

export default TreatmentItem
