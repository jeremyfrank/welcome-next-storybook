import styles from './Card.module.css'

export default function Card({
  children,
  link,
}: {
  children: React.ReactNode,
  link: string,
}) {
  return <a href={link} className={styles.card}>
    {children}
  </a>
}