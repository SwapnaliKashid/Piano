const pianoKeys=document.querySelectorAll('.key')

function playsound(newurl) {
    new Audio(newurl).play()
}


pianoKeys.forEach((pianoKey,i) =>{
    const newurl='24/key' + (i+1) + '.mp3'
    pianoKey.addEventListener('click',()=> playsound(newurl))
})