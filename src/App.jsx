import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'satisfied',
      color:'lightseagreen'
    },
    {
      img:'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'underserved',
      color:'royalblue'},
    {
      img:'https://plus.unsplash.com/premium_photo-1686244745026-98fc15ad3400?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underbanked',
      color:'orange'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1683134150961-4c11a2d6f0bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Undercooked',
      color:'violet'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
  
    </div>
  )
}

export default App
