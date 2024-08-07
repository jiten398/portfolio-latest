const express = require('express');
const path = require('path');
const { createServer } = require('vite');
const app = express();

async function createViteServer() {
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
  });

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);

  // Serve static files from the dist directory
  app.use(express.static(path.resolve(__dirname, 'dist')));

  // Catch-all route to serve index.html for client-side routing
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });

  return { app, vite };
}

createViteServer().then(({ app }) => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
