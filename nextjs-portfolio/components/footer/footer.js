import styles from './footer.module.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.container}>
        <a 
          className={styles.footer_link}
          href="https://github.com/rossketron"
          target="_blank" 
          rel="noopener noreferrer"> 
          <img src="/github.svg" alt="Github Logo" className={styles.logo} />
        </a>
        <a 
          className={styles.footer_link}
          href="https://linkedin.com/in/rossketron"
          target="_blank"
          rel="noopener noreferrer">  
          <img src="/linkedin.svg" alt="LinkedIn Logo" className={styles.logo} />
        </a>          
        <a 
          className={styles.footer_link}
          href="https://facebook.com/ross.ketron"
          target="_blank"
          rel="noopener noreferrer">  
          <img src="/facebook.png" alt="Facebook Logo" className={styles.logo} />
        </a>
        <a 
          className={styles.footer_link}
          href="https://twitter.com/KetronRoss"
          target="_blank"
          rel="noopener noreferrer">  
          <img src="/twitter.svg" alt="Twitter Logo" className={styles.logo} />
        </a>
      </footer>
    )
  }
}

export default Footer