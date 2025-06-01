const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // เก็บข้อมูล IP และ User Agent
  const ip =
    req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];

  // จำลองการบันทึก log
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("IP Address:", ip);
  console.log("User Agent:", userAgent);

  // ปลอมว่าตรวจสอบผ่านแล้ว
  res.send("Login successful. Logged IP & device info.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
