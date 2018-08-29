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
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <img src={Lawyer} alt="" className="img-fluid" width="200"/>
                    </div>
                    <div className="description">
                        <h2>Prof. Juanjo Martí</h2>
                    </div>
                    <div>
                        <button className="btn btn-info avaliable"><i className="fa fa-check"></i><br/>Available</button>
                    </div>
                    </div>
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
