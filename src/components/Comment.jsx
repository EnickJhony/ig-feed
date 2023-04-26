import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/EnickJhony.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Enick Jhony</strong>
              <time
                title="24 de Abril ás 8h15 horas"
                dateTime="2023-04-24 08:15:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash
                size={24}
              />
            </button>
          </header>

          <p>Muito bom mermão, parabens!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}