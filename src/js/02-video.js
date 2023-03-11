import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
    };

player.on('timeupdate', throttle(onPlay, 1000));

function determineCurrentTime (){
    const parsedData = JSON.parse(localStorage.getItem('videoplayer-current-time'));

    if (parsedData){
        player.setCurrentTime(parsedData['seconds']);
    }
}
determineCurrentTime();

localStorage.clear();


