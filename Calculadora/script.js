// Función para inicializar el historial de resultados desde el almacenamiento local
function initializeResultHistory() {
    
    let resultHistory = JSON.parse(localStorage.getItem('resultHistory'));
    
    if (!resultHistory) {
      resultHistory = [];
      saveResultHistory(resultHistory);
    }
  }
  
   function saveResultHistory(resultHistory) {
    localStorage.setItem('resultHistory', JSON.stringify(resultHistory));
  }
  
  function addToResultHistory(result) {
    let resultHistory = JSON.parse(localStorage.getItem('resultHistory'));
    resultHistory.push(result);
    saveResultHistory(resultHistory);
  }
  
  function getResultHistory() {
    return JSON.parse(localStorage.getItem('resultHistory'));
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
 
    addToResultHistory(result);
  }
  
   initializeResultHistory();
  