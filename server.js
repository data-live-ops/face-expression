const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, 'public');

// Route for host view (mirror/face visualization)
app.get('/mirror', (req, res) => {
    const filePath = path.join(publicPath, 'mirror.html');
    res.type('html');
    fs.createReadStream(filePath).pipe(res);
});

// Serve static files from public folder
app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(`  Cermin Jiwa Kolektif - Server Started`);
    console.log(`========================================\n`);
    console.log(`  Participant URL : http://localhost:${PORT}`);
    console.log(`  Host/Mirror     : http://localhost:${PORT}/mirror`);
    console.log(`\n========================================\n`);
});
