import {heroesData} from '../data/heroesData'

export const getHeroByName = (name = '') => {
  name = name.toLowerCase().trim()
  if (name.length === 0) return []
  return heroesData.filter(
    heroes => heroes.superhero.toLowerCase().includes(name) 
  )
}

