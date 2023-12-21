import express from 'express';


const app = express ()
const PORT = process.env.PORT || 3000

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

  //routes file
  import routes from './Routes/index.js'
app.use(routes)





  app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
  })