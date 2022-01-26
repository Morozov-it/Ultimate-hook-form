//основные
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
//файлы библиотек
import Typography from '@material-ui/core/Typography';
import Article from '@mui/icons-material/Article';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { Table, TableCell, TableRow } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon, Paper  } from '@material-ui/core';
import { InsertDriveFile } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
//компоненты
import { MainContainer } from '../components/MainContainer';
import { MyForm } from '../components/MyForm'
import { MyButton } from '../components/MyButton';
//получение данных из контекста
import { useData } from '../DataContext'


const useStyles = makeStyles({
    title: {
        display: 'flex',
        alignItems: 'center'
    },
    table: {
        marginBottom: '1rem'
    }
});


export const Result = () => {
    const styles = useStyles();
    const { data, setData } = useData();
    let navigate = useNavigate();

    //фильтрация данных в объекте data по ключу file
    const entries = Object.entries(data).filter((entry) =>
        entry[0] !== 'file' && entry[1] !== undefined && entry[0] !== 'havePhone'
    );
    const { file } = data;

    const { handleSubmit } = useForm({
        defaultValues: {...data},
    });

    const onSubmit = async (formData) => {
        
        console.log('sent to server', formData);
        //отправить на сервер (formData)
    };
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
                <Article  color='primary'/>
                <span> Form values</span>
            </Typography>
            <TableContainer className={styles.table} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                            Field
                            </TableCell>
                            <TableCell align='right'>
                            Value
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) =>
                            <TableRow key={entry[0]}>
                                <TableCell>
                                    {entry[0]}
                                </TableCell>
                                <TableCell align='right'>
                                    {entry[1].toString()}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {file &&
            <>
                <Typography
                    className={styles.title}
                    variant="h5"
                    component="h2">
                    <ForwardToInboxIcon />
                    <span> Files</span>
                </Typography>
                <List>
                    {file.map((i, index) =>
                        <ListItem key={index}>
                            <ListItemIcon>
                                <InsertDriveFile />
                            </ListItemIcon>
                            <ListItemText primary={i.name} secondary={i.size}/>
                        </ListItem>
                    )}
                    </List>
            </>}
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <MyButton
                    type='submit'
                    variant="contained">send to server
                </MyButton>
                <MyButton
                    onClick={onReset}
                    variant="outlined"
                    type='reset'
                >Clear and start over
                </MyButton>
            </MyForm>
        </MainContainer>
    )
};
