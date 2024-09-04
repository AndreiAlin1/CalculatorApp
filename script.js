let calculation = localStorage.getItem('calculation') || '0';

      showCalculation();

      function updateCalculation(value) {
        calculation += value;
        showCalculation();

        localStorage.setItem('calculation', calculation);
      }


      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }

      function showCalculation(){
        document.querySelector('.js-result').innerHTML = `${calculation}`;
      }