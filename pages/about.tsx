import Card from "../components/Card"
import Footer from "../components/Footer"
import SiteNav from "../components/SiteNav"
import styles from "./About.module.css"

function about() {
  return (
    <main>
        <SiteNav/>
        <section className={styles.about_top_container}>
          <div className={styles.about_top}>
              <div>
                <span>The<span>&#8594;</span></span>
                <span>Lucent</span>
                <span>Story</span>                  
              </div>
              <div>
                <p>Lucent Esports, is an established esports organisation created, developed, and operational in the United Kingdom. Founded in 2018, with a further rebrand in 2020. We are a brand built upon ambition and setting the standards within esports. Our slogan <b>‘Be The Light’</b> fits perfectly into our company's mission statement <b>‘To shine that light on talent and provide them with opportunities in Esports & Gaming.’</b></p>
                <p>The brand was built upon the same fundamentals that are still being implemented three years on. We are a multi-dimensional brand and business that fields premier teams, in premier leagues, creates content and entertainment for the community at home, and allows our audience to empower themselves through our clothing range.</p>
              </div>
              <img src="/img/about-img.webp"/>
          </div>
        </section>
        <section className={styles.about_team_container}>
          <img className={styles.banner} src="/img/our-team.webp"/>
          <div className={styles.team_grid}>
            <div className={styles.grid_item}><Card name="William Gleadall" image="/img/staff/gleady.webp" role="CEO & Co-Founder" bio1="As one of the Founding bodies behind Lucent, William has been at the forefront of Lucent's direction over the past 3 years." bio2="William has a strong background in Social Media, Marketing, and Management." twitter="https://twitter.com/Gleadyy" linkedin="https://www.linkedin.com/in/william-gleadall/"/></div>
            <div className={styles.grid_item}><Card name="Ellis Ratchford" image="/img/staff/ellis.webp" role="Director & Business Development" bio1="A driving force behind the Lucent relaunch in 2020. Ellis currently operates Lucent's Business Development and growth." bio2="Ellis has a strong background in Management, Sales, and Pitching." twitter="" linkedin=""/></div>
            <div className={styles.grid_item}><Card name="Bradely Deamer" image="/img/staff/brad.webp" role="Financial Director & Co-Founder" bio1="A founding member behind Lucent. Bradley has seen the highs and lows throughout the years with Lucent. Bradley actively, heads up Lucent's finance department, while he's currently studying and practicing accountancy at H.W. Fisher." bio2="" twitter="" linkedin=""/></div>
            <div className={styles.grid_item}><Card name="Jack Brier" image="/img/staff/jack.webp" role="Director" bio1="In 2022, Gary joined Lucent as our first member of the Advisory Board." bio2="He is actively the Education Manager at the British Esports Association and has years of experience in Management, Teaching, and Esports." twitter="" linkedin=""/></div>
            <div className={styles.grid_item}><Card name="Gary Tibbet" image="/img/staff/gary.webp" role="Advisor" bio1="In 2022, Gary joined Lucent as our first member of the Advisory Board." bio2="He is actively the Education Manager at the British Esports Association and has years of experience in Management, Teaching, and Esports." twitter="" linkedin=""/></div>
            <div className={styles.grid_item}><Card name="Owen Mead" image="/img/staff/owen.webp" role="Creative Design Lead" bio1="In 2022, Gary joined Lucent as our first member of the Advisory Board." bio2="He is actively the Education Manager at the British Esports Association and has years of experience in Management, Teaching, and Esports." twitter="" linkedin=""/></div>
            <div className={styles.grid_item}><Card name="Robert Walls" image="/img/staff/rob.webp" role="Content Strategist" bio1="In 2022, Gary joined Lucent as our first member of the Advisory Board." bio2="He is actively the Education Manager at the British Esports Association and has years of experience in Management, Teaching, and Esports." twitter="" linkedin=""/></div>
            <div className={styles.grid_item}><Card name="Jordan Hall" image="/img/staff/jord.webp" role="Lead Apparel Designer" bio1="In 2022, Gary joined Lucent as our first member of the Advisory Board." bio2="He is actively the Education Manager at the British Esports Association and has years of experience in Management, Teaching, and Esports." twitter="" linkedin=""/></div>
          </div>
        </section>
        <section className={styles.achievments_container}>
          <img className={styles.banner} src="/img/achievment-banner.webp"/>
          <div>
            
          </div>
        </section>
        <Footer/>
    </main>

  )
}

export default about