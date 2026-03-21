import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
    
  return (
    <div className='h-full w-80 rounded-4xl relative overflow-hidden shrink-0'>
        <img className='h-full w-full object-cover' src={props.items} alt="" />
        <Rightcardcontent items={props.items} tag={props.tag} id={props.id} color={props.color} />
    </div>
  )
}

export default Rightcard
