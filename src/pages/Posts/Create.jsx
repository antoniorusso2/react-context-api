import axios from 'axios';
import { useState } from 'react';
import { URI } from '../../config';

const initialFormData = {
  title: '',
  content: '',
  image: '',
  tags: '',
  published: true,
};

export default function Store() {
  const [formData, setFormData] = useState(initialFormData);

  function handleFormData(e) {
    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({
      id: Date.now(),
      ...formData,
      [key]: value,
    });

    console.log(formData);
  }

  function onAdd(e) {
    e.preventDefault();

    // completo il body del nuovo con il parsing dei tags da stringa ad array di stringhe
    const body = {
      ...formData,
      tags: formData.tags.split(',').map((e) => e.trim()),
    };

    console.log(body);

    axios
      .post(`${URI}/posts`, body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          <form onSubmit={onAdd}>
            <label htmlFor="title">Aggiungi un Titolo:</label>
            <input onChange={handleFormData} type="text" name="title" id="title" />

            <label htmlFor="content">Aggiungi una descrizione:</label>
            <input onChange={handleFormData} type="text" name="content" id="content" />

            <label htmlFor="image">Immagine:</label>
            <input onChange={handleFormData} placeholder="Aggiungi un immagine" type="text" name="image" id="image" />

            <label htmlFor="tags">Tags:</label>
            <input onChange={handleFormData} placeholder="Inserisci i tags" type="text" name="tags" id="tags" />

            <label htmlFor="published">
              <span>Pubblicato</span>
              <input onChange={handleFormData} type="checkbox" name="published" id="published" defaultChecked="checked" />
            </label>

            <button className="btn">Aggiungi</button>
          </form>
        </div>
      </div>
    </main>
  );
}
