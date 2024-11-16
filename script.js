document.addEventListener('DOMContentLoaded', function() {
    // Function to show only the specified section and hide others
    function showSection(sectionId) {
        // Select all sections with the class 'page-section'
        const sections = document.querySelectorAll('.page-section');
        
        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }

    // Add click event listeners to each navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const sectionId = this.getAttribute('data-section'); // Get target section from data attribute
            showSection(sectionId); // Show the selected section
        });
    });

    // Initial display: Show the Home section on page load
    showSection('home');
});
