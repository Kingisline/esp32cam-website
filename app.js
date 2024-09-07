function copyCode() {
    const code = document.getElementById("code").innerText;
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = code;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Arduino code copied to clipboard!");
}


// for smooth scrolling
// Function to smoothly scroll to the target element
function smoothScroll(targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 50; // Adjust 50px for fixed navbar
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Animation duration in milliseconds
    let startTime = null;

    function animationScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    // Easing function for the smooth scrolling effect
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
}

// Attach click event to each navbar link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        smoothScroll(targetElement);
    });
});
