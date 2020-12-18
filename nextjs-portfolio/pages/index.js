import Head from 'next/head'
import TextLoop from 'react-text-loop'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ross Ketron | Home</title>
      </Head>

      <main>
        <Header />
        <div className="content">
          <h1 className="title">Hi, my name is<br/>Ross Ketron</h1>
          <p className="description">
            I am a <span> </span>
            <span id="i-am-a" className="dynamic">
              <TextLoop children={[
                "student.",
                "developer.",
                "learner.",
                "problem solver.",
                "husband.",
                "coffee lover."
              ]} 
              springConfig={{ stiffness: 125, damping: 10 }} />
            </span>
          </p>
          <Footer />
        </div>
      </main>
    
      <style jsx>{`


        main {
          background: url(/background.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 100vh;
          padding: 5rem 0;
          display: flex;
          flex-direction: row;
          justify-content: left;
          align-items: center;
        }

        .content {
          margin: 5rem 5rem;
          width: 450px;
        }

        .title {
          margin: 0;
          font-size: 4rem;
        }

        .title,
        .description {
          color: rgb(216,216,216);
          text-align: left;
        }

        .description {
          font-size: 3rem;
          margin-bottom: 5rem;
        }

        span {
          color: crimson;
        }

        @media (max-width: 600px) {
          .main {
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .content {
            margin: 2rem 2rem;
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
    </div>
  );
};
