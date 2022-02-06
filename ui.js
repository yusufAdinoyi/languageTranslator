const appFunctions = new AppFunctions();

class UI{
  static showAlert(message, className){
    UI.clear();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.content');
    const content = document.querySelector('#text-box');
    container.insertBefore(div, content);
    setTimeout(() => {
      UI.clear();
    }, 3000);
  }
  static clear(){
    const alertBox = document.querySelector('.alert');
    if(alertBox){
      alertBox.remove();
    }
  }
  static checkResult(){
    const resultDiv = document.querySelector('#result-div').innerHTML;
    setTimeout(() => {
      if(resultDiv === ""){
        UI.showAlert('Unable to fetch text, please check your internet access', 'alert');
      }
    }, 2000)
  }
}

document.querySelector('#record-start').addEventListener('click', (e) => {
  appFunctions.speakFunction();
  setTimeout(() => {
    appFunctions.textToAudio(`${document.querySelector("#text-box").value}`);
  }, 4000);
  e.preventDefault();
});


document.querySelector('#convert').addEventListener('click', (e) => {
  // appFunctions.getLang('ar', UI.checkResult());
  const textBox = document.querySelector('#text-box').value;
  const langType= document.querySelector('#lang-type').value;
  if(textBox === ''){
    UI.showAlert('Insert Text in the box', 'alert')
  }else if(langType === 'Translate in Arabic'){
    appFunctions.getLang('ar', UI.checkResult());
  }else if(langType === 'Translate in Chinese'){
    appFunctions.getLang('zh-CN', UI.checkResult());
  }else if(langType === 'Translate in French'){
    appFunctions.getLang('fr', UI.checkResult());
  }else if(langType === 'Translate in Spanish'){
    appFunctions.getLang('sp', UI.checkResult());
  }else if(langType === 'Translate in Latin'){
    appFunctions.getLang('la', UI.checkResult());
  }else if(langType === 'Translate in Igbo'){
    appFunctions.getLang('ig', UI.checkResult());
  }else if(langType === 'Translate in Hausa'){
    appFunctions.getLang('ha', UI.checkResult());
  }else if(langType === 'Translate in Yoruba'){
    appFunctions.getLang('yo', UI.checkResult());
  }
});

document.querySelector('#play').addEventListener('click', (e) => {
  appFunctions.textToAudio(`${document.querySelector("#result-div").innerHTML}`)
})


