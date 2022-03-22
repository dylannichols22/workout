import styles from "../styles/Layout.module.css"

const Layout = (props: any) => {
    return <div className={styles.container}>{props.children}</div>
}

export default Layout