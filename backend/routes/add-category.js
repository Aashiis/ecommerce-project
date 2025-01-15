const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const db = require('../config/db');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('image'), async (req, res) => {
  const { name, slug } = req.body;
  const file = req.file;

  if (!file || !name || !slug) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await cloudinary.uploader.upload_stream(
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
        await db.query(query, [name, slug, imageUrl]);

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

module.exports = router;
