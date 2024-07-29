import { useContext, useState, useEffect } from 'react';
import { DiaryStateContext, DiaryDispatchContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import usePageTitle from '../hooks/usePageTitle';
//Defined outside of the component to simplify and make readable code
const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();
    // console.log(beginTime);
    // console.log(endTime);
    //Filter this month's diary
    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const [monthlyData, setMonthlyData] = useState([]);
    usePageTitle('Emotion Diary');

    useEffect(() => {
        // console.log('Data:', data);
        // console.log('Pivot Date:', pivotDate);
        const filteredData = getMonthlyData(pivotDate, data);
        console.log('Filtered Monthly Data:', filteredData);
        setMonthlyData(filteredData);
    }, [pivotDate, data]);

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const currentMonthName = monthNames[pivotDate.getMonth()];
    const currentYear = pivotDate.getFullYear();

    //When press the button for moving a month
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 1));
    };

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1, 1));
    };

    return (
        // Button Recycle
        <div>
            <Header
                title={`${currentMonthName} ${currentYear}`}
                leftChild={<Button onClick={onDecreaseMonth} text={'<'} />}
                rightChild={<Button onClick={onIncreaseMonth} text={'>'} />}
            />
            <DiaryList data={monthlyData} />
        </div>
    );
};

export default Home;
