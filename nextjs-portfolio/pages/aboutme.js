import Head from 'next/head'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ross Ketron | About Me</title>
      </Head>

      <main>
        <Header />
          <img src="/hiking.png" />
          <p className="description">
            I'm currently studying computer science at the University of Tennessee in Knoxville.
            I also have a degree in Wildlife and Fisheries Science, and I'm very passionate about the outdoors.
            I spent several years moving across the country working various wildlife research positions and as a wildland firefighter.
            When not playing on computers, I'm usually exploring outside with my wife and dogs!
          </p>
      </main>
    
      <style jsx>{`

        main {          
          background: black;
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 100vh;
          padding: 5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        img {
          margin-top: 2rem;
          width: 30%;
        }
      
        .description {
          color: rgb(216,216,216);
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: left;
          margin: 5rem;
        }

        @media (max-width: 600px) {
          img {
            width: 50%;
            margin-top: 2rem;
          }
          .description {
            margin: 2rem;
          }
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
    </Layout>
  )
}