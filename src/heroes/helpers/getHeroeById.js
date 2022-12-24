import { heroesData } from "../data/heroesData"

export const  getHeroesById = (id) => {
    return heroesData.find(heroe => heroe.id === id)
}