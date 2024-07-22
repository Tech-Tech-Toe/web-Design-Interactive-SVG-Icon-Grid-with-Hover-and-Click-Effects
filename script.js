const icons = document.querySelectorAll('.icon');

icons.forEach((icon, index) => {
    icon.addEventListener('click', function() {
        // Change color of clicked icon and all previous icons
        icons.forEach((icon, i) => {
            if (i <= index) {
                icon.querySelector('path').setAttribute('fill', '#FFD700'); // Golden color
            } else {
                icon.querySelector('path').setAttribute('fill', '#B0B0B0'); // Cement color
            }
        });
    });

    // Hover effect
    icon.addEventListener('mouseover', function() {
        icons.forEach((icon, i) => {
            if (i <= Array.from(icons).indexOf(this)) {
                icon.querySelector('path').setAttribute('fill', '#FFD700'); // Golden color
            } else {
                icon.querySelector('path').setAttribute('fill', '#B0B0B0'); // Cement color
            }
        });
    });

    icon.addEventListener('mouseout', function() {
        // Reset colors on mouse out
        icons.forEach((icon) => {
            icon.querySelector('path').setAttribute('fill', '#B0B0B0'); // Cement color
        });
    });
});
