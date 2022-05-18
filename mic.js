let tempo_pipoca = 10;
let tempo_macarrao = 8;
let tempo_carne = 15;
let tempo_feijao = 12;
let tempo_brigadeiro = 8;
let comida = 0;
let tempo = 0;

function dobro (tempo, tempo_pipoca, tempo_macarrao, tempo_carne,tempo_feijao,tempo_brigadeiro){
    return tempo = tempo_pipoca*2
}

if (comida == 1 && tempo == tempo_pipoca ) {
    console.log('Pipoca');
    console.log('Prato pronto, bom apetite!!');
}
    else if (comida == 1 && tempo <= tempo_pipoca ) {
        console.log('Tempo insulficiente');
}

else if (comida == 2 && tempo == tempo_macarrao){
    console.log('Macarrão');
    console.log('Prato pronto, bom apetite!!');
}
else if (comida == 2 && tempo <= tempo_macarrao ) {
    console.log('Tempo insulficiente');
}
else if (comida == 3 && tempo == tempo_carne){
    console.log('Carne');
    console.log('Prato pronto, bom apetite!!');
}
else if (comida == 3 && tempo <= tempo_carne ) {
    console.log('Tempo insulficiente');
}
else if (comida == 4 && tempo == tempo_feijao){
    console.log('Feijão');
    console.log('Prato pronto, bom apetite!!');
}
else if (comida == 4 && tempo <= tempo_feijao ) {
    console.log('Tempo insulficiente');
}
else if( comida == 5 && tempo == tempo_brigadeiro){
    console.log('Brigadeiro');
    console.log('Prato pronto, bom apetite!!');
}
else if (comida == 5 && tempo <= tempo_brigadeiro ) {
    console.log('Tempo insulficiente');
}
else if (tempo == tempo*2) {
console.log('A comida se queimou');
}
else if (tempo == triplo() ){
console.log('Kabummm');
}
else{
    console.log('Prato inexistente');
}

