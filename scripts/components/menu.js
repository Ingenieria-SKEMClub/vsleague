class MediaIcons extends React.Component{
    componentDidMount(){
        let mediaIconsElements = document.querySelectorAll('.tooltipped');
        let instances = M.Tooltip.init(mediaIconsElements);
    };
    render(){
        return(
            <div className='mediaicons'>
                <i className="fa fa-facebook-official tooltipped" data-position="bottom" data-tooltip="Facebook"></i>
                <i className="fa fa-instagram tooltipped" data-position="bottom" data-tooltip="Instagram"></i>
                <i className='fa fa-calendar tooltipped' data-position="bottom" data-tooltip="Calendario"></i>
            </div>
        );
    };
};
class Menu extends React.Component {
    render(){
        return(
            <div  className='menu-container'>
                <img className='logo' src="images/logo.png" alt="VSLeagueLogo"></img>
                <MediaIcons />
            </div>
        );
    };
};