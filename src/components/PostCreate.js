import React from 'react'
import { Create, ReferenceInput, SimpleForm, TextInput, SelectInput } from 'react-admin';

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <ReferenceInput source='userId' reference='users'>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <TextInput source='title' />
        <TextInput multiline source='body' />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate;
