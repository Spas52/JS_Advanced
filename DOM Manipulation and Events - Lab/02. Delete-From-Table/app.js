function deleteByEmail() {
    const input = document.querySelector('input[name="email"]'); // stava i samo s input
    const result = document.getElementById('result'); 

    const rows = Array.from(document.querySelector('tbody').children);

    let remove = false;

    for (let row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            remove = true;
        }
    }

    if (remove) {
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}