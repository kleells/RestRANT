const React = require('react')
const Def = require('../default')

function showPlace (data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <img src={ data.place.pic } alt={ data.place.name }/>
                <h3>Rating</h3>
                <p>None yet</p>
                <h3>Description</h3>
                <p className='text-center'>
                    Located in { data.place.city }, { data.place.state } and serving { data.place.cuisines }.
                </p>
                <p>Future comments section</p>
                <a href={`/places/${data.i}/edit`} className="btn btn-warning"> 
                    Edit   
				</a>
				<form method="POST" action={`/places/${data.i}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = showPlace