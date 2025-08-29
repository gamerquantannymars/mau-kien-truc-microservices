const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error('Kết nối MongoDB thất bại:', err));

// Các endpoint cho quản lý người dùng
app.post('/users/register', (req, res) => res.send('Đăng ký người dùng'));
app.post('/users/login', (req, res) => res.send('Đăng nhập người dùng'));

const PORT = 3003;
app.listen(PORT, () => console.log(`Người dùng service chạy trên port ${PORT}`));