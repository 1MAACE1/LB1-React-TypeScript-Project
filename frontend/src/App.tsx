import './App.css'
const appTitle: string = 'Personal Library'
export default function App() {
  return (
    <main className="app">
      <header>
        <h1>{appTitle}</h1>
        <p>Личная библотека, сроки и прогресс.</p>
      </header>
      <section aria-labelledby="items-title">
        <h2 id="items-title">Мои книги</h2>
        <p>Здесь появится список ваших книг.</p>
      </section>
    </main>
  )
}