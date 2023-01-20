const React = require('react')
const Def = require('./default')

function newPlace () {
    return (
        <Def>
            <main>
                <h1>ADD A NEW PLACE</h1>
                <p>A form will be added to create a new place</p>
            </main>
        </Def>
    )
}

module.exports = newPlace