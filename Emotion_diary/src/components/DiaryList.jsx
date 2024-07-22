import Button from './Button';
import './DiaryList.css';
import DiaryItems from './DiaryItems';
const DiaryList = () => {
    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select>
                    <option value={'Latest'}>Latest</option>
                    <option value={'Oldest'}>Oldest</option>
                </select>
                <Button text={'Write New Diary'} type={'Positive'} />
            </div>
            <div className="list_wrapper">
                <DiaryItems />
            </div>
        </div>
    );
};
export default DiaryList;
