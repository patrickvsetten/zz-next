import Link from "next/link"

import styles from '../styles/buttons.scss'

export default function Button({ children, link, type, target, className }) {
    return (
        <Link href={link} className={`button button--${type} ${className}`} target={target} data-text={children}>
            <span>{children}</span>
        </Link>
    )
}