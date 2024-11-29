import express from "express";
require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.get('/', (req: any, res: any) => {
    res.send('Hello, TypeScript with Express!');
});

app.get('/:id', (req:any, res:any) => {

})

app.post('/', (req:any, res:any) => {

})

app.put('/:id', (req:any, res:any) => {

})

app.delete('/:id', (req:any, res:any) => {

})



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});