
function Favori({ favoris, retirerFavori}) {

    
    return (
        <div className="favori">
            <h1 className="titre white">Éclat & Délices</h1>
            <p className="Fav white">mes Favoris </p>

            
            {favoris.length === 0 ? (
                <p className="white">Votre liste de favoris est vide.</p>
            ) : (
                
                favoris.map(data => (
                    <div key={data.id} className="card">
                        {/* Affichage de l'image du produit */}
                        <img src={data.images[0]}  alt={data.title} className="imgs"/>

                        
                        <h4 className="white">{data.title}</h4>
                        <p className="white">{data.price} $</p>
                        <button
                            onClick={() => retirerFavori(data.id)} // Appelle la fonction avec l'id de l'article
                            className="retirer-button">Retirer</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Favori;