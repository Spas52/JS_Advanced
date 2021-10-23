function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(ev.target.value)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}