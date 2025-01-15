const express = require('express');
const db = require('./database/db')
const bodyparser = require('body-parser');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config();

// -----------------main app--------------------------
const app = express();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});


// --------------Middleware-------------------
app.use(cors());
app.use(bodyparser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------------Multer setup---------------------------
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Use routes
app.post('/api/add-category', upload.single('image'), async (req, res) => {
    const { name, slug } = req.body;
    const file = req.file;

    if (!file || !name || !slug) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Upload image to Cloudinary
        const result = cloudinary.uploader.upload_stream(
            { folder: 'categories' },
            async (error, result) => {
                if (error) {
                    console.error('Cloudinary error:', error);
                    return res.status(500).json({ error: 'Failed to upload image' });
                }

                const imageUrl = result.secure_url;

                // Insert data into MySQL database
                const query = `
                    INSERT INTO categories (name, slug, image_url)
                    VALUES (?, ?, ?)
                `;
                db.query(query, [name, slug, imageUrl]);

                res.status(200).json({
                    message: 'Category added successfully',
                    filePath: imageUrl,
                });
            }
        );

        file.stream.pipe(result);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// --------------Middleware-------------------
app.use(cors());
app.use(bodyparser.json());

// -------------------------------Products form submit handler--------------------------------
app.post('/api/add-product', (req, res) => {
    const { name, short_desc, full_desc, category_id, brand, price, discount, stock_quantity, sku, image_url, is_featured, is_new_arrival, tags, seller_id } = req.body;
    console.log('form data:', { name, short_desc, full_desc, category_id, brand, price, discount, stock_quantity, sku, image_url, is_featured, is_new_arrival, tags, seller_id });


    // Processing the received data to save to db
    res.status(200).json({ success: true, message: 'Form Submitted', data: req.body })
});

//---------------------------------categories with all values-----------------------------------------------
app.get('/api/product-categories', (req, res) => {
    db.query('SELECT * FROM categories', (error, results) => {
        if (error) return res.status(500).send('Database query error');
        res.status(200).json(results);
    });
});
//---------------------------------categories with only id & name-----------------------------------------------
app.get('/api/category-id-n-name', (req, res) => {
    db.query('SELECT category_id, name FROM categories', (error, results) => {
        if (error) return res.status(500).send('Database query error');
        res.status(200).json(results);
    });
});


module.exports = app;
