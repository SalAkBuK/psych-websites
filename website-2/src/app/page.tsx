import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Website 2</h1>
        <p className={styles.description}>
          Built with Next.js 14, TypeScript, and CSS Modules
        </p>
      </div>
    </main>
  )
}
