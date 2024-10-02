let timer; // variavel para o intervalo do cronometro
let time = 0; //oO tempo atual do cronometro
let running = false; // para controlar se o cronometro esta rodando ou nao

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset'); 

// Função para iniciar o cronômetro
function startTimer() {
    if (!running) { // apenas inicia se o cronometro nao estiver rodando
        running = true;
        timer = setInterval(() => {
            time++; // incrementa o tempo
            display.textContent = time; // exibe o tempo

            if (time >= 30) {
                time = 0; // reinicia o tempo quando chega a 30
            }
        }, 1000); // intervalo de 1 segundo
    }
}

// função para parar o cronometro
function stopTimer() {
    clearInterval(timer); // para o cronometro
    running = false; // define que o cronometro nao esta rodando
}




// eventos de clique para os botoes
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
