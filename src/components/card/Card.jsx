import "./Card.scss"

const Card = ({data}) => {
    console.log(data);
  return (
    <div className="card-container">

    {data.map(({title,date,desc,image,id})=> {

        return(
            <div className="cards" key={id}>
            <h1>{title} </h1>
            <img src={image} alt="" />
            <h5>{date} </h5>
            <h4 className="text">{desc} </h4>
            </div>
        )
    })}




    </div>
  )
}

export default Card