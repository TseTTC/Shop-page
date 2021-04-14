import _ from 'lodash';
const element = document.getElementById('content');

function component() {
    
  
    // Lodash, now imported by script

    element.innerHTML = _.join(['', ''], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());