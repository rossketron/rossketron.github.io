import Head from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ross's Portfolio | Projects</title>
      </Head>

      <main>
        <Header />
        <p className="description">
          I'm currently in the process of learning and developing more to showcase my skills in..
        </p>
        <div className="language-icon-row">
          <img src="/react.png" alt="React logo" className="logo" />
          <img src="/html.svg" alt="HTML5 logo" className="logo" />
          <img src="/css.svg" alt="css logo" className="logo" />
          <img src="/javascript-icon.svg" alt="js logo" className="logo" />
          <img src="/nodejs.jpg" alt="NodeJS logo" className="logo" />      
          <img src="/mongodb.png" alt="MongoDB logo" className="logo" />              
        </div>

        <div className="grid">
          <a
            href="https://github.com/rossketron" 
            className="code-link card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="card-content">
              <h3>Vanilla Superball</h3>
              <p>Fun single page game similar to candy crush using vanilla js</p>
            </div>
          </a>

          <a
            href="https://github.com/rossketron" 
            className="code-link card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="card-content">
              <h3>Zelda Web-App</h3>
              <p>Working on creating a web app to get all Zelda BOTW recipes</p>
            </div>
          </a>                 

          <a
            href="https://github.com/rossketron" 
            className="code-link card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="card-content">
              <h3>This Portfolio Site</h3>
              <p>Built this site using React and NextJS</p>
            </div>
          </a>       

          <a
            href="https://github.com/rossketron" 
            className="code-link card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="card-content">
              <h3>More to come..</h3>
              <p>Look out for future projects!</p>
            </div>
          </a>  
        </div>     
      </main>

      <style jsx>{`

        main {
          background: black;
          min-height: 100vh;
          padding: 5rem 5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .language-icon-row {
          width: 100%;
          margin: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-evenly;
        }

        .logo {
          height: 3rem;
        }

        .description {
          margin-top: 
          text-align: center;
          color: rgb(216,216,216);
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
          margin-bottom: 3rem;
        }

        .card {
          background-color: rgb(153,0,0,0.3);
          height: 300px;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: rgb(216,216,216);
          text-decoration: none;
          border: 1px solid crimson;
          border-radius: 50%;
          transition: color 0.15s ease, border-color 0.15s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .card:hover,
        .card:focus,
        .card:active {
          background-color: rgb(211,211,211,.1);
          color: crimson;
          border-color: crimson;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
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
  )
}
