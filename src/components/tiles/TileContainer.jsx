import React from 'react'
import classes from './Tile.module.css'
import Tile from './Tile'

const TileContainer = ({data,cls}) => {

  return (
    <div className={`${cls} ${classes.tilesContainer}`}>
        {data.map((element,index)=>(
            <Tile key={index} {...element} />
        ))}
    </div>
  )
}

export default TileContainer
