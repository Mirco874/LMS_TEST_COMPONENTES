export const PracticeCard = ({practiceData}) => {
    const {id_practica,titulo_practica,contenido,enlace_practica}=practiceData;

  return (
    <div style={{'background':'rgba(244, 243, 233, 1)'}} className="d-flex justify-content-between mb-5 mx-auto w-50 shadow p-3 mb-5  rounded ">
        <p><b>Id: </b>{id_practica}  <b>Clase: </b>{titulo_practica}</p>
        <button style={{'background':'#485BFF','color':"white" }} className="btn">Revisar </button>
    </div>
  )
}