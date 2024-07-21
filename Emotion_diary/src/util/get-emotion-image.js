import Emotion1 from './../assets/emotion1.png';
import Emotion2 from './../assets/emotion2.png';
import Emotion3 from './../assets/emotion3.png';
import Emotion4 from './../assets/emotion4.png';
import Emotion5 from './../assets/emotion5.png';

export function getEmotionImage(emotionId) {
    switch (emotionId) {
        case 1:
            return Emotion1;
        case 2:
            return Emotion2;
        case 3:
            return Emotion3;
        case 4:
            return Emotion4;
        case 5:
            return Emotion5;
    }
}
