import React, { useState } from "react";

import './global.css'

// Componente é uma estrutura de codigo que retorna um HTM, CSS ou JS
// Propriedades = São informações que um componente PAI, passa um comp filho
// Estado é uma funcao que armazena uma informação e manipula ela.

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form>
          <div className="input-block">
            <label htmlFor="title">Titulo da anotação</label>
            <input />
          </div>
            <div className="input-block">
              <label htmlFor="nota">Anotações</label>
              <textarea></textarea>
            </div>

            <button type="submit">Salvar</button>
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
