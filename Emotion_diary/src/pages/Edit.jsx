import { useParams } from 'react-router-dom';

const Edit = () => {
    const params = useParams();

    return <div>No.{params.id} Diary</div>;
};
export default Edit;
