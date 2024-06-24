document.addEventListener('DOMContentLoaded', () => {
    const alertForm = document.getElementById('Alert');
    
    alertForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const temperature = document.getElementById('temperature').value;
        const precipitation = document.getElementById('precipitation').value;
        const windSpeed = document.getElementById('windSpeed').value;

        alert(`
        Temperature: ${temperature}
        Precipitation: ${precipitation}
        Wind Speed: ${windSpeed} `);
    });
});
