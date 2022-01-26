//основное
import React from 'react';
import { Controller } from 'react-hook-form';
//импорт библиотек
import { Paper  } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import Dropzone from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import { MyListFiles } from './MyListFiles';

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer',
        background: '#eee',
        textAlign: 'center',
        padding: '10px',
        margin: theme.spacing(1,0,0,0)
    },
    icon: {
        margin: theme.spacing(1,0,0,0),
        color: '#888',
        fontSize: '42px'
    }
}));

export const FileInput = ({ control, name }) => {
    const styles = useStyles()
    return (
        <Controller 
            control={control}
            name={name}
            defaultValue={[]}
            render={({ field: { onChange, onBlur, value } }) => (
                <>
                    <Dropzone onDrop={onChange}>
                        {({ getRootProps, getInputProps }) => (
                            //здесь начинается внешний вид
                            <Paper
                                className={styles.root}
                                variant='outlined'
                                {...getRootProps()}>
                                <CloudUpload className={styles.icon}/>
                                <input
                                    {...getInputProps()}
                                    onBlur={onBlur}
                                    name={name} />
                                <p>Drag'n'drop files here, or click to select files</p>
                            </Paper>)
                        }
                    </Dropzone>
                    <MyListFiles files={value}/>
                </>
            )}
        ></Controller>
    )
};
