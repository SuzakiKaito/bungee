import style from '@/styles/samples/01/page.module.scss'
import styles from '@/styles/samples/01/page.module.css'
// import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Lalezar&family=Merriweather:wght@300&display=swap');

export default function home(){
  return(
    <>
      <div>
        <header className={style.mainContent}>
          <nav>
            <ul className={style.nav}>
              <li><a href="" className={style.changeColor}>概要</a></li>
              <li><a href="">予約</a></li>
              <li><a href="">記録</a></li>
              <li className={style.languageBox}><a href="#">Ja</a></li>
              <li className={style.languageBox}><a href="">En</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <h1 className={style.text1}>I'm</h1>
          <h2 className={style.text2}>chicken</h2>

        </main>
      </div>
    </>
  )
}