import Link from "next/link";


const GO = ({where, text, as}) => {
    return <Link href={where} as={as}>{text}</Link>
}

export default GO
