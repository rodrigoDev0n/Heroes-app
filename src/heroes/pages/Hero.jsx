import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { HeroeCard } from "../components";
import { getHeroesById } from "../helpers/getHeroeById";

export const Hero = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const getHero = useMemo(() => getHeroesById(id), [ id ]);
  const { superhero, publisher, alter_ego, first_appearance, characters } = getHero;

  if ( !getHero ) {
    return <Navigate to="/" />
  }

  const onGoBack = () => {
    navigate(publisher === 'DC Comics' ? '/dc' : '/marvel');  
  }

  return (
    <div className="row mt-5">
        <div className="col-4">
            <img src={`/assets/heroes/${id}.jpg`} alt={ superhero } className="img-thumbnail" />
        </div>
        <div className="col-8">
            <h3 className="animate__animated animate__headShake">{ superhero }</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Alter ego:</b> { alter_ego }
                </li>
                <li className="list-group-item">
                    <b>Publisher:</b> { publisher }
                </li>
                <li className="list-group-item">
                    <b>First appearance:</b> { first_appearance }
                </li>
                <li className="list-group-item">
                    <b>Characters: </b> { characters }
                </li>
            </ul>
            <button className="btn btn-outlined btn-primary" onClick={ onGoBack }>Regresar</button>
        </div>
    </div>
  )
}
