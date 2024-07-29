export const getStringifiedDate = (targetDate) => {
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
    let year = targetDate.getFullYear();

    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }
    return `${year}-${month}-${date}`; // 형식을 yyyy-MM-dd로 변경
};
