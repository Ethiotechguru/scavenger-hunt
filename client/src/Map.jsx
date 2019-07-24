import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

class Map extends React.Component {
	render () {
		// let creating = this.props.creating
		let lng = this.props.lng
		let lat = this.props.lat

		const Map = new ReactMapboxGl({
			accessToken: 'pk.eyJ1IjoibWNkdWRsZXk4NyIsImEiOiJjanhlejR5YWIwdWFwM25tcHNubDdpejIwIn0.n-RmlJrsycjQ76M82M_02Q',
			container: 'map',
			minZoom: 12,
			maxZoom: 14
		}
	);

	// if creating...
		// return map with geolocation
	// if !creating...

	return (
			<>
				<div className="mapboxBox">
					<Map
						center={[lng, lat]}
						style="mapbox://styles/mapbox/streets-v9"
						containerStyle={{
							height: '250px',
							width: '250px'
						}}>
						<Marker coordinates={[lng, lat]}
							style={{backgroundColor: 'rgba(100, 0, 100, 50% )', height: '25px', width: '25px', borderRadius: '50%'}}>
						</Marker>
					</Map>
				</div>
				<button onClick={this.handleButtonClick}>SOMEDAY I'LL BE A USEFUL SUBMIT BUTTON! </button>
			</>
		)
	}
}	

export default Map;