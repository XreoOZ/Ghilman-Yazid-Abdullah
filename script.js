function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const pageContent = document.getElementById('page-content-wrapper');
    const burgerIcon = document.getElementById('burger-icon');
    
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden'); 
        pageContent.classList.remove('wide'); 
        burgerIcon.innerHTML = '<i class="bi bi-x"></i>'; 
    } else {
        sidebar.classList.add('hidden'); 
        pageContent.classList.add('wide'); 
        burgerIcon.innerHTML = '<i class="bi bi-list"></i>'; 
    }
}

function showSection(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => {
        sec.style.display = 'none'; 
        sec.style.opacity = '0'; 
    });

    const activeSection = document.getElementById(section + '-section');
    activeSection.style.display = 'block'; 
    setTimeout(() => {
        activeSection.style.opacity = '1'; 
    }, 10); 
}

function showForm() {
    document.getElementById('employee-section').style.display = 'none'; // Hide employee section
    document.getElementById('form-section').style.display = 'flex'; // Show form section
}

// Event listeners for the save and cancel buttons in the form
document.getElementById('saveBtn').addEventListener('click', function() {
    // Handle the save action (You can add your saving logic here)
    alert('Data Karyawan disimpan!');
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    // Hide the form and show the employee section again
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('employee-section').style.display = 'flex';
});

document.getElementById('tambahKaryawanBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = 'form';
});
