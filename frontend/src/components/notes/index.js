import React, { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai"
import './styles.css'
import './styles-priority.css'
import api from "../../services/api";

function Notes ({ data, handleDelete, handleChangePriority }) {
  const [changedNotes, setChangedNote] = useState('');
  
  async function handleSave(event, notes){
    event.style.cursor = 'default';
    event.style.boxShadow = 'none';
    if (changedNotes && changedNotes !== notes) {
      await api.post(`/contents/${data._id}`, {
        notes: changedNotes,
      });
    }
  }

  function handleEdit (event, priority) {
    event.style.cursor = 'text';
    event.style.borderRadios = '5px';
    
    if (priority){
      event.style.boxShadow = '0 0 5px white'
    } else {
      event.style.boxShadow = '0 0 5px gray'
    }

  }

  return(
    <>
        <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
            <div>
              <strong>{data.title}</strong>
              <div>
                <AiTwotoneDelete 
                  size="20" 
                  onClick={() => handleDelete(data._id)}
                />
              </div>
            </div>
            <textarea 
              defaultValue={ data.notes }
              onClick={event => handleEdit(event.target, data.priority)}
              onChange={event => setChangedNote(event.target.value)}
              onBlur={event => handleSave(event.target, data.notes)}
            />
            <span>
              <AiOutlineExclamationCircle 
                size="20"
                onClick={() => handleChangePriority(data._id)}
              />
            </span>
        </li>
    </>
    )
}

export default Notes;