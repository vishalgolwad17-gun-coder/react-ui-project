import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Pagecontent = (props) => {
    
  return (
    <div className='py-3 px-18 h-[90vh] flex gap-10 items-center'>
     <Leftcontent />
     <Rightcontent users={props.users}/>
    </div>
  )
}

export default Pagecontent
