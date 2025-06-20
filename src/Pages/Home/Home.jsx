import { Link } from "react-router-dom"

function Home(props){
    return(
            <div className="df">
                {props.data.map((item , index)=>(
                    <div key={index}>
                       {item?.rating >=4 && <img src={item?.images[0]} alt="" className="bgc"/> }
                       {item?.rating >=4 && <h3 className="center">{item?.rating} ⭐</h3> }

                        <Link to='/ProductDetail' className="textdeco">
                       {item?.rating >=4 &&  <button>Details</button>}
                        </Link>
                    </div>
                    
                ))}
            </div>
    )
}
export default Home