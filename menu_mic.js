let tempo_pipoca = 10;
let tempo_macarrao = 8;
let tempo_carne = 15;
let tempo_feijao = 12;
let tempo_brigadeiro = 8;
let comida = 5;
let tempo = 8;

function opcao(comida, tempo){
    if (comida == 1 && tempo == tempo_pipoca ) {
        console.log('Pipoca');
        console.log('Prato pronto, bom apetite!!');
    }
        else if (comida == 1 && tempo <= tempo_pipoca ) {
            console.log('Tempo insulficiente');
    }
    else if (comida == 1 && tempo > tempo_pipoca*2 && tempo < tempo_pipoca*3 ) {
        console.log('A comida queimou');
    }
    else if (comida == 1 && tempo == tempo_pipoca*3 ) {
        console.log('Kabumm!!!');
    }
    else if (comida == 2 && tempo == tempo_macarrao){
        console.log('Macarrão');
        console.log('Prato pronto, bom apetite!!');
    }
    else if (comida == 2 && tempo <= tempo_macarrao ) {
        console.log('Tempo insulficiente');
    }
    else if (comida == 2 && tempo > tempo_macarrao*2 && tempo < tempo_macarrao*3 ) {
        console.log('A comida queimou');
    }
    else if (comida == 2 && tempo == tempo_macarrao*3 ) {
        console.log('Kabumm!!!');
    }
    else if (comida == 3 && tempo == tempo_carne){
        console.log('Carne');
        console.log('Prato pronto, bom apetite!!');
    }
    else if (comida == 3 && tempo <= tempo_carne ) {
        console.log('Tempo insulficiente');
    }
    else if (comida == 3 && tempo > tempo_carne*2 && tempo < tempo_carne*3  ) {
        console.log('A comida queimou');
    }
    else if (comida == 3 && tempo == tempo_carne*3 ) {
        console.log('Kabumm!!!');
    }
    else if (comida == 4 && tempo == tempo_feijao){
        console.log('Feijão');
        console.log('Prato pronto, bom apetite!!');
    }
    else if (comida == 4 && tempo <= tempo_feijao ) {
        console.log('Tempo insulficiente');
    }
    else if (comida == 4 && tempo > tempo_feijao*2 && tempo < tempo_feijao*3 ) {
        console.log('A comida queimou');
    }
    else if (comida == 4 && tempo == tempo_feijao*3 ) {
        console.log('Kabumm!!!');
    }
    else if( comida == 5 && tempo == tempo_brigadeiro){
        console.log('Brigadeiro');
        console.log('Prato pronto, bom apetite!!');
    }
    else if (comida == 5 && tempo <= tempo_brigadeiro ) {
        console.log('Tempo insulficiente');
        
    }
    else if (comida == 5 && tempo > tempo_brigadeiro*2 && tempo < tempo_brigadeiro*3 ) {
        console.log('A comida queimou');
    }
    else if (comida == 5 && tempo == tempo_brigadeiro*3 ) {
        console.log('Kabumm!!!');
    }
    else{
        console.log('Prato inexistente');
    }
}

opcao(comida,tempo);