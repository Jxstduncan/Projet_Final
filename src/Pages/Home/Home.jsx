import { Link } from "react-router-dom"

function Home(props){
    return(
            <div className="df">
                {props.data.map((item , index)=>(
                    <div key={index}>
                        <Link to='/ProductDetail' className="textdeco">
                       {item?.rating >=4 && <img src={item?.images[0]} alt=""/> }
                       {item?.rating >=4 && <h3 className="center">{item?.rating} </h3> }
                        </Link>
                    </div>
                    
                ))}
            </div>
    )
}
export default Home