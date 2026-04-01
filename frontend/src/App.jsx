import { useState } from 'react'
import brandingImg from './assets/branding.png'
import logoUniuv from './assets/logo-uniuv.png'
import logoUnespar from './assets/logo-unespar.jpg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [lembrar, setLembrar] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="page">
      <header className="barra">
        <div className="barra-logos">
          <img src={logoUniuv} alt="" className="barra-img barra-uniuv" />
          <img src={logoUnespar} alt="" className="barra-img barra-unespar" />
        </div>
        <nav className="barra-nav">
          <a href="#">Salas</a>
          <a href="#">Laboratórios</a>
          <a href="#">Reservas</a>
        </nav>
      </header>

      <main className="conteudo">
        <div className="lado-marca">
          <div className="marca-wrap">
            <img src={brandingImg} alt="" className="marca-branding" />
          </div>
        </div>

        <div className="lado-form">
          <div className="cartao">
            <div className="cartao-topo">
              <img src={logoUnespar} alt="" className="unespar-marca-dagua" />
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="titulo">Login</h1>
              <label className="campo">
                <input
                  type="text"
                  name="email"
                  autoComplete="username"
                  placeholder="Email ou Usuário"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="campo">
                <input
                  type="password"
                  name="senha"
                  autoComplete="current-password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </label>
              <label className="lembrar">
                <input
                  type="checkbox"
                  checked={lembrar}
                  onChange={(e) => setLembrar(e.target.checked)}
                />
                Lembrar de mim
              </label>
              <button type="submit" className="btn">
                Entrar
              </button>
              <a href="#" className="esqueci">
                Esqueceu a senha?
              </a>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
