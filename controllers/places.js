const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'https://images.unsplash.com/photo-1571974448718-ac26a9af7d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmVmcm9udHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
    })


router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router
