import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

import App from './src'

const PORT = 6205
const app = express()
const router = express.Router()

app.use('./build', express.static('./build'))

app.use((req, res, next) => {
    if (/\.js|\.css|\.png/.test(req.path)) {
        res.redirect('/build' + req.path)
    } else {
        next()
    }
})

app.get('*', (req, res, next) => {
    const context = {}
    const myAppCode = ReactDomServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    const indexFile = path.resolve('./build/index.html')
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.log('there is err loading')
            return res.status((500)).send('error loading, contact admin')
        }
        return res.status(200).send(data.replace(`<div id="root"></div>`, `<div id="root">${myAppCode}</div>`))
    })
})

router.use(express.static(path.resolve(__dirname, '..', 'build'), {maxAge: '10d'}))
app.use(router)

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})



