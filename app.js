class AppFunctions{
  textToAudio(msg) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 10;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }

  getLang(langType, callback){
    let msg = document.querySelector('#text-box').value;
    const data = `source_language=en&target_language=${langType}&text= ${msg}`;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onload = function(){
      if(this.status === 200) {
        document.querySelector('.result-container').style.display = 'block';
        const response = JSON.parse(this.responseText);
        console.log(response);
        document.querySelector('#result-div').innerHTML = response.data.translatedText;
        callback();
      }
    }
    xhr.open("POST", "https://text-translator2.p.rapidapi.com/translate");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("x-rapidapi-host", "text-translator2.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "8afeef00a2msh045ac3d6488b9bcp1507e4jsn138638b3a2c6");
    xhr.send(data);
  }
  speakFunction(){
    const textArea = document.querySelector('#text-box');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.start();
    recognition.onresult = function (e) {
        const transcript = e.results[0][0].transcript;
        textArea.value = transcript;
        console.log(transcript)
    }
  }
}
