import { Howl, Howler } from 'howler';

function effectSound(src, volume, loopb) {
    var sound = new Howl({
        src: src,
        volume: volume,
        loop: loopb,
        html5: true,
    });

    return sound;
}

export default effectSound;