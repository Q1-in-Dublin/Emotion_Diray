import { useParams } from 'react-router-dom';
const Diary = () => {
    const params = useParams();
    console.log(params);
    return <div>This is Diary No.{params.id}</div>;
};

export default Diary;
