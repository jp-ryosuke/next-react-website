import Container from 'components/container'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>
        {/* メインコンテンツの横幅を Layout コンポーネントでまとめて指定する
        全ページまとめて整えることができるがページごとにコンテンツの横幅を細かく調整することはできなくなる*/}
        <Container>{children}</Container>
      </main>

      <Footer />
    </>
  )
}
