const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error('Kết nối MongoDB thất bại:', err));

// Các endpoint cho quản lý đơn hàng
app.get('/orders', (req, res) => res.send('Danh sách đơn hàng'));
app.post('/orders', (req, res) => res.send('Tạo đơn hàng'));

const PORT = 3002;
app.listen(PORT, () => console.log(`Đơn hàng service chạy trên port ${PORT}`));