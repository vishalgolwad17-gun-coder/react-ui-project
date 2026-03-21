import React from 'react'

const Rightcardcontent = (props) => {

  return (
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl leading-normal text-white mb-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate mollitia accusamus explicabo quam eligendi ex.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}}className='text-sm px-5 py-2 rounded-full text-white '>{props.tag}</button>
                    <button className='text-sm bg-blue-500 px-5 py-2 rounded-full text-white'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default Rightcardcontent
