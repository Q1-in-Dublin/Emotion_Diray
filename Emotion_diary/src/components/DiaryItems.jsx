import { getEmotionImage } from '../util/get-emotion-image';
import Button from './Button';
import './DiaryItems.css';
const DiaryItems = () => {
    const emotionId = 1;
    return (
        <div className="Diary_Item">
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(1)} />
            </div>
            <div className="info_section">
                <div className="created_date">{new Date().toLocaleDateString()}</div>
                <div className="content">Diary Content</div>
            </div>
            <div className="button_section">
                <Button text={'Edit'} />
            </div>
        </div>
    );
};
export default DiaryItems;
