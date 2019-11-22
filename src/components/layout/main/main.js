import React, {Component} from 'react';

class Main extends Component {
  render(){
    return(

      <div className="row">
        <div className="col s6">
        <h5>Cari Hotel</h5>
          <form onSubmit={this.onSubmit}>
          <div className="input-field col s12">
          <i class="material-icons prefix">search</i>

          <input placeholder="Semarang" id="search" type="text" class="validate"/>
            <label for="search" className="black-text">Nama Lokasi/Tujuan</label>
          </div>

          <div className="input-field col s6">
            <i class="material-icons prefix">date_range</i>
            <input type="text" class="datepicker" id="startdate" placeholder="11/22/2019"/>
            <label for="start" className="black-text">Check-in</label>
          </div>

          <div className="input-field col s6">
            <i class="material-icons prefix">date_range</i>
            <input type="text" class="datepicker" id="enddate" placeholder="12/22/2019"/>
            <label for="enddate" className="black-text">Check-out</label>
          </div>

          <div className="input-field col s6">
            <i class="material-icons prefix">person</i>
            <input type="number" class="datepicker" id="person" placeholder="11/22/2019"/>
            <label for="person" className="black-text">Jumlah Tamu</label>
          </div>

          <div className="input-field col s6">
            <i class="material-icons prefix">hotel</i>
            <input type="number" class="datepicker" id="room" placeholder="12/22/2019"/>
            <label for="room" className="black-text">Jumlah Kamar</label>
          </div>

          <div className='col s12'>
          <button class="btn waves-effect waves-light orange btn-large" type="submit" name="action">Cari
            <i class="material-icons right">search</i>
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
}

export default Main
