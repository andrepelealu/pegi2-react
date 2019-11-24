import React , {Component} from 'react';

class Header extends Component{
  render(){
    return(


      <div>
      <nav>
        <div className="nav-wrapper white">
          <a href="#" className="brand-logo text"><img src="https://www.pegipegi.com/assets-hotel-homepage-pc/img/logo-primary.png" style={{
            width: '150px',
            height: '30px',
            marginLeft: '1rem'
          }}/></a>

        </div>
      </nav>
      </div>
    )
  }
}

export default Header
