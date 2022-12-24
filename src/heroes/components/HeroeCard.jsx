import { Link } from "react-router-dom";

export const HeroeCard = ({ heroe }) => {

  const { 
    id, 
    superhero, 
    publisher, 
    alter_ego, 
    first_appearance, 
    characters 
  } = heroe;

  const heroImg = `/assets/heroes/${id}.jpg`
  const charactersHeroes = alter_ego != characters && ( <p>{ characters }</p> );

  return (
    <div className="col animate__animated animate__bounceInLeft">
        <div className="card">
            <div className="row no-gutter">
                <div className="col-4">
                    <img src={ heroImg } alt={ superhero } className="card-img" />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">
                            { alter_ego }
                        </p>
                        {
                            charactersHeroes
                        }
                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>
                        <Link to={`/heroe/${id}`}> Mas Datos... </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
