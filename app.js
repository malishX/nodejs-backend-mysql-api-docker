require('dotenv').config()
const express = require('express')
const app = express();

const sequelize = require('./db/dbconnection')

// General Middlewares
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.all('*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token");
    next();
});

// Application health routes
app.get('/health', async (req, res) => {
    let dbSuccess = 'Not Connected...!'
    try {
        await sequelize.authenticate()
        dbSuccess = 'OK'
    } catch (error) {
        dbSuccess = 'Error..!'
    }
    
    const appKey = process.env.APP_KEY === undefined ? 'APP Key is missing!!!' : 'OK';

    res.status(200).json({
        'DB Connected': dbSuccess,
        'Health': 'OK',
        'App Key': appKey,
    })
})

// All the Catalogue API Routes are loading from here
const userRoutes = require('./routes/user.routes')
const memberRoutes = require('./routes/member.routes')
app.use('/users', userRoutes)
app.use('/members', memberRoutes)

// Server
const port = process.env.PORT || 3000
app.listen(port, async () => { console.log(`API running on port ${port}`) })
    .on('error', (err) => {
        console.log(err);
    })