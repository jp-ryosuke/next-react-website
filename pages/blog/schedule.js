import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

/* async/await
async をつけて関数を宣言すると非同期関数を定義でき、特別な処理を入れなくても Promise オブジェクトになる
非同期関数では await 式が使えて await 式は Promise オブジェクトの状態を評価してその状態が Fulfilled か Rejected に変わるまで待つ
Fulfilled か Rejected に変わると次の処理へと進む*/

export async function getStaticProps() {
  const slug = 'schedule'
  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  }
}
