import React from 'react'
import AiAgent from '../components/Ai'

function AIAgentProvider({ children }) {
  return (
    <>
      {children}
      <AiAgent />
    </>
  )
}

export default AIAgentProvider