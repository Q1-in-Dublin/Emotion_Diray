import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
const emotionList = [
    {
        emotionId: 1,
        emotionName: 'Excellent',
    },
    {
        emotionId: 2,
        emotionName: 'Good',
    },
    {
        emotionId: 3,
        emotionName: 'Normal',
    },
    {
        emotionId: 4,
        emotionName: 'Bad',
    },
    {
        emotionId: 5,
        emotionName: 'Very Bad',
    },
];
const Editor = () => {
    const emotionId = 4;
    return (
        <div className="Editor">
            <section className="date_section">
                <h4>Date</h4>
                <input type="date" />
            </section>
            <section className="emotion_section">
                <h4> Today's emotion</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem key={item.emotionId} {...item} isSelected={item.emotionId === emotionId} />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>Today's Diary</h4>
                <textarea placeholder="How was your day?" name="" id="" cols="30" rows="10"></textarea>
            </section>
            <section className="button_section">
                <Button text={'Cancel'} />
                <Button text={'Complete'} type={'Positive'} />
            </section>
        </div>
    );
};
export default Editor;
