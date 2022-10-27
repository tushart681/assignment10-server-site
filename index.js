const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const categories = require('./data/category.json')
const courses = require('./data/course.json')
const premium = require('./data/premium.json')

app.get('/', (req, res) => {
    res.send('new api running');
})
app.get('/course-category', (req, res) => {
    res.send(categories)
})
app.get('/premium-course', (req, res) => {
    res.send(premium)
})
app.get('/all-course', (req, res) => {
    res.send(courses)
})
app.get('/course-detail/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.filter(n => n.category_id === id)
    res.send(selectedCourse)
})
app.listen(port, () => {
    console.log('learning site has open', port)
})