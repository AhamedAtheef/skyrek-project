import "./productcard.css"


// use function name first latter uppercase
export default function ProductCard(props){

    return(
        <div className="bg-red-50 card">
            <h1>{props.name}</h1>
            <img src={props.image}/>
            <p>{props.price}</p>
            <button>View More</button>
        </div>
    )
}