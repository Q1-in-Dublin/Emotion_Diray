import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringifiedDate } from '../util/getStringifiedDate';

const Editor = ({ initData, onSubmit }) => {
    const nav = useNavigate();
    useEffect(() => {
        if (initData) {
            setInput({
                ...initData,
                createdDate: new Date(initData.createdDate),
            });
        }
    }, [initData]);
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: '',
    });

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'createdDate') {
            value = new Date(value);
        }
        setInput({ ...input, [name]: value });
    };
    const onClickSubmitBtn = () => {
        onSubmit(input);
    };
    return (
        <div className="Editor">
            <section className="date_section">
                <h4>Date</h4>
                <input
                    value={getStringifiedDate(input.createdDate)}
                    name="createdDate"
                    type="date"
                    onChange={onChangeInput}
                />
            </section>
            <section className="emotion_section">
                <h4> Today's emotion</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem
                            onClick={() => {
                                onChangeInput({ target: { name: 'emotionId', value: item.emotionId } });
                            }}
                            key={item.emotionId}
                            {...item}
                            isSelected={item.emotionId === input.emotionId}
                        />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>Today's Diary</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder="How was your day?"
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
            </section>
            <section className="button_section">
                <Button onClick={() => nav(-1)} text={'Cancel'} />
                <Button onClick={onClickSubmitBtn} text={'Complete'} type={'Positive'} />
            </section>
        </div>
    );
};
export default Editor;
