const https = require('https');
https.get('https://mailmind.neonbyteai.com/', (res) => {
    let data = '';
    res.on('data', (d) => { data += d; });
    res.on('end', () => {
        // Also match _next/image?url=...
        const matches = data.match(/https?:\/\/[^\s"'>]+\.(png|jpg|jpeg|webp)|_next\/image\?url=[^\s"'>]+/gi);
        console.log([...new Set(matches)]);
    });
}).on('error', (e) => {
    console.error(e);
});
