import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import EmotionItem from '../components/EmotionItem';
const New = () => {
    return (
        <div>
            <Header title={'Write a new Diray'} leftChild={<Button text={'< Back'} />} />
            <Editor />
        </div>
    );
};

export default New;
