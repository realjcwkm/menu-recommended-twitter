import Butao from './butao';
import './HelloPerson.css';

function HelloPerson({nome, foto, arroba}){

    return(
        <div className="container">
            <div className='perfil'>
            <img className='foto' src={foto} alt={nome} 
            width = "256px"
            height="256px"
            />

            {nome && <p className="frase"> <strong>{nome}</strong> 
            <br></br><span className="arrobas">{arroba}</span> </p>}
            </div>

            <div className='botao'><Butao /> </div>
        </div>
    );
}

export default HelloPerson;