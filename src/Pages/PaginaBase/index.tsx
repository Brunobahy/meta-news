import Cabecalho from 'components/Cabecalho'
import styles from './PaginaBase.module.css'
import { Outlet, useNavigate } from 'react-router-dom'

export default function PaginaBase() {

    return (
        <>
            <Cabecalho />
            <main className={styles.pagina}>
                <Outlet />
            </main>
        </>
    )
}
