import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';
import UrlField from '../custom/UrlField';

const UserList = (props) => {
	return (
		<List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField label='Street' source="address.street" />
        <TextField source="phone" />
        <UrlField source="website" />
        <TextField label='Company Name' source="company.name" />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
	)
}

export default UserList;
