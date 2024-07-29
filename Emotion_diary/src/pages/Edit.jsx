import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import useDiary from '../hooks/useDiary';
const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { deleteDiary, editDirary } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);

    //Current diary
    const onClickDelete = () => {
        if (window.confirm('Are you sure to delete a diary?')) {
            deleteDiary(params.id);
            nav('/', { replace: true });
        }
    };
    const onSubmit = (input) => {
        if (window.confirm('Are you sure to edit your diary?'))
            editDirary(params.id, input.createdDate.getTime(), input.emotionId, input.content);
        nav('/', { replace: true });
    };

    return (
        <div>
            <Header
                title={'Edit the diary'}
                leftChild={<Button onClick={() => nav(-1)} text={'< Back'} />}
                rightChild={<Button onClick={onClickDelete} text={'Delete'} type={'Negative'} />}
            />
            <Editor onSubmit={onSubmit} initData={curDiaryItem} />
        </div>
    );
};
export default Edit;
