import './App.css'

const appTitle: string = 'Personal Library'

type Book = {
  id: number
  title: string
  author: string
  progress: number
  totalPages: number
  dueDate: string
}

const mockBooks: Book[] = [
  { id: 1, title: 'Чистый код', author: 'Роберт Мартин', progress: 120, totalPages: 464, dueDate: '2026-02-15' },
  { id: 2, title: 'Атомные привычки', author: 'Джеймс Клир', progress: 80, totalPages: 320, dueDate: '2026-02-28' },
  { id: 3, title: 'Дюна', author: 'Фрэнк Герберт', progress: 250, totalPages: 688, dueDate: '2026-03-10' },
  { id: 4, title: 'Гарри Поттер и философский камень', author: 'Дж. К. Роулинг', progress: 432, totalPages: 432, dueDate: '2026-01-30' },
]

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>{appTitle}</h1>
        <p>Личная библиотека, сроки и прогресс.</p>
      </header>

      <section aria-labelledby="items-title">
        <h2 id="items-title">Мои книги</h2>

        <div className="table-wrapper">
          <table className="book-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Название</th>
                <th>Автор</th>
                <th>Прогресс</th>
                <th>Вернуть до</th>
              </tr>
            </thead>
            <tbody>
              {mockBooks.map((book, index) => {
                const percent = Math.round((book.progress / book.totalPages) * 100)
                const isDone = percent === 100
                return (
                  <tr key={book.id}>
                    <td className="cell-num">{index + 1}</td>
                    <td className="cell-title">{book.title}</td>
                    <td className="cell-author">{book.author}</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar">
                          <div
                            className={`progress-fill ${isDone ? 'done' : ''}`}
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <span className="progress-label">
                          {book.progress} / {book.totalPages} ({percent}%)
                        </span>
                      </div>
                    </td>
                    <td className={`cell-due ${isDone ? 'done-text' : ''}`}>
                      {isDone ? '✅ Прочитано' : book.dueDate}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}