import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import style from './AddMessageForm.module.css'

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Введіть текст повідомлення' 
                       name="newMessageBody" 
                       className={style.text}/>
            </div>
            <div>
                <button>Відправити повідомлення</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

























