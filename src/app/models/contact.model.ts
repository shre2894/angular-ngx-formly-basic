import { FormlyFieldConfig } from '@ngx-formly/core';

export class Contact {
  name: string;
  phoneNumber: string;
  email: string;

  formFields() {
    return <FormlyFieldConfig[]>[
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Name',
          placeholder: 'Name',
          required: true
        },
        validation: {
          messages: {
            required: 'You need to provide a Name!'
          }
        }
      },
      {
        key: 'phoneNumber',
        type: 'input',
        templateOptions: {
          type: 'tel',
          label: 'Phone Number',
          placeholder: 'Phone Number',
          required: true
        },
        validation: {
          messages: {
            required: 'You need to provide a Phone Number!'
          }
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'Email',
          required: true
        },
        validation: {
          messages: {
            required: 'You need to provide a Email!'
          }
        }
      }
    ]
  }
}