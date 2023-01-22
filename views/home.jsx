const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img className='mainImage' src='/images/restaurantInterior.jpeg' alt='Restaurant Interior'/>
                    <div> Photo by <a className='link' href="https://unsplash.com/@ronank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Ronan Kruithof</a> on <a className='link' href="https://unsplash.com/s/photos/restaurant-table?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
