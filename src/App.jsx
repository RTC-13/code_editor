import React, { useState, useEffect } from 'react';

// styles
import './App.css';

// components
import Button from './components/Button';
import Editor from './components/Editor';

function App() {
  const [srcDoc, setSrcDoc] = useState(` `);
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [python, setPython] = useState('')

  const [openedEditor, setOpenedEditor] = useState('html');

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName)
  }

  // on change in any of the editors -> refresh the iframe
  useEffect(() => {
    // using timeout for user interaction for better performance
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 250);
    return () => clearTimeout(timeOut)
  }, [html, css, js])

  return (
    <div className="App">
      <p>Welcome to the editor!</p>
      <div className="tab-button-container">
        <Button title="HTML" onClick={() => {
          onTabClick('html')
        }} />
        <Button title="CSS" onClick={() => {
          onTabClick('css')
        }} />
        <Button title="JavaScript" onClick={() => {
          onTabClick('js')
        }} />
        <Button title="Python" onClick={() => {
          onTabClick('python')
          
        }} />
      </div>
      <div className="editor-container">
        {
          openedEditor === 'html' ? (
            <Editor
              language="xml"
              value={html}
              setEditorState={setHtml}
            />
          ) : openedEditor === 'css' ? (
            <Editor
              language="css"
              value={css}
              setEditorState={setCss}
            />
          ) : openedEditor === 'js' ? (
            <Editor
              language="javascript"
              value={js}
              setEditorState={setJs}
            />
          ) : (
            <div>
              <h1>Not Implemented!</h1>
              <Editor
              language="python"
              value={python}
              setEditorState={setPython}
            />
            </div>
            
          )
        }
        <div>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
      </div>
    </div>
  );
}
export default App;