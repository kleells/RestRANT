const db = require('../models')

db.Place.create([{
    name: 'Wilson\'s Eatery',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Southern inspired sandwiches, flatbreads and salads',
    pic: 'https://images.rawpixel.com/image_500/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTg1MzM2MS13aWtpbWVkaWEtaW1hZ2Uta293ZDV3OXcuanBn.jpg',
    website: 'https://wilsonseatery.com/',
    founded: 2020
}, {
    name: 'Bittersweet',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Craft Cocktials, Dessert',
    pic: 'https://imgs.search.brave.com/EEdxAWCAU0DQ3QvNUNKMdq0QdUAu_i8YRpRZ6oodnGg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/bDhZQjdvWlFma2xz/MG5RMUw3aHlBSGFF/OCZwaWQ9QXBp',
    website: 'https://www.bittersweetraleigh.com/',
    founded: 2018
}, {
    name: 'Hop & Barrel Brewing Company',
    city: 'Hudson',
    state: 'WI',
    cuisines: 'Craft Beer',
    pic: 'https://images.unsplash.com/photo-1532634786-c8f8c46a0062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJld2luZyUyMGJlZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    website: 'https://www.hopandbarrelbrewing.com/',
    founded: 2017
}, {
    name: 'El Rodeo Mexican Restaurant',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Mexican',
    pic: 'https://images.unsplash.com/photo-1625167171750-419e95f877d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1leGljYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    website: 'https://elrodeonc.com/downtown-raleigh/locations/',
    founded: 1989
}, {
    name: 'Brewery Bhavana',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Chinese, Craft Beer',
    pic: 'https://imgs.search.brave.com/pFb16yZ0q4Fd73fyOltUBQIqXwtOfAhxYqyuHcEh3xY/rs:fit:1200:1067:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU4/YWJjNzgwYzUzNGE1/N2NlMzhmOGVkZS8x/NjAzMjI5NDAzNjc1/LVY3VDAwRjhWRUZN/ODlMUFpES1lDL2tl/MTdad2RHQlRvZGRJ/OHBEbTQ4a0hUSEps/QUNxeTlQUjY3SjM5/QVRIT3A3Z1FhM0g3/OEgzWTB0eGphaXZf/MGZEb092eGNkTW1N/S2tEc3lVcU1Tc01X/eEhrNzI1eWlpSEND/TGZyaDhPMXo1UVBP/b2hESWFJZWxqTUhn/REY1Q1ZsT3FwZU5M/Y0o4ME5LNjVfZlY3/UzFVZloxcVFsQ0JV/OEQ4SHdNU3gxOVhX/V2haV29BcmFxSnRf/eWJoaXhBMGt6VkRW/ZlJ4Z0FJc1E3ZVFp/T25RUzNDX1EvNzkz/NF93ZWJzaXplLmpw/Zw',
    website: 'https://brewerybhavana.com/',
    founded: 2018
}, {
    name: 'Buster\'s on 28th',
    city: 'Minneapolis',
    state: 'MN',
    cuisines: 'Pub grub, Craft Beer',
    pic: 'https://images.unsplash.com/photo-1625167171750-419e95f877d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1leGljYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    website: 'https://www.busterson28th.com/',
    founded: 1983
}, {
    name: 'Player\'s Retreat',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Bar Food, Great Cocktails',
    pic: 'https://images.unsplash.com/photo-1621873495884-845a939892d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwZmFzaGlvbmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    website: 'https://www.playersretreat.com/',
    founded: 1951
},])

.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
