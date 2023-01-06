import { Howl, Howler } from 'howler';

function effectSound(src, volume, loopb) {
    var sound = new Howl({
        src: src,
        volume: volume,
        loop: loopb,
    });

    return sound;
}

export default effectSound;