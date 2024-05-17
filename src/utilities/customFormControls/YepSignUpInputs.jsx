import { useField } from 'formik'
import React from 'react'
import { FormField, Label, Button,ButtonContent, Icon } from 'semantic-ui-react'

export default function YepSignUpInputs({ ...props }) {
    const [field, meta] = useField(props)
    return (
        <FormField error={meta.touched && !!meta.error}>
            <div className="inputs">
                <div className="input">
                    <img {...props} />
                    <input {...field} {...props} />
                    {
                        props.btnType ? (
                            <Button animated type={props.btnType} onClick={props.btnOnClick}>
                                <ButtonContent visible>{props.btnText}</ButtonContent>
                                <ButtonContent hidden>
                                    <Icon name='arrow right' />
                                </ButtonContent>
                            </Button>
                        ) : null
                    }

                    {
                        meta.touched && !!meta.error ? (
                            <Label pointing='left' basic color="red" content={meta.error}></Label>) : null
                    }
                </div>
            </div>
        </FormField >

    )
}
