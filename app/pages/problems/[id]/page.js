"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './custom.css';
import 'codemirror/mode/javascript/javascript';

export default function Myworkspace() {
  const [code, setCode] = useState("");
  const editorRef = useRef(null);

  const handleChange = (editor, data, value) => {
    console.log('handleChange called', value);
    setCode(value);
  };

  return (
    <div className="h-screen-minus-navbar bg-zinc-950 flex flex-col overflow-hidden">
      <div className="flex flex-grow text-white m-[1%] overflow-hidden">
        <div className="bg-stone-900 p-[1%] min-w-[35%] max-w-[50%] overflow-auto rounded-xl">
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <div className='flex flex-col ml-[1%] grow min-w-[35%] max-w-[75%]'>
          <div className="bg-stone-900  overflow-auto rounded-xl min-h-[25%] max-h-[70%] grow">
            <div className='h-full p-2'>
              <CodeMirror
                ref={editorRef}
                value={code}
                options={{
                  mode: 'javascript',
                  theme: 'custom', 
                  lineNumbers: true
                }}
                onBeforeChange={(editor, data, value) => {
                  setCode(value);
                }}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
