import Link from "next/link";
import commonStyles from "../../../styles/common.module.css";


const ArticleItem = ({item}) => {
    return <>
        <div className={commonStyles.card}>
            <Link href={'/article/[id]'} as={`/article/${item.id}`}>
                <a>
                    <h3>{item.title} &rarr;</h3>
                    <p>{item.body.substring(0,100)+'...'}</p>
                </a>
            </Link>
        </div>
    </>
}

export default ArticleItem
