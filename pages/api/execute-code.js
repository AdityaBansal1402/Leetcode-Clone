// pages/api/execute-code.js
import { NodeVM } from 'vm2';
import { Writable } from 'stream';

export default function handler(req, res) {
  console.log('Request received:', req.method, req.body);

  if (req.method === 'POST') {
    const { code } = req.body;
    let output = '';

    // Create a custom stream to capture console.log output
    const captureStream = new Writable({
      write(chunk, encoding, callback) {
        output += chunk.toString();
        callback();
      }
    });

    const vm = new NodeVM({
      console: 'redirect',
      sandbox: {},
      require: {
        external: true,
        root: './'
      }
    });

    try {
      // Redirect console.log to our custom stream
      vm.on('console.log', (...args) => {
        captureStream.write(args.join(' ') + '\n');
      });

      vm.run(code, 'vm.js');
      console.log('Execution result:', output);
      res.status(200).json({ result: output });
    } catch (error) {
      console.error('Execution error:', error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    console.error('Method not allowed:', req.method);
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
