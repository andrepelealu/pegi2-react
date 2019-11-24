import React, {Component} from 'react';
import Btn from './style'
function Main(props){

    return(
      <div className="row">
        <div className="col s6">
        <h5>Cari Hotel</h5>
          <form>
          <div className="input-field col s12">
          <i className="material-icons prefix">search</i>

          <input placeholder="Semarang" id="search" type="text" className="validate"/>
            <label htmlFor="search" className="black-text">Nama Lokasi/Tujuan</label>
          </div>

          <div className="input-field col s6">
            <i className="material-icons prefix">date_range</i>
            <input type="text" className="datepicker" id="startdate" placeholder="11/22/2019"/>
            <label htmlFor="start" className="black-text">Check-in</label>
          </div>

          <div className="input-field col s6">
            <i className="material-icons prefix">date_range</i>
            <input type="text" className="datepicker" id="enddate" placeholder="12/22/2019"/>
            <label htmlFor="enddate" className="black-text">Check-out</label>
          </div>

          <div className="input-field col s6">
            <i className="material-icons prefix">person</i>
            <input type="number" className="datepicker" id="person" placeholder="11/22/2019"/>
            <label htmlFor="person" className="black-text">Jumlah Tamu</label>
          </div>

          <div className="input-field col s6">
            <i className="material-icons prefix">hotel</i>
            <input type="number" className="datepicker" id="room" placeholder="12/22/2019"/>
            <label htmlFor="room" className="black-text">Jumlah Kamar</label>
          </div>

          <div className='col s12'>
          <button className="btn waves-effect waves-light orange btn-large" type="submit" name="action">Cari
            <i className="material-icons right">search</i>
          </button>

          </div>
          </form>
        </div>

        <div className="col s6" style={{
          padding:'2.5rem'
        }}>
        <img src="https://www.pegipegi.com/assets-hotel-homepage-pc/img/ogp-pegipegi.jpg"/>
        </div>
      </div>
    )
  }


export default Main
