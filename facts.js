document.addEventListener('DOMContentLoaded', () => {
    const reportInput = document.getElementById('report-input');
    const reportForm = document.getElementById('report-form');
    const reportList = document.getElementById('report-list');

    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const report = reportInput.value;
        if (report) {
            const newReport = document.createElement('p');
            newReport.textContent = report;
            reportList.appendChild(newReport);
            reportInput.value = '';
        }
    });
});