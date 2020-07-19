class Content extends React.Component {
    render(){
        return(
            <div className="content-container">
                <div class="item1"><img src="images/character.png" className="character"></img></div>
                <div class="item2">
                    <h1>¡ÚNETE AL JUEGO!</h1>
                    <h2>EL TORNEO DE FIFA DEL AÑO</h2>
                    <a id='register' class="waves-effect waves-light btn">Inscribirme</a>
                </div>
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
                    <Content />
                </div>
                <footer id='sponsors'>
                    <Sponsors/>
                </footer>
            </div>
        );
    };
};
ReactDOM.render(<Information/>, document.getElementById("app"))
