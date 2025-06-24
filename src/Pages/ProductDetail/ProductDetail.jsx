import { useParams } from "react-router-dom";

function ProductDetail (props){
      const {id}= useParams()
    // console.log(id);
    const product = props.data?.find(element=>element.id==id)
    // console.log(props.data);
    // console.log(product);
    return(
        <div className="df">
            <div>
                <img src={product?.images[0]} className="imgs"/>
                <h2 className="title white">{product?.title}</h2>
                <p className="white">  Stock :{product?.availabilityStatus} </p>
                <p className="white">Categorie : {product?.category} </p>
                <p className="white">Prix : {product?.price} </p>
                <p className="info white">Info : {product?.description} </p>

            </div>
        </div>
    )
}
export default ProductDetail