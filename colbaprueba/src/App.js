import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lawyer from './Lawyer.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div className="dropdown">
                    <button className="btn btn-outline dropdown-toggle" type="button" id="dropdownMenu2"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    <b>Order Overview</b>
                    </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Hello World</button>
                    <button className="dropdown-item" type="button">Hola Colba!</button>
                </div>
            </div>
        </header>
        <main>
        <div className="row">
            <div>
                <h1>PROFILE</h1>
            </div>
            <div>
                <input  className='boton btn btn-outline-primary btn-lg ' type={'button'} value={'Back'}/>
                <input  className='boton btn btn-outline-primary btn-lg ' type={'button'} value={'Edit Profile'} />
                <input className='boton btn btn-outline-primary btn-lg ' type={'button'} value={'Edit Offer'} />
            </div>
        </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
            </div>

            <div className="row">
                <div className="column">
                    <div className="info">
                    <div className="Lawyer">
                    <img src={Lawyer} alt="" className="img-fluid" width="250"/>
                    </div>
                    <div className="description">
                        <h2>Prof. Juanjo Martí</h2>
                        <button type="button" className="btn btn-default"><i className="fa fa-venus" style={{fontWeight: "bold"}}></i> 68 years</button>
                        <h3>Juanjo M. Martí</h3>
                        <p className="street"> Alte Landstrasse 21 8800 Thalwil ZH CH</p>
                        <p style={{fontSize:15, fontWeight:"bold"}}><i className="fa fa-phone" style={{fontSize:15, fontWeight:"bold", color:"gray"}}></i> +34663475770 +41555555555</p>
                        <p style={{fontSize:15, fontWeight:"bold"}}><i className="fa fa-envelope" style={{fontSize:15, color:"gray"}}></i> juanjo@colba.es</p>
                        <p style={{fontSize:15, fontWeight:"bold"}}><i className="fa fa-globe" style={{fontSize:17, color:"gray"}}></i> <a href="http://colba.es">http/www.colba.es</a></p>
                    </div>
                    <div>
                        <button className="btn btn-info avaliable"><i className="fa fa-check" style={{fontSize:20}}></i><br/>Available</button>
                    </div>
                    </div>
                    <hr/>
                    <h2 style={{color:"#65B61B"}}>LANGUAGES</h2>
                    <div className="skills">
                        <div>
                        <p style={{fontSize:10 , marginLeft:25}}>Advanced</p>
                        <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }}></button>
                        <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }} disabled></button>
                        <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }} disabled></button>
                        <p style={{fontWeight:"bold" , marginLeft:20}}>German</p>
                        </div>
                        <div style={{marginLeft: 50}}>
                            <p style={{fontSize:10 , marginLeft:10}}>Safe to negotiate</p>
                            <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }}></button>
                            <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }}></button>
                            <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }} disabled></button>
                            <p style={{fontWeight:"bold" , marginLeft:20}}>English</p>
                        </div>
                    </div>
                    <hr/>
                    <h2 style={{color:"#65B61B"}}>QUALIFICATIONS</h2>
                    <table className="table">
                        <tbody>
                        <tr>
                            <th scope="row">Lawyers License:</th>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th scope="row">Year of License:</th>
                            <td>1995</td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan={5}>Qualifications:</th>
                            <td>Certified Specialist SAV Labour Law</td>
                        </tr>
                        <tr>
                            <td>Specialist lawyer SAV Inheritance Law</td>
                        </tr>
                        <tr>
                            <td>Specialist Lawyer SAV Construction and <br/> Real State Law</td>
                        </tr>
                        <tr>
                            <td>Specialist lawyer SAV Liability and <br/> Insurance Law</td>
                        </tr>
                        <tr>
                            <td >Certified Specialist SAV Family Law</td>
                        </tr>
                        </tbody>
                    </table>
                    <h2 style={{color:"#65B61B"}}>GEOGRAPGICAL COVER</h2>
                    <table className="table">
                        <tbody>
                        <tr>
                            <th scope="row">Geographical Cover:</th>
                            <td>CH- Aargovia, Appenzell, Ausserrhoden, <br/> Zurich,
                                Basel-Lanschaft, Appenzell <br/> Innerrhoden </td>
                        </tr>
                        </tbody>
                    </table>
                    <h2 style={{color:"#65B61B"}}>BANK ACCOUNT</h2>
                    <table className="table">
                        <tbody>
                        <tr>
                            <th scope="row">Owner:</th>
                            <td>Juanjo M. Martí</td>
                        </tr>
                        <tr>
                            <th scope="row">IBAN:</th>
                            <td>CH48 00700 0110 0009 7178 4</td>
                        </tr>
                        <tr>
                            <th scope="row">VAT number:</th>
                            <td>47529348238</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="column">
                <p>Columna2</p>
                </div>
            </div>
        </main>
      </div>
    );
  }
}

export default App;
