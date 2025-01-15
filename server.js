const express = require('express');
const multer = require('multer');
const { Client } = require('pg');
const path = require('path');


const app = express();
const port = 5000;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const client = new Client({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'brandsdb',
  password: process.env.DB_PASSWORD || '', 
  port: process.env.DB_PORT || 5432,
});


// Connect to PostgreSQL
client.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

// Multer setup to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // specify directory to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });

// POST route to add a new brand with image
app.post('/brands', upload.single('image_url'), (req, res) => {
  const { name, published } = req.body;
  const image_url = req.file ? req.file.path : ''; 

  const query = 'INSERT INTO brands (name, image_url, published) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, image_url, published];

  client.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting brand:', err.stack);
      return res.status(500).send('Server error');
    }
    res.status(201).json(result.rows[0]); 
  });
});

// GET route to fetch all brands
app.get('/brands', (req, res) => {
  const query = 'SELECT * FROM brands';

  client.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching brands:', err.stack);
      return res.status(500).send('Server error');
    }
    res.status(200).json(result.rows);
  });
});

// GET route to filter and sort brands
app.get('/brands/filter', (req, res) => {
  const { sortBy, filterByPublished } = req.query;
  let query = 'SELECT * FROM brands WHERE 1=1';
  const values = [];

  if (filterByPublished) {
    query += ' AND published = $1';
    values.push(filterByPublished === 'true');
  }

  if (sortBy === 'alphabetical') {
    query += ' ORDER BY name ASC';
  }

  client.query(query, values, (err, result) => {
    if (err) {
      console.error('Error filtering and sorting brands:', err.stack);
      return res.status(500).send('Server error');
    }
    res.status(200).json(result.rows); // Return filtered and sorted brands
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
