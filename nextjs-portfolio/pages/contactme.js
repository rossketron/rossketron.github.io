import Head from 'next/head'
import Contact from '../components/contact-form/contact-form'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ross Ketron | Contact</title>
      </Head>

      <main>
        <Header />
        <Contact />
      </main>
    
      <style jsx>{`
        main {
          background: black;
          height: 100vh;
          padding: 5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}