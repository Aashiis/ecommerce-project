const app = require('./app');


// -------------------------------Starting server on port---------------------------------------------------
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});