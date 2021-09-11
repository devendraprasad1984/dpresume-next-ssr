import {articles} from '../../../offline/articles'


export default function handler(req, res) {
    // console.log('articles response', res, articles)
    res.status(200).json({data: articles})
}

