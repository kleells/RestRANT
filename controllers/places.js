const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Busters on 28th',
        city: 'Minneapolis',
        state: 'MN',
        cuisines: 'Beer bar, American',
        pic: 'https://images.unsplash.com/photo-1546622891-02c72c1537b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlciUyMHRhcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }, {
        name: 'Brewery Bhavana',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'Brewery, Chinese',
        pic: 'https://images.unsplash.com/photo-1518983546435-91f8b87fe561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGltJTIwc3VtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }]
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router
