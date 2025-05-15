import styles from'./colorTest.module.scss'
import style from './colorTest.module.css'
function Page() {
  return (
    <div>
      <h1 className={styles.highLight}>color test</h1>
      <h2 className={style.hightlights}>css trail</h2>
    </div>
  )
}

export default Page
