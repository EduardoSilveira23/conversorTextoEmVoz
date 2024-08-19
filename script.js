let fala = new SpeechSynthesisUtterance();

let button= document.querySelector('button');

let vozes=[];

let seletorVoz= document.querySelector('select');

button.addEventListener('click', ()=>{

fala.text=document.querySelector('textarea').value;
window.speechSynthesis.speak(fala);

});

window.speechSynthesis.onvoiceschanged=() =>{
 vozes=window.speechSynthesis.getVoices();
 fala.voice=vozes[0];
 vozes.forEach((voice, index)=>(seletorVoz.options[index] = new Option(voice.name, index)));
}

seletorVoz.addEventListener('change',()=>{

  fala.voice=vozes[seletorVoz.value];

})