function Contact() {
    return (
        <div>
            <div className="dflex">
                <h1 className="white">Contact Us!</h1>
            </div>
            <div >
                <div className="dfl">
                    <h3 className="">Send us a Email !</h3>
                    <div>
                        <input type="text" placeholder="Email" className="email contacts" />
                    </div>
                    <div>
                        <input type="text" placeholder="Information" className="information contacts" />
                    </div>
                    <div className="mt">
                        <button className="envoyer">Envoyer</button>
                    </div>
                </div>
            </div>
            <div className="moreinfo">
                <h3 className="white">Tel : 0450607080</h3>
                <h3 className="white margintop">Notre adresse : Rue de l'American 80</h3>
            </div>
        </div>
    )
}
export default Contact