import {articles} from '../../../offline/articles'


export default function handler(req, res) {
    const id = req.query.id || -1
    // console.log('trying to find',id, req.query)
    const filtered = articles.filter(article => parseInt(article.id) === parseInt(id))
    if (filtered.length > 0)
        res.status(200).json(JSON.stringify(filtered[0]))
    else {
        res.status(404).json({message: `page for id=${id} not found`})
    }
}
