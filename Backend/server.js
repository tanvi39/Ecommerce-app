const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const http=require("http")
const bodyParser=require('body-parser')
const {ObjectId}=require('mongodb')
const {MongoClient}= require('mongodb')
const { type } = require('os')

const app=express() //Initialise express

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const uri="mongodb://localhost:27017/Ecommerce_website"

// Start listening to your server
 PORT=8080
app.listen(PORT,()=>{
    console.log("Server is running on: localhost:"+PORT)
})


// fetching data from database
app.get('/admin', async(req,res)=>{
    const client=new MongoClient(uri)
    try{
        await client.connect()
        const database=client.db('Ecommerce_website')
        const data=database.collection('admin')
        const returnData= await data.find().toArray()
        res.send(returnData)
    }
    catch{
        await client.close
    }
})

app.get('/product', async(req,res)=>{
    const client=new MongoClient(uri)
    try{
        await client.connect()
        const database=client.db('Ecommerce_website')
        const data=database.collection('products')
        const returndata=await data.find().toArray()
        res.send(returndata)
    }
    catch{
        await client.close
    }
})

app.get('/product/:id', async(req,res)=>{
    const client=new MongoClient(uri)
    const id=req.params.id
    console.log(id, "In api")
    try{
        await client.connect()
        const database=client.db('Ecommerce_website')
        const data=database.collection('products')
        const objectId = new ObjectId(id);
        const returndata=await data.findOne({ _id: objectId })
        res.send(returndata)
    }
    catch{
        await client.close
    }
})

app.post('/product/add',async(req,res)=>{
    const client=new MongoClient(uri)
    try{
        await client.connect()
        const database=client.db('Ecommerce_website')
        const data=database.collection('products')
        const returnData=await data.insertOne(req.body)
        res.send(returnData)
    }
    catch{
    await client.close
    }
})

app.delete('/product/delete/:id',async(req,res)=>{
    const client=new MongoClient(uri)
    const id=req.params.id
    try{
        await client.connect()
        const database=client.db('Ecommerce_website')
        const data=database.collection('products')
        const objectId = new ObjectId(id);
        const returnData=await data.deleteOne({ _id: objectId })
        res.send(returnData)
    }
    catch{
        await client.close
    }
})
 
app.put('/product/edit/:id',async(req,res)=>{
    const id=req.params.id
    const updateData=req.body
    const client=new MongoClient(uri)
    console.log("put method")
    try{
        await client.connect()
        const database=client.db('Ecommerce_website')
        const data=database.collection('products')
        const objectId=new ObjectId(id)
        const updateProduct=await data.updateOne({ _id: objectId },{$set:updateData})
        console.log(updateProduct)
        res.send(updateProduct)
    }
    catch{
        await client.close
    }
})