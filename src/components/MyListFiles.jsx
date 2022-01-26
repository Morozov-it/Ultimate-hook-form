//основное
import React from 'react';
//стилевые компоненты
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { InsertDriveFile } from '@material-ui/icons';

export const MyListFiles = ({files}) => {
    return (
        <List>
            {files.map((i, index) =>
                <ListItem key={index}>
                    <ListItemIcon>
                        <InsertDriveFile />
                    </ListItemIcon>
                    <ListItemText primary={i.name} secondary={i.size}/>
                </ListItem>
            )}
        </List>
    )
};
