import styles from './Button.module.css'

enum Side {
  Left = 'left',
  Right = 'right',
}

const Icon = ({icon}: Props) => (
  <i className={styles.icon}>{icon}</i>
)

export default function Button({
  children,
  icon,
  icon_position,
  disabled,
}: {
  children: React.ReactNode,
  icon: string,
  icon_position: Side,
  disabled: boolean,
}) {
  return <button disabled={disabled} className={styles.button}>
    {icon && icon_position == 'left' ? <Icon icon={icon} /> : ''}
    {' '}
    {children}
    {' '}
    {icon && icon_position == 'right' ? <Icon icon={icon} /> : ''}
  </button>
}
