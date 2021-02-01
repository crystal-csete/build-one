const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  require('preact/debug')
}

import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import Md from 'react-markdown'
import axios from 'axios'

function baseUrl(url) {
  return isDev ? `http://localhost:5000${url}` : url
}

function App() {
  const [message, setMessage] = useState('')
  const [md, setMd] = useState('')

  useEffect(() => {
    axios.get(baseUrl('/api'))
      .then(res => setMessage(res.data.message))
  }, [])

  const onChange = evt => {
    const { target: { value } } = evt
    setMd(value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    setMessage(md)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Md>{message}</Md>
        <form onSubmit={onSubmit}>
          <textarea
            autoFocus
            placeholder="type something"
            disabled={false}
            readOnly={false}
            required={true}
            maxLength={1000}
            cols={65}
            rows={15}
            name="md"
            wrap="hard"
            value={md}
            onChange={onChange}
          />
          <input type="submit" />
        </form>
      </header>
    </div>
  )
}

render(<App />, document.getElementById('build-one'))
