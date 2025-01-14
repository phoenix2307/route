import {Form} from "react-router-dom";

export const NewPost = ({submitting}: any) => {
    return (
        <Form action={'/posts/new'} method={'post'}>
            <label>
                 Title:
                <input type="text" name={'title'}/>
            </label>
            <label>
                Body:
                <input type="text" name={'body'}/>
            </label>
            <input type="hidden" name={'userId'} value={'1'}/>
            <input type="submit" value={'add post'} disabled={submitting}/>
        </Form>
    )
}