import Link from "next/link";
import commonStyles from "../../../styles/common.module.css";


const ArticleItem = ({item}) => {
    return <Link href={'/article/[id]'} as={`/article/${item.id}`} className={commonStyles.card}>
        <a>
            <h3>{item.title} &rarr;</h3>
            <p>{item.body}</p>
        </a>
    </Link>
}

export default ArticleItem
