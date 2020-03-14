import {
  Label,
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label
          name="name"
          errorStyle={{ display: 'block', color: 'red' }}
          style={{ display: 'block' }}
        >
          Name
        </Label>
        <TextField
          name="name"
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{ required: true }}
        />
        <FieldError name="name" style={{ color: 'red' }} />

        <Label
          name="email"
          errorStyle={{ display: 'block', color: 'red' }}
          style={{ display: 'block' }}
        >
          Email
        </Label>
        <TextField
          name="email"
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^\.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" style={{ color: 'red' }} />

        <Label
          name="message"
          errorStyle={{ display: 'block', color: 'red' }}
          style={{ display: 'block' }}
        >
          Message
        </Label>
        <TextAreaField
          name="message"
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{ required: true }}
        />
        <FieldError name="message" style={{ color: 'red' }} />

        <Submit style={{ display: 'block' }}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
