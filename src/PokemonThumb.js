import React from 'react'

const PokemonThumb = ({id, image, name, type}) => {
    return (
        <div className={'type '+type}>
            <div><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumb
