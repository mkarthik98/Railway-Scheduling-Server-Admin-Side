const connectToMongodb = require('./db')
const express = require('express')
const Train = require('./models/Train')
const app = express()
const cors = require('cors')
const port = 5000

// using middleware to deal with json files
app.use(express.json())

app.use(cors())

connectToMongodb();

app.get('/', (req, res) => {
    res.send('Hello Mahesh!')
})

app.post('/addtrain', async (req , res) => {
    try {
        const train = new Train(req.body)
        const savedTrain = await train.save();
        res.json({success : true , savedTrain})
    } catch (error) {
        console.error(error);
        res.status(500).send({success : false  , msg : "Internal server error"})
    }
})

app.get('/gettrain', async (req, res) => {
    try {
        const trains = await Train.find();
        res.status(200).json({success : true , trains})

    } catch (error) {
        res.status(400).json({success : false , msg : "Internal server error"} )
    }
})

app.listen(port, () => {
    console.log(`iNoteBook app listening on port http://localhost:${port}`)
})