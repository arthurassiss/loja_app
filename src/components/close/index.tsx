import styles from './styles.module.scss';
import Image from "next/image";
import close from '../../../public/images/close.svg'

export default function Close () {
    return (
        <Image className={styles.btn} src={close} alt='close' width={96} height={96}/>
    )
}