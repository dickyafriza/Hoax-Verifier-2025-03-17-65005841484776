import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { useState } from 'react';
import { idlFactory  } from 'declarations/backend';

function App() {
  const [greeting, setGreeting] = useState('');
  
  // Asumsikan backend canister Anda memiliki fungsi greet
  // Ganti 'your_backend_canister' dengan nama canister backend Anda
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    // Uncomment dan sesuaikan baris berikut dengan nama canister backend Anda
    // your_backend_canister.greet(name).then((greeting) => {
    //   setGreeting(greeting);
    // });
    return false;
  }

  return (
    <div className="app-container">
      {/* Header Sederhana */}
      <header className="app-header">
        <div className="header-content">
          <img src="/logo2.svg" alt="DFINITY logo" className="logo" />
          <h1>Internet Computer Dapp</h1>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="app-main">
        <div className="content-container">
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name">Masukkan nama Anda: </label>
            <input id="name" placeholder="Ketik nama Anda di sini" alt="Name" type="text" />
            <button type="submit">Kirim</button>
          </form>
          <section id="greeting">{greeting}</section>
        </div>
      </main>

      {/* Footer Sederhana */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2023 Aplikasi Internet Computer</p>
          <p>Dibuat dengan Internet Computer Protocol</p>
        </div>
      </footer>
    </div>
  );
}

// Tambahkan CSS untuk header dan footer di file index.scss Anda
// Contoh CSS:
/*

*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);