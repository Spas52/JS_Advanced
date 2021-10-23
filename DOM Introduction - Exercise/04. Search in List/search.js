function search() {
   const towns = document.getElementById('towns').children;
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;

   for (let i = 0; i < towns.length; i++) {
      towns[i].style.fontWeight = 'normal';
      towns[i].style.textDecoration = 'none';

      if (towns[i].textContent.includes(input)) {
         towns[i].style.fontWeight = 'bold';
         towns[i].style.textDecoration = 'underline';
         matches += 1;
      }
   }

   result.textContent = `${matches} matches found`
}
