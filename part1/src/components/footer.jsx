import logo from './src/components/images/FinalPRLogo.png'

const Footer = () => { 
    return (
<footer><span id="spanFoot">
    <i>
      <h6>Created by Patrick Rallings for</h6>
      <h5>CTAC of Carolina Fintech Hub</h5>
    </i></span>
  <a style={{marginRight: '3%'}} href="index.html"><img className="logoPR" src={logo} alt="Initials PR" height="45px" /></a>
</footer>
    )
};

export default Footer;
