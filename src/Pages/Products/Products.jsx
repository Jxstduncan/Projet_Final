import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Product(props){
    return(
        <div>
            <div className="df">
                {props.data.map((item , index)=>(
                    <div key={index}>
                       {item?.rating >=0 && <img src={item?.images[0]} alt="" className="bgc"/> }
                       {item?.rating >=0 && <h3 className="center">{item?.rating} ⭐</h3> }

                        <Link to={`/ProductDetail/${item.id}`} className="textdeco">
                       {item?.rating >=0 &&  <button className="btns">Details</button>}
                        </Link>
                        <Link>
                        {item?.rating >=0 &&  <button className="btns button" onClick={()=> props.ajouterFavori(item)}><FontAwesomeIcon icon={faThumbsUp}/></button>}
                        </Link>
                        
                         
                    </div>
                    
                ))}
            </div>
        </div>
    )
}
export default Product