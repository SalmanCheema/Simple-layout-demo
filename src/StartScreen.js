import React, { Component } from 'react';
import './App.css';
import img_elHeaderPic from './images/StartScreen_elHeaderPic_404833.jpg';
import img_elNeonto_badge_blue512px from './images/StartScreen_elNeonto_badge_blue512px_722665.png';
import btn_icon_623396 from './images/btn_icon_623396.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      nameField: '',
      emailField: '',
    };
  }

  textInputChanged_nameField = (event) => {
    this.setState({nameField: event.target.value});
  }
  
  textInputChanged_emailField = (event) => {
    this.setState({emailField: event.target.value});
  }
  
  onClick_elShareIcon = (ev) => {
    alert("Hello! This button just runs a simple script.");
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elHeaderPic = {
        height: 'auto',
     };
    const style_elShortText = {
        fontSize: 19.4,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elNeonto_badge_blue512px = {
        backgroundImage: 'url('+img_elNeonto_badge_blue512px+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elNameField = {
        display: 'block',
     };
    
    const style_elNameField_outer = {
        pointerEvents: 'auto',
     };
    const style_elEmailField = {
        display: 'block',
     };
    
    const style_elEmailField_outer = {
        pointerEvents: 'auto',
     };
    const style_elLongText = {
        fontSize: 16.3,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elShareIcon = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_623396+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.562%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
     };
    const style_elShareIcon_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elSpacer = {
        background: 'rgba(0, 0, 0, 0.000)',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_elBackgroundShape} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elHeaderPic'>
            <img style={style_elHeaderPic} src={img_elHeaderPic} alt=""  />
          
          </div>
          
          <div className='font-sourceSansProRegular  elShortText'>
            <div style={style_elShortText}>
              <div>{this.props.locStrings.start_shorttext_224969}</div>
            </div>
          
          </div>
          
          <div className="flowRow flowRow_StartScreen_elNeonto_badge_blue512px_722665">
          <div className='elNeonto_badge_blue512px'>
            <div style={style_elNeonto_badge_blue512px} />
          
          </div>
          
          </div>
          <div className='baseFont elNameField' style={style_elNameField_outer}>
            <Input style={style_elNameField} type="text" hint={this.props.locStrings.start_namefield_353401} onChange={this.textInputChanged_nameField} value={this.state.nameField}  />
          
          </div>
          
          <div className='baseFont elEmailField' style={style_elEmailField_outer}>
            <Input style={style_elEmailField} type="email" hint={this.props.locStrings.start_emailfield_274865} onChange={this.textInputChanged_emailField} value={this.state.emailField}  />
          
          </div>
          
          <div className='font-sourceSansProLightIt  elLongText'>
            <div style={style_elLongText}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.start_longtext_282535.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='actionFont elShareIcon' style={style_elShareIcon_outer}>
            <button style={style_elShareIcon}  onClick={this.onClick_elShareIcon}  />
          
          </div>
          
          <div className='elSpacer'>
            <div style={style_elSpacer} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
