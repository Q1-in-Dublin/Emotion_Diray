import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './DiaryList.css';
import DiaryItems from './DiaryItems';
const DiaryList = ({ data }) => {
    const nav = useNavigate();

    const [sortType, setSortType] = useState('Latest');
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };
    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if (sortType === 'Oldest') {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
    };
    const sortedData = getSortedData();
    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={'Latest'}>Latest</option>
                    <option value={'Oldest'}>Oldest</option>
                </select>
                <Button onClick={() => nav(`/new`)} text={'Write New Diary'} type={'Positive'} />
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => (
                    <DiaryItems key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};
export default DiaryList;
