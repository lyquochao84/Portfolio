// Mobile Header Open/Close
document.addEventListener('DOMContentLoaded', () => {
    const toggleIcon = document.getElementById('toggle-header-icon');
    const toggleMobileHeader = document.getElementById('mobile-header-content');

    toggleIcon.addEventListener('click', () => {
        toggleMobileHeader.classList.toggle('show');
    })
})