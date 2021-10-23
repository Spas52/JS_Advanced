function filterEmployees(data, criteria) {
    let index = 0;
    criteria = criteria.split('-');
    data = JSON.parse(data);

    if (criteria[0] != 'all') {
        data = data.filter(emp => emp[criteria[0]] == criteria[1]);
    }

    data.forEach(e => {
        console.log(`${index}. ${e.first_name} ${e.last_name} - ${e.email}`);
        index++;
    });
}
