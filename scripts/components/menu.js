class MediaIcons extends React.Component{
    componentDidMount(){
        let mediaIconsElements = document.querySelectorAll('.tooltipped');
        let mediaIconsinstances = M.Tooltip.init(mediaIconsElements);
    };
    render(){
        return(
            <div id={this.props.id} className='mediaicons'>
                <a href='https://www.facebook.com/versusleaguecr/' target='_blank' className='mediaIconsAnchors'>
                    <i className="fa fa-facebook-official tooltipped" data-position="bottom" data-tooltip="Facebook"></i>
                </a>
                <a href='https://www.instagram.com/versusleague/' target='_blank'  className='mediaIconsAnchors'>
                    <i className="fa fa-instagram tooltipped" data-position="bottom" data-tooltip="Instagram"></i>
                </a>
                <a href='' className='mediaIconsAnchors'>
                    <i className='fa fa-calendar tooltipped' data-position="bottom" data-tooltip="Calendario"></i>
                </a>
            </div>
        );
    };
};
class SideMenu extends React.Component{
    render(){
        return(
            <ul id="slide-out" class="sidenav" id='sideNav'>
                <MediaIcons />
            </ul>
        );
    };
};
class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sideNavInstance: [],
            isSideMenuOpen: false
        };
    };
    componentDidMount(){
        let sideNavOptions = {
            edge: "left",
            onCloseEnd: () =>{
                this.setState({
                    isSideMenuOpen: false
                })
            },
            onOpenEnd: () =>{
                this.setState({
                    isSideMenuOpen: true
                })
            },
        }
        let sideNavElements = document.querySelectorAll('.sidenav');
        let sideNavInstances = M.Sidenav.init(sideNavElements , sideNavOptions);
        this.setState({
            sideNavInstance: sideNavInstances[0]
        })
    };
    openSideNav(){
        if(this.state.isSideMenuOpen){
            this.state.sideNavInstance.close();
        }else{
            this.state.sideNavInstance.open();
        }
    };
    render(){
        return(
            <div  className='menu-container'>
                <SideMenu/>
                <div id='sideNavButtonBar'>
                    <button id='sideNavButton' onClick={()=>this.openSideNav()}>
                        <a class='btn-floating btn-large scale-transition pulse'>
                            <i className='material-icons' id='sideNavIcon'>home</i>
                        </a>
                    </button>
                </div>
                <img className='logo' src="images/logo.png" alt="VSLeagueLogo"></img>
                <MediaIcons id='fullicons' />
            </div>
        );
    };
};