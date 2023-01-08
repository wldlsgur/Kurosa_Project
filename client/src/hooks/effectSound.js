import { Howl, Howler } from 'howler';

function effectSound(src, volume, loopb) {
    var sound = new Howl({
        src: src,
        loop: loopb,
        html5: true,
    });
    sound.volume(volume);
    
    return sound;
}

export default effectSound;