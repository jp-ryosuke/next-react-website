import 'styles/globals.css'
import Layout from 'components/layout'

//Font Awesome の設定
//Font Awesome の css をインポート
//グローバルスタイルとしてサイト全体に適用する
import '@fortawesome/fontawesome-svg--core/styles.css'

//Font Awesome の svg コアが個別に css を適用するのを無効化
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
