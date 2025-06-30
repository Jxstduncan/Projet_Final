import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Home(props){
    return(
            <div className="df">
                {props.data.map((item , index)=>(
                    <div key={index}>
                       {item?.rating >=4 && <img src={item?.images[0]} alt="" className="bgc"/> }
                       {item?.rating >=4 && <h3 className="center">{item?.rating} ⭐</h3> }

                        <Link to={`/ProductDetail/${item.id}`} className="textdeco">
                       {item?.rating >=4 &&  <button className="btns">Details</button>}
                        </Link>
                        <Link to='/Favori'>
                        {item?.rating >=4 &&  <button className="btns button" onClick={()=> props.ajouterFavori(item)}><FontAwesomeIcon icon={faThumbsUp}/></button>}
                        </Link>
                         
                    </div>
                    
                ))}
            </div>
    )
}
export default Home