"use client"
import React, { useState, useRef } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './custom.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
// const {c, cpp, node, python, java} = require('compile-run');
// import {c,cpp,node,python,java} from 'compile-run';

export default function Myworkspace() {
  const [code, setCode] = useState(``);
  const [exec, setExec] = useState(``);
  const editorRef = useRef(null);

  const handleChange = (editor, data, value) => {
    console.log('handleChange called', value);
    setCode(value);
  };
 
 
  // const submy = async () => {
  //   try {
  //     // console.log('Submitting code:', code);
  //     const response = await fetch('/api/run-cpp', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ code }),  // Send the code to the API
  //     });
  
  //     const contentType = response.headers.get("content-type");
  
  //     if (contentType && contentType.includes("application/json")) {
  //       const data = await response.json();
  //       if (response.ok) {
  //         setExec(data.output);  // Set the output received from the server
  //       } else {
  //         setExec(`Error: ${data.error}`);
  //       }
  //     } else {
  //       // If it's not JSON, log the response for debugging
  //       const text = await response.text();
  //       console.error("Received unexpected response:", text);
  //       setExec(`Error: Unexpected response format`);
  //     }
  //   } catch (error) {
  //     setExec(`Error: ${error.message}`);
  //   }
  // };
  
  
  const submy = async () => {
  //   try {
  //     const response = await fetch('/api/run-cpp', {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ code }),  // Send the code to the API
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //         setExec(data.output);  // Set the output received from the server
  //     } else {
  //         setExec(`Error: ${data.error}`);
  //     }
  // } catch (error) {
  //     setExec(`Error: ${error.message}`);
  // }
  
  try {
      console.log('Submitting code:', code);
      const response = await fetch('/pages/api/run-cpp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response received:', data);
        setExec(data.result);
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData.error);
      }
    } catch (error) {
      console.error('Request error:', error);
    }

  };

  
  return (
    <div className="h-screen-minus-navbar bg-zinc-950 flex flex-col overflow-hidden">
      <div className="flex flex-grow text-white m-[1%] overflow-hidden">
        <div className="bg-stone-900 p-[1%] min-w-[35%] max-w-[50%] overflow-auto rounded-xl">
          <h1>2SUM</h1>
          <p>Descriptions</p>
        </div>
        <div className='flex flex-col ml-[1%] grow min-w-[35%] max-w-[75%]'>
          <div className="bg-stone-900 overflow-auto rounded-xl min-h-[25%] max-h-[70%] grow">
            <div className='h-full p-2'>
              <CodeMirror
                ref={editorRef}
                value={code}
                options={{
                  // mode: 'text/x-c++src',
                  mode: 'javascript',
                  theme: 'custom',
                  lineNumbers: true
                }}
                onBeforeChange={(editor, data, value) => {
                  setCode(value);
                }}
                onChange={handleChange}
              />
            <button className='absolute -translate-y-12 right-5 p-2 bg-gray-950 rounded-full hover:bg-gray-800' onClick={() => submy()}>submit</button>
            </div>
            {/* <div>
              <h2>Execution Result</h2>
              <pre>{exec}</pre>
            </div> */}
          </div>

          <div className="bg-stone-900 p-2 overflow-auto rounded-xl min-h-[25%] max-h-[29%] mt-2 grow justify-center flex">
            <textarea value={exec} className='text-gray-400 w-[85%] bg-gray-700 resize-none p-2 min-h-10 max-h-20 h-min'></textarea>
          </div>
          
        </div>
      </div>
    </div>
  );
}
