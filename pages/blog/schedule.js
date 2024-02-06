import { client } from 'lib/api'

export default function Schedule() {
  return <h1>記事のタイトル</h1>
}

/* async/await
async をつけて関数を宣言すると非同期関数を定義でき、特別な処理を入れなくても Promise オブジェクトになる
非同期関数では await 式が使えて await 式は Promise オブジェクトの状態を評価してその状態が Fulfilled か Rejected に変わるまで待つ
Fulfilled か Rejected に変わると次の処理へと進む*/

export async function getStaticProps() {
  const resPromise = client.get({
    endpoint: 'blogs',
  })

  try {
    const res = await resPromise
    console.log(res)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {},
  }
}
