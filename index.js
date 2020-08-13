require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(cors())

const morganFormat = (tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}

app.use(morgan(morganFormat))

const Person = require('./models/person.js')

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]


app.get('/api/persons', (_req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  if(!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number information missing'
    })
  }
  // if(persons.find(p => p.name === body.name)) {
  //   return res.status(400).json({
  //     error: 'name must be unique'
  //   })
  // }
  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    res.json(savedPerson)
  })

})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id).then(person => {
    if(person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  }).catch(err => next(err))
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const person = {
    number: body.number
  }
  Person.findByIdAndUpdate(req.params.id, person, {new: true})
    .then(updatedPerson => {
      if(updatedPerson)
        return res.json(updatedPerson)
      res.status(404).end()
    })
    .catch(err => next(err))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(_result => {
      res.status(204).end()
    }).catch(err => next(err))
})

app.get('/info', (_req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people</p>${new Date()}</p></p>`)
})

const errorHandler = (error, _request, response, next) => {
  console.log(error.message)
  if(error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
