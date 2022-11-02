const express = require('express')
const path = require('path')

const app = express()


app.use(express.json({
    extended: false
}))

app.use(express.static('build'))

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} ...`)
})