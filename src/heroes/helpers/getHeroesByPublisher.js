import { heroesData } from "../data/heroesData";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['Marvel Comics', 'DC Comics'];
    if ( !validPublisher.includes(publisher) ) {
        throw new Error(`${ publisher } no es un publisher valido`);
    }

    return heroesData.filter( heroe => heroe.publisher === publisher );
}