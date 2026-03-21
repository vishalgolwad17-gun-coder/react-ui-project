import React from 'react'
import Rightcard from './Rightcard'

const rightcontent = (props) => {
    
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
     {props.users.map(function(items,idx){
        return <Rightcard key={idx} items={items.img} tag={items.tag} id={idx} color={items.color}/>
     })}

    </div>
  )
}

export default rightcontent
