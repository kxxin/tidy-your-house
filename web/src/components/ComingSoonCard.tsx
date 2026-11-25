import styles from './ComingSoonCard.module.css'

export function ComingSoonCard() {
  return (
    <div className={styles.card}>
      <div>
        <p className="text-lg font-semibold">The game will load here</p>
        <p className={styles.hint}>Unity WebGL build arrives in week 3</p>
      </div>
    </div>
  )
}
