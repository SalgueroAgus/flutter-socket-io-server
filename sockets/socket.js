const {io} = require('../index');


// SOCKET MESSAGES

io.on('connection', client => {


    client.on('disconnect', () => { 
    });

    client.on('mensaje', (payload)=>{
        console.log('mensaje', payload);


        io.emit('mensaje', {admin : 'Nuevo mensaje'});


    });
  });
