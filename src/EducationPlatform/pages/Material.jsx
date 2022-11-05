
import { usePracticeFetch } from "../../hooks/usePracticeFetch";
import { PracticeCard } from "../components/PracticeCard";

export const Material = ({ practiceId }) => {
    const {contain}=usePracticeFetch(`http://142.93.203.113:3001/api/chapters/${practiceId}/practice`);
    const {data,isLoading}=contain;
    
    const {id_capitulo,practicas}=data;

  return(
  <div>
    <h2>practica del tema: {id_capitulo}</h2>
    <hr />
    {isLoading}
    {

    isLoading?(<p>No se encontraron prácticas</p>):
    (<>{practicas.map((practica)=>(<PracticeCard key={practica.id_practica} practiceData={practica}/>))}</>)
    
    }

  </div>);
};

Material.defaultProps={
    practiceId:5
}

