import styles from './Post.module.css'

export function Post() {
  return (
    <article style={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/EnickJhony.png"
          />
          <div className={styles.authorInfo}>
            <strong>Enick Jhony</strong>
            <span>Web Developer Disk</span>
          </div>
        </div>

        <time title="24 de Abril ás 8h15 horas" dateTime="2023-04-24 08:15:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}
