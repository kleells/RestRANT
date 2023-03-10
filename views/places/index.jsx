const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-lg-6">
                <h2>
                    <a className='placeName' href={`/places/${place.id}`} >
                        {place.name}
                    </a>
                </h2>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img className='image' src={place.pic} alt={place.name}/>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
            })
    return(
        <Def>
                <main>
                    <h1>Places</h1>
                    <p>Rant or Rave about places!</p>
                    <div className='row'>
                        {placesFormatted}
                    </div>
                </main>
        </Def>
    )
}

module.exports = index
