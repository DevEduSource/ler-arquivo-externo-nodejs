const fs = require('fs'); //file system

fs.readFile('file.txt', 'utf8', (err, data) => { //Função readFile busca o arquivo externo com parametros

    if(err){ //Verificando se tem algum erro
        console.log(err); //Mostrar o erro no console
        return; //Retorna para não executar o código depois desse if caso tenha algum erro
    }
    console.log(data); //Caso o if não retorne true ele irá ler o arquivo externo file.txt
})