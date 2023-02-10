const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet.
        </h3>
    )
        if (data.place.commments) {
            comments = data.place.comments.map(c => {
                return (
                    <div className='border'>
                        <h2 className='rant'>{c.rant ? 'Dislike' : 'Love' }</h2>
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
                <h1>{ data.place.name }</h1>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={ data.place.pic } alt={ data.place.name }/>
                        <h3>Rating</h3>
                        <p>None yet</p>
                    </div>
                    <div className='col-lg-6'>
                        <h3>Description</h3>
                        <p className='text-center'>
                            Located in { data.place.city }, { data.place.state }
                        </p>
                        <p>
                            {data.place.showEstablished()}
                        </p>
                        <hr />
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
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                            Edit
                        </a>
                        <br></br>
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div> 
            </main>
        </Def>
    )
}

module.exports = show