const net = require('net');

const server = net.createServer()

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('\nEl cliente ' + socket.remoteAddress + ":" + socket.remotePort + "dice: " + data)
        socket.write('Recebido!')
    })

    socket.on('close', ()=>{
        console.log('Encerramento de Conexão')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

server.listen(4000, ()=>{
    console.log('-> Bem vindo ao Ecoador Tabajara rodando na porta: ', server.address().port)
})
