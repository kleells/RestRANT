const React = require('react')
const places = require('../../models/places')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet.
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
        if (data.place.commments) {
            let sumRating = data.place.comments.reduce((tot, c) => {
                return tot + c.stars
            }, 0)
            let averageRating = Math.round(sumRatings / data.place.comments)
            let stars = ''
            for (let i=0; i < averageRating; i++) {
                stars += '⭐️'
            }
            rating = (
                <h3>
                    {stars} stars 
                </h3>
            )
            comments = data.place.comments.map(c => {
                return (
                    <div className='border'>
                        <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave' }</h2>
                        <h4>{c.content}</h4>
                        <h3>
                            <strong>- {c.author}</strong>
                        </h3>
                        <h4>Rating: {c.stars}</h4>
                    </div>
                )
            })
        }
    return (
        <Def>
            <main>
                <div className='col-sm-6'>
                    <img src={ data.place.pic } alt={ data.place.name }/>
                    <div className='container'>
                        <h1>{data.place.name}</h1>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                    <p>
                        Located in { data.place.city }, { data.place.state }
                    </p>
                </div>
                <div className='container'>
                    <h2>Rating</h2>
                    {rating}
                </div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                <div className='container'>
                    <h2>Rant or Rave Here</h2>
                    <form method='POST' action={`/places/${data.place.id}/comment`}>
                        <div className='form-group'>
                            <label htmlFor='author'>Name</label>
                            <input className='form-control' name='author' id='author' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='content'>Comments</label>
                            <input className='form-control' name='content' id='content' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="stars">Star Rating (between 1 and 5):</label>
                            <input type="number" step={0.5} id="stars" name="stars" min="1" max="5" />                        
                        </div>
                        <div className='form-group'>
                            <label htmlFor='rant'>Is this a rant? (negative)</label>
                            <input type='checkbox' name='rant' id='rant' />
                        </div>
                        <div>
                            <input type='submit' value='Submit' />
                        </div>
                    </form>
                    <h2>Comments</h2>
                    {comments}
                    </div>
            </main>
        </Def>
    )
}

module.exports = show