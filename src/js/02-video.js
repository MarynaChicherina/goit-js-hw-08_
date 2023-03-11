import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = Player(iframe);

    const onPlay = function(data) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
    };
    const time = player.on('timeupdate', throttle(onPlay, 1000));
    
 



