import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import { getStringifiedDate } from '../util/getStringifiedDate';
const Diary = (p) => {
    const params = useParams();
    const nav = useNavigate();
    const curDiaryItem = useDiary(params.id);
    if (!curDiaryItem) {
        return <div>Data Loading!</div>;
    }
    const { createdDate, emotionId, content } = curDiaryItem;
    const title = getStringifiedDate(new Date(createdDate));
    console.log(title);
    return (
        <div>
            <Header
                title={`${title} Diary`}
                leftChild={<Button text={'< Back'} onClick={() => nav(-1)} />}
                rightChild={<Button text={'Edit'} onClick={() => nav(`/edit/${params.id}`)} />}
            />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    );
};

export default Diary;
