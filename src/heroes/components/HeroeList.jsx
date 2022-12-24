import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({ publisher }) => {

  const getHeroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            getHeroes.map(heroe => (
                <HeroeCard key={ heroe.id } heroe={ heroe }/>
            ))
        }
    </div>
  )
}
