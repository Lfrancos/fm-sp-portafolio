import styles from './Button.module.scss';
interface Props {
    name: string;
}
export const Button = ({name}: Props) => {
  return (
    <button className={styles.button}>{name}</button>
  )
}
