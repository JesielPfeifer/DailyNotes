import React, { useState , useEffect} from "react";
import Notes from "./components/notes";
import api from "./services/api";
import RadioButton from "./components/RadioButton";

import './app.css'
import './global.css'
import './sidebar.css'
import './main.css'


// Componente é uma estrutura de codigo que retorna um HTM, CSS ou JS
// Propriedades = São informações que um componente PAI, passa um comp filho
// Estado é uma funcao que armazena uma informação e manipula ela.

function App() {

  // o use state precisa receber a variavel que vai ser alterada
  // e a funcao que vai alterar ela, além de iniciar ele com alguma coisa
  // neste caso é ''
  const [title, setTitles] = useState('')
  const [notes, setNotes] = useState('')
  const [allNotes, setAllNotes] = useState([])
  const [selectedValue, setSelectedValue] =  useState('all');

  useEffect(()=>{
    getAllNotes()
  }, [])
  
  async function loadNotes(option) {
    const params = { priority: option };
    const response = await api.get("/priorities", { params });

    if (response) {
      setAllNotes(response.data)
    }
  }

  function handleChange(event){
    setSelectedValue(event.value);

    if (event.checked && event.value !== 'all'){
      loadNotes(event.value);
    } else {
      getAllNotes();
    }
  }

  async function getAllNotes(){
    const response = await api.get('/annotations',)
    setAllNotes(response.data)
  }
  
  async function handleDelete (id) {
    const deletedNote = await api.delete(`/annotations/${id}`);
      if (deletedNote) {
        setAllNotes(allNotes.filter(note => note._id !== id))
      }
  }

  async function handleChangePriority(id) {
    const notePriority = await api.post(`/priorities/${id}`);

    if (notePriority && selectedValue !== 'all') {
      loadNotes(selectedValue)
    } else if (notePriority) {
      getAllNotes();
    }
    
  }

  async function handleSubmit(event){
    event.preventDefault()

    const response = await api.post('/annotations',{
      title,
      notes,
      priority: false
    })
    
    setTitles('')
    setNotes('')

    if (selectedValue !== 'all') {
      getAllNotes();
    } else {
      setAllNotes([...allNotes, response.data])
    }
    setSelectedValue('all');
  }

  useEffect(() =>{
    function enableSubmitButton(){
      let btnSubmit = document.getElementById('btn_submit')
      btnSubmit.style.background = '#FFD3CA'
      if (title && notes){
        btnSubmit.style.background = '#EB8F7A'
      }
    }
    enableSubmitButton()
  },[title, notes])

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Titulo da anotação</label>
            <input 
              required
              maxLength="30"
              value={title}
              onChange={event => setTitles(event.target.value)}
            />
          </div>
            <div className="input-block">
              <label htmlFor="nota">Anotações</label>
              <textarea
                required
                value={notes}
                onChange={event => setNotes(event.target.value)}
              />
            </div>

            <button id="btn_submit" type="submit">Salvar</button>
        </form>
        <RadioButton
          selectedValue={selectedValue}
          handleChange={handleChange}
        />
      </aside>
      <main>
        <ul>
          {allNotes.map(data => (
            <Notes 
              key={data._id} 
              data={data} 
              handleDelete={handleDelete}
              handleChangePriority={handleChangePriority}
            />
            ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
