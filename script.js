// Gráfico de Tendencia Multitemporal
const ctx1 = document.getElementById('tendenciaChart').getContext('2d');
const tendenciaChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['M1', 'M5', 'M15', 'H1'],
    datasets: [{
      label: 'Tendencia (%)',
      data: [80, 70, 90, 85],  // Datos simulados para las tendencias
      borderColor: 'rgba(46, 204, 113, 1)',
      backgroundColor: 'rgba(46, 204, 113, 0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333'
        }
      },
      x: {
        ticks: {
          color: '#333'
        }
      }
    }
  }
});

// Gráfico de Probabilidad de Éxito y Duración
const ctx2 = document.getElementById('successChart').getContext('2d');
const successChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Porcentaje de Éxito (%)', 'Duración Estimada (min)'],
    datasets: [{
      label: 'Indicadores',
      data: [90, 60],  // Datos simulados para el éxito y la duración
      backgroundColor: [
        'rgba(52, 152, 219, 0.8)',
        'rgba(231, 76, 60, 0.8)'
      ],
      borderColor: [
        'rgba(52, 152, 219, 1)',
        'rgba(231, 76, 60, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333'
        }
      },
      x: {
        ticks: {
          color: '#333'
        }
      }
    }
  }
});

// Gráfico de Proyección de la Tendencia y Duración
const ctx3 = document.getElementById('proyeccionChart').getContext('2d');
const proyeccionChart = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['M1', 'M5', 'M15', 'H1'],
    datasets: [{
      label: 'Duración Estimada (min)',
      data: [15, 45, 180, 1440],  // Duración estimada en minutos: M1, M5, M15, H1
      borderColor: 'rgba(231, 76, 60, 1)',
      backgroundColor: 'rgba(231, 76, 60, 0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
          callback: function(value) { return value + ' min'; }  // Agregar 'min' a los valores del eje Y
        }
      },
      x: {
        ticks: {
          color: '#333'
        }
      }
    }
  }
});
