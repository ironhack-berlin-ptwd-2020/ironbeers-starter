import axios from 'axios';
import React from 'react';

class BeerDetail extends React.Component {

  state = {
    loading: true,
    name: ""
  }

  componentDidMount() {
    // this.props.match.params.beerID
    axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.beerID).then((resp) => {
      console.log(resp.data)
      this.setState({
        name: resp.data.name,
        loading: false
      })
    })
  }

  render() {

    return (
      <div>

        {this.state.loading && <h1> Loading ... </h1>}

        Beer Name here {this.state.name}



      </div>
    );
  }
}

export default BeerDetail;
