import express from 'express'

import { getTuotteet, getTuote, createTuote } from './database.js'

const app = express()

app.get("/Tuotteet", async (req, res) => {
    const Tuotteet = await getTuotteet()
    res.send(Tuotteet)
})

//get-request for specific tuote
app.get("/Tuotteet/:id", async (req, res) => {  
    const id = req.params.id
    const tuote = await getTuote(id)
    res.send(tuote)
})

app.post("/Tuotteet", async (req, res) => {
    const { tuote, valmistaja, id, vastuuhenkilö, hanke, tilauspäivä, viimeinen_säilytyspv, käytössä, takuu} = req.body
    const newTuote = await createTuote(tuote, valmistaja, id, vastuuhenkilö, hanke, tilauspäivä, viimeinen_säilytyspv, käytössä, takuu)
    res.status(201).send(newTuote)
})


//run with "npm run dev"



// express error handling code blocki: https://expressjs.com/en/guide/error-handling.html
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen(8080, () => {
 console.log('Server is running on port 8080')
  })



