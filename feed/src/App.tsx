import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'


interface Posts extends PostProps {
  id: number
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/EnickJhony.png',
      name: 'Enick Jhony',
      role: 'Programador'
    },
    content:[
      { type: 'paragraph', content: 'Esse é o texto do post' },
      { type: 'paragraph', content: 'vou modificar a segunda linha' },
      { type: 'link', content: 'google.com/enick' }
    ],
    publishedAt: new Date('2023-04-30 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/brennonjunio.png',
      name: 'Brennon',
      role: 'Corno'
    },
    content:[
      { type: 'paragraph', content: 'Ficou muito massa irmão!' }
    ],
    publishedAt: new Date('2023-04-27 22:00:00')
  },
  {
    id: 3,
    author: {
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Lindo'
    },
    content:[
      { type: 'paragraph', content: 'Esse é o texto do post' },
      { type: 'paragraph', content: 'vou modificar a segunda linha' },
      { type: 'link', content: 'google.com/enick' }
    ],
    publishedAt: new Date('2023-04-10 12:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
