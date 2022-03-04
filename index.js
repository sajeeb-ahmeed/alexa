var startbtn = document.getElementById("start");


var recognization = new webkitSpeechRecognition();
console.log(new webkitSpeechRecognition())


recognization.onresult = function (event) {
  var text = event.results[0][0].transcript;
  console.log(text);
  var r = document.getElementById("result").innerHTML = text;
  read(text);
}

function read(text) {
  var speech = new SpeechSynthesisUtterance();
  speech.text = text;

  if (text == 'what is your name') {
    speech.text = "My name is Alexa , i am your assistant";


  } else if (text == 'when your exam start') {
    speech.text = "1st march 2022 ! ";
  } else if (text == 'how to preparation for the exam') {
    speech.text = "very bad especially the  preparation in the subject of head  sir is even worse ";
  } else if (text == "what is your favourite player name") {
    speech.text = "my favourite player name shakib al hasan, he is allrounder";
  } else if (text == "what is your university name") {
    speech.text = "varendra university";
  } else if (text == "what is your department name") {
    speech.text = "department of CSE ";
  } else if (text == "where it is located") {
    speech.text = "it is located Rajshahi";
  } else if (text == "what kind of Rajshahi") {
    speech.text = "a very beautiful small town  ";
  } else if (text == 'what is your God name') {
    speech.text = "ALLAH";
  } else if (text == 'who is Fida') {
    speech.text = "Sajeeb Ahmed Fida. Fida is a very good boy, he doesnot like math ";
  } else if (text == 'do you love me') {
    speech.text = "No , i dont like you , becouse i have a cute Girl friend";
  } else if (text == 'ok bye') {
    speech.text = "ok sir assalamualikum";
  } else if (text == 'Assalamu Alaikum') {
    speech.text = "walaikumussalam";
  } else if (text == 'what is your father name') {
    speech.text = "my father name is Sajeeb Ahmed";
  } else if (text == 'what are you doing now') {
    speech.text = "I am always ready to serve you ";
  } else if (text == 'who is Maisha') {
    speech.text = "Maisha Islam is a good  girl, she looks very pretty cute ! 😍 ";
  } else if (text == 'Maisha ki pochondo kore?') {} else if (text == 'what is your mother name') {
    speech.text = "my mother name is Maisha Islam. Maisha Islam is a good  girl, she looks very pretty cute ! 😍 ";
  } else if (text == 'who is Abdul') {
    speech.text = "Abdul is Shawon frist name . Shawon is a very cool boy , Shawon stays in Mirpur, Dhaka.  he hang out with girls all day,recently Shawon open a BEGUN VAJI hotel. that's just awesome , you can teast it .  ";
  } else if (text == 'who is Nayak') {
    speech.text = " Hridoy is a very bad boy , Hridoy stays in Malashiya , he hang out with girls all day, he has a daughter, his name Moina";
  } else if (text == 'who is Hridoy daughter') {
    speech.text = " Hridoy daughter name is Moina , she is good girl, his age 2 years, she like ice creame ";
  } else if (text == 'Alexa how are you today') {
    speech.text = "I am Always Fine sir And You ?";
  } else if (text == 'do you know Bangladesh cricket last update') {
    speech.text = "Yes sir I know , Bangladesh vs Afghanisthan 2nd ODI , banladesh won by 88 runs!";
  } else if (text == 'Alexa') {
    speech.text = "Yes sir ";
  } else {
    speech.text = "please try again!!! ";
  }

  document.getElementById("r").innerHTML = speech.text;

  window.speechSynthesis.speak(speech);
}