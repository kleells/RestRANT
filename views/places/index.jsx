const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
            })
    return(
        <Def>
            <main>
                <h1>Places</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index
