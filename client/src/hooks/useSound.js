import { useEffect, useState } from 'react'
import { Howl } from 'howler';

function useSound(src, volume = 1) {
    let sound;
    const soundStop = () => sound.stop();
    const soundPlay = (src) => {
        sound = new Howl({ src });
        sound.volume(volume);
        sound.loop(true);
        sound.play();
    }
    
    useEffect(() => {
        
        soundPlay(src);
    }, []);
}

export default useSound;