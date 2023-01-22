const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, looks like you are lost. Click to find your way</p>
                <a href="/">
                    <button className="btn-primary">Home</button>
                </a>
                <div>
                    <img className='mainImage' src='/images/maze.jpeg' alt='Restaurant Interior'/>
                    <div> Photo by <a href="https://unsplash.com/de/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Sigmund</a> on <a href="https://unsplash.com/s/photos/maze?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404
