import "./Card.scss"

const Card = ({data}) => {
    console.log(data);
  return (
    <div className="card-container">

    {data.map(({title,date,desc,image,id})=> {

        return(
            <div className="cards" key={id}>
            <h4>{date}</h4>
            <img src={image} alt="" />
            <h4 className="desc">{desc} </h4>
            </div>
        )
    })}




    </div>
  )
}

export default Card