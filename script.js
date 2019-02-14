lnotes = ['c', 'cs', 'd', 'ds', 'e', 'f', 'fs', 'g', 'gs','a','as','b'];
function frq(n) {
	var lis = n.split(".");
	if(lis[1] == '0') {return 0;}
	var num = 4 + lnotes.indexOf(lis[0]);
	num += 12 * (lis[1]);
	var result = 440 * 2**((num-49)/12);
	//console.log(result);
	return result;
}

notez = [
  ['g.3',2],
  ['c.4',4],
  ['g.3',3],
  ['a.3',1],
  ['b.3',4],
  ['e.3', 1],
  ['a.0',1],
  ['e.3', 2],
  ['a.3',4],
  ['g.3',3],
  ['f.3',1],
  ['g.3',4],
  ['c.3',1],
  ['a.0',1],
  ['c.3',2],
  ['d.3',3],
  ['a.0',1],
  ['d.3',3],
  ['e.3',1],
  ['f.3',3],
  ['a.0',1],
  ['f.3',3],
  ['g.3',1],
  ['a.3',4],
  ['b.3',2],
  ['c.4',2],
  ['d.4',6],
  ['g.3',2],
  ['e.4',4],
  ['d.4',3],
  ['c.4',1],
  ['d.4',4],
  ['b.3',2],
  ['g.3',2],
  ['c.4',4],
  ['b.3',3],
  ['a.3',1],
  ['b.3',4],
  ['e.3',1],
  ['a.0',1],
  ['e.3',2],
  ['a.3',4],
  ['g.3',3],
  ['f.3',1],
  ['g.3',4],
  ['c.3',1],
  ['a.0',1],
  ['c.3',2],
  ['c.4',4],
  ['b.3',3],
  ['a.3',1],
  ['g.3',4] //change to 2
  //['b.3',2]
];
notez.reverse(); 
tempo = 50;

// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
notes = notez.slice();
function playMelody(){
	if (notes.length > 0){
		note = notes.pop();
		//console.log(frq(note[0]));
		console.log(note[0]);
		playNote(frq(note[0]),150*note[1]);
	} else {
		notes = notez.slice();
	}
}

function playNote(frequency, duration) {
	// create Oscillator node
	var oscillator = audioCtx.createOscillator();
	
	oscillator.type = document.querySelector('input[name="t"]:checked').value;
	oscillator.frequency.value = frequency; // value in hertz
	oscillator.connect(audioCtx.destination);
	oscillator.start();
		
	setTimeout(
		function(){
			oscillator.stop();
			playMelody();
		}, duration);
}
