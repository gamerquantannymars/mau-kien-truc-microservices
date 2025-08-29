const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error('Kết nối MongoDB thất bại:', err));

// Các endpoint cho quản lý sản phẩm
app.get('/products', (req, res) => res.send('Danh sách sản phẩm'));
app.post('/products', (req, res) => res.send('Tạo sản phẩm'));

const PORT = 3001;
app.listen(PORT, () => console.log(`Sản phẩm service chạy trên port ${PORT}`));