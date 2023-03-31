import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function PageLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main
        style={{
          marginTop: '4rem',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

PageLayout.defaultProps = {
  title: 'ExQuizIt',
  description: 'ExQuizIt - A Quiz App for Everyone',
}
