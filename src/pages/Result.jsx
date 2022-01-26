//основные
import React from 'react';
import { useNavigate } from "react-router-dom";
//файлы библиотек
import Typography from '@material-ui/core/Typography';
import Article from '@mui/icons-material/Article';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//компоненты
import { MainContainer } from '../components/MainContainer';
import { MyButton } from '../components/MyButton';
import { MyTable } from '../components/MyTable';
import { MyListFiles } from '../components/MyListFiles';
//получение данных из контекста
import { useData } from '../DataContext'


const useStyles = makeStyles({
    title: {
        display: 'flex',
        alignItems: 'center'
    },
    table: {
        marginBottom: '1rem'
    },
    svg: {
        marginRight: '5px'
    }
});


export const Result = () => {
    const styles = useStyles();
    const { data, setData } = useData();
    let navigate = useNavigate();
    const { files } = data;
    //фильтрация данных в объекте data по ключу file
    const entries = Object.entries(data).filter((entry) =>
        entry[0] !== 'files' && entry[1] !== undefined && entry[0] !== 'havePhone'
    );

    //функция отправки данных на сервер
    const onSubmit = async () => {
        //новый объект типа данных из формы
        const formData = new FormData();
        //если есть файлы добавляем их в поле files в итоговый объект formData
        if (files) {
            files.forEach((file) =>
            formData.append('files', file, file.name))
        }
        //добавляем каждое поле в итоговый объект formData
        entries.forEach((entry) =>
            formData.append(entry[0], entry[1])
        )

        console.log('sent to server');
    };
    //функция сброса данных в state
    const onReset = () => {
        setData({});
        navigate('/');
        console.log('data clear');
    };

    return (
        <MainContainer>
            <Typography
                className={styles.title}
                variant="h5"
                component="h2">
                <Article className={styles.svg} color='primary'/>
                <span> Form values</span>
            </Typography>
            <MyTable
                className={styles.table}
                component={Paper}
                entries={entries}
            />
            {files &&
            <>
                <Typography
                    className={styles.title}
                    variant="h5"
                    component="h2">
                    <ForwardToInboxIcon className={styles.svg} color='primary'/>
                    <span> Files</span>
                </Typography>
                <MyListFiles files={files}/>
            </>}
            <MyButton
                onClick={onSubmit}
                variant="contained">send to server
            </MyButton>
            <MyButton
                onClick={onReset}
                variant="outlined"
            >Clear and start over
            </MyButton>
        </MainContainer>
    )
};
