const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');

const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});
