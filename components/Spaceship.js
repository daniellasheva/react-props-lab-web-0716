import React from 'react';
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {
  render(){
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }

}

Spaceship.defaultProps={
  colors: ["black", "red"],
  hasRockets: false
}

const myspeed= 500

// ReactDOM.render(
//   <Spaceship
//     name = "Millennium Falcon"
//     speed = {myspeed}
//   />,
//   document.getElementById('main')
// )

module.exports= Spaceship
