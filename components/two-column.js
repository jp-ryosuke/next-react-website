import styles from 'styles/two-column.module.css'

//複数のコンポーネントを作成するので default function ではなく名前付き funcation
export function TwoColumn({ children }) {
  return <div className={styles.flexContainer}>{children}</div>
}

//メインボックスとなる TwoColumnMain の設定
export function TwoColumnMain({ children }) {
  return <div className={styles.main}>{children}</div>
}

//サイドバーとなる TwoColumnMain の設定
export function TwoColumnSidebar({ children }) {
  return <div className={styles.sidebar}>{children}</div>
}
