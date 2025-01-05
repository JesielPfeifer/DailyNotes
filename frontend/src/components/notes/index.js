import React, { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai"
import './styles.css'
import './styles-priority.css'
import api from "../../services/api";

function Notes ({ data }) {
  const [changedNotes, setChangedNote] = useState('');
  
  async function handleSave(event, notes){
    if (changedNotes && changedNotes !== notes) {
      await api.post(`/contents/${data._id}`, {
        notes: changedNotes,
      });
    }
  }
  return(
    <>
        <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
            <div>
              <strong>{data.title}</strong>
              <div>
                <AiTwotoneDelete size="20"/>
              </div>
            </div>
            <textarea 
              defaultValue={ data.notes }
              onChange={event => setChangedNote(event.target.value)}
              onBlur={event => handleSave(event.target, data.notes)}
            />
            <span>
              <AiOutlineExclamationCircle size="20"/>
            </span>
        </li>
    </>
    )
}

export default Notes;