import React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput, ReferenceInput } from 'react-admin';

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostEdit = (props) => {
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit;
