import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function PageLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          href="https://media.istockphoto.com/id/1350572665/vector/question-mark-icon-and-lamp-in-color-speech-bubble.jpg?s=612x612&w=0&k=20&c=I3vJt-2ujLSZUsLmJWPnsFMWv2pZlYoIFdK3Xb2aJAk="
        />
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
