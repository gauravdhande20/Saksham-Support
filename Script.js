 // 1. Scroll Up Logic
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    };

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 2. Settings Panel Toggle
    function toggleSettings() {
        const panel = document.getElementById("settingsPanel");
        panel.classList.toggle("active");
    }

    // 3. Font Size Increase/Decrease
    let currentZoom = 100;

    function changeFontSize(action) {
        if (action === 'increase') {
            if(currentZoom < 150) currentZoom += 10;
        } else {
            if(currentZoom > 70) currentZoom -= 10;
        }
        
        document.body.style.zoom = currentZoom + "%";
        document.getElementById("currentSizeLabel").innerText = currentZoom + "%";
    }

    // 4. Notifications Toggle
    function toggleNotifications() {
        const checkBox = document.getElementById("notifToggle");
        if (checkBox.checked) {
            alert("Notifications Turned ON! (You will receive updates)");
        } else {
            alert("Notifications Turned OFF.");
        }
    }

    // 5. Dark Mode Toggle
    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
    }

    // 6. Feedback
    function openFeedback() {
        const feedback = prompt("Please enter your feedback here:");
        if (feedback) {
            alert("Thank you! Your feedback has been sent to the admin.");
            // Yahan backend code lagaya ja sakta hai baad mein
        }
    }