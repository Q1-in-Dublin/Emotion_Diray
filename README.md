# Emotion Diary Project

## Purpose
The Emotion Diary project aims to assist users in recording their daily events and reflections. It provides a service to help transform negative experiences of the day into positive words and sentences. This app addresses the difficulties and inconveniences associated with writing a diary by hand.

## Features
- Mood tracking divided into five levels: Very Bad, Bad, Neutral, Good, Very Good.
- Allows users to log the date, their mood, and detailed diary entries.


## Data Storage Process
  - Used LocalStorage : It stores data by site address and it can be stored before the user deletes it.
### Possibility to use another storage
  - SessionStoreage : It stores data  by browser tab, maintain data before the tab is closed(reload), the data will be deleted when the tab is closed or the browser is shut down.
### Future plans for the storage
1. Maintain data through Json file
2. NoSQL DB

## Future Work plan
- Write a diary with voice ( Need to check API)
- Recommend comfort songs or sentences for users
- Implement as a localStorage > expand it to bigger DB
- Make a Sign in and Sign up feature.

## Development Process
- **17th July**: Repository created.

- **21st July**: Initial setup, component creation, CSS setup.

 
- **22nd July**: Implementation of common components, README.md added. Reducer, createContext,DiaryList sorting dirary by createdDate
  
- **26th July**: Implementation of Diary_edit page and Css
<img width="673" alt="Screenshot 2024-07-26 at 01 49 54" src="https://github.com/user-attachments/assets/77f5d9d1-a896-4894-b072-4ca37df26da6">

- **28th July**: Implementation of Diary_add, edit, delete"
<img width="1325" alt="Screenshot 2024-07-28 at 22 52 39" src="https://github.com/user-attachments/assets/f07aaed8-09cb-40b6-b8c8-b7695a810840">
<img width="1400" alt="Screenshot 2024-07-28 at 22 52 44" src="https://github.com/user-attachments/assets/35345381-f70b-4cb2-bf79-3e8066c948b9">
<img width="1376" alt="Screenshot 2024-07-28 at 22 52 53" src="https://github.com/user-attachments/assets/9d9dd337-f2d7-4623-87c8-440b06e23ab3">

- **28th July**: Implementation of View page , localstorage, favicon, deploy"
