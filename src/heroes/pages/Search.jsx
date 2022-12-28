import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {HeroeCard} from '../components/index'
import { getHeroByName } from '../helpers/getHeroByname'

export const Search = () => {

  const {searchText, onInputChange, onResetForm} = useForm({
    'searchText': '',
  }) 

  
  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search)
  const heroe = getHeroByName(q)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchText.trim().length <= 1) return
    navigate(`?q=${searchText.toLowerCase().trim()}`)
    onResetForm()
  }

  return (
    <>
        <h1>Search - Busquedas</h1>
        <hr/>
        <div className="row">
           <div className="col-5">
             <h1>Search</h1>
             <hr/>
             <form onSubmit={handleSubmit}>
               <input 
                  type="text" 
                  name="searchText" 
                  value={searchText} 
                  onChange={onInputChange} 
                  autoComplete="of" 
                  className="form-control"
                />
               <button type="" className="btn btn-primary mt-3">Search a Hero</button>
             </form>
           </div>
           <div className="col-7">
             <h1>Result</h1>
             <hr/>
             {
               q === '' 
               ? <div className='alert alert-primary animate__animated animate__bounce'>
                  Busca un heroe
                </div>
               : (heroe.length === 0) 
               && <div className='alert alert-danger animate__animated animate__bounce'>
                  No hay heroes con el nombre <b>{q}</b>
                 </div>
             }
             {
                heroe.map(e => (
                 <HeroeCard key={e.id} heroe={e} />
                ))
             }
           </div>
        </div>
    </>
  )
}
