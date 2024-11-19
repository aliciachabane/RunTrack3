document.addEventListener('keydown', function(event) {
        let textarea = document.getElementById('keylogger');
        let key = event.key.toLowerCase();
        if (key >= 'a' && key <= 'z') {
            if (document.activeElement === textarea) {
                textarea.value += key + key;
            } else {
                textarea.value += key;
            }
        }
    });