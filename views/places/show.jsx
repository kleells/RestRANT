const React = require('react')
const Def = require('./default')

function showPlace () {
    return (
        <Def>
            <main>
                <h1>DETAILS OF A PLACE</h1>
                <p>This form will show details of the places</p>
            </main>
        </Def>
    )
}

module.exports = showPlace