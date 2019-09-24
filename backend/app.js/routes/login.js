var express = require('express');
var router = express.Router();
var User = require('../DB/schemas/user');
var jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

/* GET users listing. */
router.post('/register', function(req, res, next) {
  let userData = req.body
  let user = new User(userData)
  user.save((error, registeredUser) => {
      if(error){
          console.log(error)
      } else {
          let payload = { subject: registeredUser._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
      }
  })
});


router.post('/login', (req,res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log(error)
        } else {
            if(!user) {
                res.status(401).send('Invalid email')
            } else
            if(user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }        
        }
    })
})


router.get('/events', (req,res) => {
    let events = [
        {
            "_id": "1",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "2",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "3",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "4",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "5",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "6",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "7",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        }
    ]
    res.json(events)
})

router.get('/special', verifyToken, (req,res) => {
    let events = [
        {
            "_id": "1",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "2",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "3",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "4",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "5",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "6",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        },
        {
            "_id": "7",
            "name": "auto Expo",
            "description": "lorem ipsum",
            "date": "24-09-2019"
        }

    ]
    res.json(events)
})

module.exports = router;
