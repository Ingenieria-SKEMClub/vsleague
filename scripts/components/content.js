class Content extends React.Component {
    render(){
        return(
            <div className="content-container">
                <div class="item1"><img src="images/character.png" className="character"></img></div>
                <div class="item2"></div>
            </div>
        );
    };
};
class Sponsors extends React.Component {
    render(){
        return(
            <div className="sponsors">
                <p>PATROCINADO POR</p>
                <img src="images/sponsor1.png" className="sponsorimg"></img>
                <img src="images/sponsor2.png" className="sponsorimg"></img>
            </div>
        );
    };
};
