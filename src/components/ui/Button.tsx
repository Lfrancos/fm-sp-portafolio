import styles from './Button.module.scss';
interface Props {
    name: string;
    color: string;
}
export const Button = ({name, color = 'back'}: Props) => {
  return (
    <button className={`${styles.button} ${styles[color]}`}>{name}</button>
  )
}
