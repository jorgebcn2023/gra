// Configuración del gráfico de Fibonacci
const ctxFib = document.getElementById('fibonacciChart').getContext('2d');
const fibonacciChart = new Chart(ctxFib, {
    type: 'line',
    data: {
        labels: ['8,620', '8,650', '8,690'], // Niveles de Fibonacci
        datasets: [{
            label: 'Retrocesos de Fibonacci',
            data: [61.8, 50.0, 38.2],
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value) {
                        return value + "%";
                    }
                }
            }
        }
    }
});

// Configuración del gráfico de Duración Estimada
const ctxDuracion = document.getElementById('duracionChart').getContext('2d');
const duracionChart = new Chart(ctxDuracion, {
    type: 'bar',
    data: {
        labels: ['H1', 'M15', 'M5', 'M1'], // Marcos temporales
        datasets: [{
            label: 'Duración estimada (minutos)',
            data: [480, 120, 45, 10],
            backgroundColor: [
                'rgba(76, 175, 80, 0.6)',
                'rgba(76, 175, 80, 0.6)',
                'rgba(76, 175, 80, 0.6)',
                'rgba(76, 175, 80, 0.6)'
            ],
            borderColor: [
                'rgba(76, 175, 80, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(76, 175, 80, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
