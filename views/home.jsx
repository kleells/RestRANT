const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>The Discerning Diner</h1>
                <div>
                    <img className='mainImage' src='/images/restaurantInterior.jpeg' alt='Restaurant Interior'/>
                    <div>
                        Photo by Ronan Kruithof on Unsplash
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
