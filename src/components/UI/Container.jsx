import React from 'react'

const Container = ({children,cls}) => {

    const styleObj  = {
        border:`1px solid var(--color_blue_border)`,
        borderRadius:'var(--borderRadius)',
        background:'white'
    }

  return (
    <div style={styleObj} className={`${cls}`}>
        {children}
    </div>
  )
}

export default Container
