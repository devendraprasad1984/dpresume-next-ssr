import articles from '../../offline/articles'


export default function handler(req, res) {
    res.status(200).json(articles)
}
