//pages/api/run-cpp

import { cpp } from 'compile-run';

export default async function handler(req, res) {
    console.log("hello")
    if (req.method === 'POST') {
        const { code } = req.body;
        try {
            const result = await cpp.runSource(code); 
            res.status(200).json({ output: result.stdout });
        } catch (err) {
            console.error("Error executing code:", err.message);  // Log the error to see what is going wrong
            res.status(500).json({ error: err.message });
        }
    }else {
        res.status(405).json({ error: 'Only POST method is allowed' });
    }
}
