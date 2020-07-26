class Content extends React.Component {
    render(){
        return(
            <div className="content-container">
                <div class="item1"><img src="images/character.png" className="character"></img></div>
                <div class="item2">
                    <h1>¡ÚNETE AL JUEGO!</h1>
                    <h2>EL TORNEO DE FIFA DEL AÑO</h2>
                    <button id='register' class="waves-effect waves-light btn">Inscribirme</button>
                </div>
            </div>
        );
    };
};
class Inscription extends React.Component {
    render(){
        return(
            <div className="inscription-container">
                <h1>Inscripción</h1>
                <div className="steps">
                    <div className="step1">1</div><div className="line"></div><div className="step2">2</div>
                </div>        
                <h2>Información general</h2>
                <form>
                    <input type="text" className="form" placeholder="Nombre Completo"></input>
                    <input type="text" id="form" placeholder="Playstation Network ID"></input>
                    <input type="text" className="form" placeholder="Número de Celular"></input>
                    <div className="legal">
                        <h3>Acepto los términos y condiciones</h3>
                        <div className="choose">
                        <button className="slide"></button><div className="hold"></div>
                        </div>
                    </div>
                    <input type="text" className="form" placeholder="Cédula o TIM"></input>
                    <div className="legal2">
                        <h3>Acepto el reglamento de inscripción</h3>
                        <div className="choose">
                        <button className="slide"></button><div className="hold"></div>
                        </div>
                    </div>
                    <input type="text" className="form" placeholder=" Correo Electrónico"></input>
                    <button className="payment">Ir al pago</button>
                </form>
            </div>
        );
    };
};
class Sponsors extends React.Component {
    render(){
        return(
            <div className="sponsors">
                <p>PATROCINADO POR</p>
                <img src="images/sponsor2.png" className="sponsorimg"></img>
            </div>
        );
    };
};
class Information extends React.Component{
    componentDidMount(){
        document.getElementById("loadingFrame").style.animation = "loadingEnd 1s forwards"
    }
    render(){
        return(
            <div>
                <div className='menu-container'>
                    <Menu />
                </div>
                <div id='content-container'>
                    <Inscription />
                </div>
                <footer id='sponsors'>
                    <Sponsors/>
                </footer>
            </div>
        );
    };
};
ReactDOM.render(<Information/>, document.getElementById("app"))
