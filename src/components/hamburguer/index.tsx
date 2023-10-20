import styles from './styles.module.scss';
import Image from "next/image";
import hamburguer from '../../../public/images/hamburguer.svg'

export default function Hamburguer() {
    return (
        <Image className={styles.btn} src={hamburguer} alt='hamburguer' width={96} height={96}/>
    )
}