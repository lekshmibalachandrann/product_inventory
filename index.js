const jsonServer = require('json-server')

const productInventoryServer = jsonServer.create()

// middleware to parse the json formate
const middleware = jsonServer.defaults()

const router = jsonServer.router('db.json')

productInventoryServer.use(middleware)
productInventoryServer.use(router)

// port for server
const PORT = 4000 || process.env.PORT

productInventoryServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})