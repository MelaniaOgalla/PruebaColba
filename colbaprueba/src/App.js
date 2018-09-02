import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lawyer from './Lawyer.jpg';

class App extends Component {
    constructor() {
        super();
        this.state = {
            shown: true,
            shown1: true,
            shown2: false,
            shown3: false,
            shown4: false,
            shown5: false,
            shown6: false,
            shown7: false,
            shown8: false,
            shown9: false,
            shown10: false,
            shown11: false,
            shown12: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4 = this.toggle4.bind(this);
        this.toggle5 = this.toggle5.bind(this);
        this.toggle6 = this.toggle6.bind(this);
        this.toggle7 = this.toggle7.bind(this);
        this.toggle8 = this.toggle8.bind(this);
        this.toggle9 = this.toggle9.bind(this);
        this.toggle10 = this.toggle10.bind(this);
        this.toggle11 = this.toggle11.bind(this);
        this.toggle12 = this.toggle12.bind(this);

    }

    toggle() {
        this.setState({
            shown: !this.state.shown,
        });
    }

    toggle1() {
        this.setState({
            shown1: !this.state.shown1,
        });
    }

    toggle2() {
        this.setState({
            shown2: !this.state.shown2,
        });
    }

    toggle3() {
        this.setState({
            shown3: !this.state.shown3,
        });
    }

    toggle4() {
        this.setState({
            shown4: !this.state.shown4,
        });
    }

    toggle5() {
        this.setState({
            shown5: !this.state.shown5,
        });
    }

    toggle6() {
        this.setState({
            shown6: !this.state.shown6,
        });
    }

    toggle7() {
        this.setState({
            shown7: !this.state.shown7,
        });
    }

    toggle8() {
        this.setState({
            shown8: !this.state.shown8,
        });
    }

    toggle9() {
        this.setState({
            shown9: !this.state.shown9,
        });
    }

    toggle10() {
        this.setState({
            shown10: !this.state.shown10,
        });
    }

    toggle11() {
        this.setState({
            shown11: !this.state.shown11,
        });
    }

    toggle12() {
        this.setState({
            shown12: !this.state.shown12,
        });
    }


    render() {
        const shown = {
            display: this.state.shown ? "block" : "none"
        };

        const hidden = {
            display: this.state.shown ? "none" : "block"
        };

        const shown1 = {
            display: this.state.shown1 ? "block" : "none"
        };

        const hidden1 = {
            display: this.state.shown1 ? "none" : "block"
        };

        const shown2 = {
            display: this.state.shown2 ? "block" : "none"
        };

        const hidden2 = {
            display: this.state.shown2 ? "none" : "block"
        };

        const shown3 = {
            display: this.state.shown3 ? "block" : "none"
        };

        const hidden3 = {
            display: this.state.shown3 ? "none" : "block"
        };

        const shown4 = {
            display: this.state.shown4 ? "block" : "none"
        };

        const hidden4 = {
            display: this.state.shown4 ? "none" : "block"
        };

        const shown5 = {
            display: this.state.shown5 ? "block" : "none"
        };

        const hidden5 = {
            display: this.state.shown5 ? "none" : "block"
        };

        const shown6 = {
            display: this.state.shown6 ? "block" : "none"
        };

        const hidden6 = {
            display: this.state.shown6 ? "none" : "block"
        };

        const shown7 = {
            display: this.state.shown7 ? "block" : "none"
        };

        const hidden7 = {
            display: this.state.shown7 ? "none" : "block"
        };

        const shown8 = {
            display: this.state.shown8 ? "block" : "none"
        };

        const hidden8 = {
            display: this.state.shown8 ? "none" : "block"
        };

        const shown9 = {
            display: this.state.shown9 ? "block" : "none"
        };

        const hidden9 = {
            display: this.state.shown9 ? "none" : "block"
        };

        const shown10 = {
            display: this.state.shown10 ? "block" : "none"
        };

        const hidden10 = {
            display: this.state.shown10 ? "none" : "block"
        };

        const shown11 = {
            display: this.state.shown11 ? "block" : "none"
        };

        const hidden11 = {
            display: this.state.shown11 ? "none" : "block"
        };

        const shown12 = {
            display: this.state.shown12 ? "block" : "none"
        };

        const hidden12 = {
            display: this.state.shown12 ? "none" : "block"
        };

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
                    <h2>Services</h2>
                    <h2 style={{color:"#65B61B" , fontWeight:"inherit"}}>Construction and real state law</h2>
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                <h2 className="thide" style={shown}>Builder's lien law</h2>
                                    <h2 className="tshow" style={hidden}>Builder's lien law</h2>
                                <button className="btn hide 2" data-toggle="collapse" data-target="#collapseOne"
                                                 aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle}>
                                    <p style={ shown }>Hide <i className="fa fa-angle-up"></i></p>
                                    <p style={ hidden }>Show <i className="fa fa-angle-down"></i></p>
                                </button>
                                </div>
                                <p style={ hidden }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={shown}> Fee </p>
                                <p className="CHF" style={shown}> 35 CHF per hour </p>
                            </div>
                        </div>
                    </div>

                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown1}>Builder's contract law</h2>
                                    <h2 className="tshow" style={hidden1}>Builder's contract law</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle1}>
                                        <p style={ shown1 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden1 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden1 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown1 }> Fee </p>
                                <p className="CHF" style={ shown1 }> 35 CHF per hour </p>
                            </div>
                        </div>

                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown2}>Construction and Real Estate Law</h2>
                                    <h2 className="tshow" style={hidden2}>Construction and Real Estate Law</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle2}>
                                        <p style={ shown2 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden2 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden2 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown2 }> Fee </p>
                                <p className="CHF" style={ shown2 }> 35 CHF per hour </p>
                            </div>
                        </div>

                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown3}>Expropriation Law</h2>
                                    <h2 className="tshow" style={hidden3}>Expropriation Law</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle3}>
                                        <p style={ shown3 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden3 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden3 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown3 }> Fee </p>
                                <p className="CHF" style={ shown3 }> 35 CHF per hour </p>
                            </div>
                        </div>

                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown4}>Public construction and planning law</h2>
                                    <h2 className="tshow" style={hidden4}>Public construction and planning law</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle4}>
                                        <p style={ shown4 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden4 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden4 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown4 }> Fee </p>
                                <p className="CHF" style={ shown4 }> 35 CHF per hour </p>
                            </div>
                        </div>

                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown5}>Rental and lease law (real estate)</h2>
                                    <h2 className="tshow" style={hidden5}>Rental and lease law (real estate)</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle5}>
                                        <p style={ shown5 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden5 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden5 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown5 }> Fee </p>
                                <p className="CHF" style={ shown5 }> 35 CHF per hour </p>
                            </div>
                        </div>

                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown6}>Rights of neighbours</h2>
                                    <h2 className="tshow" style={hidden6}>Rights of neighbours</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle6}>
                                        <p style={ shown6 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden6 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden6 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown6 }> Fee </p>
                                <p className="CHF" style={ shown6 }> 35 CHF per hour </p>
                            </div>
                        </div>

                        <h2 style={{color:"#65B61B" , fontWeight:"inherit"}}>Construction and real state law</h2>
                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown7}>Disputes arising from collective labour</h2>
                                    <h2 className="tshow" style={hidden7}>Disputes arising from collective labou</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle7}>
                                        <p style={ shown7 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden7 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden7 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown7 }> Fee </p>
                                <p className="CHF" style={ shown7 }> 35 CHF per hour </p>
                            </div>
                        </div>

                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown8}>Equality Law</h2>
                                    <h2 className="tshow" style={hidden8}>Equality Law</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle8}>
                                        <p style={ shown8 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden8 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden8 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown8 }> Fee </p>
                                <p className="CHF" style={ shown8 }> 35 CHF per hour </p>
                            </div>
                        </div>

                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown9}>Private labour law</h2>
                                    <h2 className="tshow" style={hidden9}>Private labour law</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle9}>
                                        <p style={ shown9 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden9 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden9 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown9 }> Fee </p>
                                <p className="CHF" style={ shown9 }> 35 CHF per hour </p>
                            </div>
                        </div>

                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown10}>Public personel law</h2>
                                    <h2 className="tshow" style={hidden10}>Public personel law</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle10}>
                                        <p style={ shown10 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden10 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden10 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown10 }> Fee </p>
                                <p className="CHF" style={ shown10 }> 35 CHF per hour </p>
                            </div>
                        </div>

                        <h2 style={{color:"#65B61B" , fontWeight:"inherit"}}>Construction and real state law</h2>
                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown11}>Daily sickness benefit (KTG)</h2>
                                    <h2 className="tshow" style={hidden11}>Daily sickness benefit (KTG)</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle11}>
                                        <p style={ shown11 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden11 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden11 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown11 }> Fee </p>
                                <p className="CHF" style={ shown11 }> 35 CHF per hour </p>
                            </div>
                        </div>


                    <div key className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <div className="row1">
                                    <h2 className="thide" style={shown12}>Disability insurance (IV)</h2>
                                    <h2 className="tshow" style={hidden12}>Disability insurance (IV)</h2>
                                    <button className="btn hide 1" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne" onClick={this.toggle12}>
                                        <p style={ shown12 }>Hide <i className="fa fa-angle-up"></i></p>
                                        <p style={ hidden12 }>Show <i className="fa fa-angle-down"></i></p>
                                    </button>
                                </div>
                                <p style={ hidden12 }><i className="fa fa-plus-square-o" style={{fontSize:15}}>  </i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i>
                                    <i className="fa fa-star" style={{fontSize:15 , color:"#ffe714"}}></i> 35 CHF per hour </p>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <p className="feeTable" style={ shown12 }> Fee </p>
                                <p className="CHF" style={ shown12 }> 35 CHF per hour </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div>
                </div>

                    </div>
                    </div>
        </main>
          <footer>
              <div style={{marginLeft:60}}>
              <hr/>
              </div>
              <div className="footer">
                  <p style={{color:"#9A9895"}}>Copyright&#x24B8; 2018 MELANIA OGALLA</p>
                  <p style={{fontWeight:"bold"}}> <a href="#">Help</a> | <a href="#">Report error</a></p>
              </div>
          </footer>
      </div>
    );
  }
}

export default App;
