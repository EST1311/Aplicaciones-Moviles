const video = document.getElementById('transmision');
const canvas = document.getElementById('captura');
const capt = document.getElementById('capt');


const constraint = {
    audio : true,
    video : {
        width : 1280, 
        height: 720
    }
};

async function inicializar(){
    try{
        const envivo = await navigator.mediaDevices.getUserMedia(constraint);
        sijala(envivo);
    }catch(e){
        alert('error' +e.toString());
    }
}

function sijala (envivo){
    window.envivo = envivo;
    video.srcObject = envivo;
}

var contenido = canvas.getContext('2d');

capt.addEventListener("click", function(){
    contenido.drawImage(video, 0, 0, 740, 580);
});

