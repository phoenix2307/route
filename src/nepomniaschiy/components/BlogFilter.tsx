import React, {useState} from 'react';

export const BlogFilter = (props: any) => {

    const {postQuery, latest, setSearchParams} = props

    const [search, setSearch] = useState(postQuery)
    const [checked, setChecked] = useState(latest)

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const form = event.target
        const query = form.search.value
        const isLatest = form.latest.checked

        const params: any = {}
        if(query.length) params.post = query
        if(isLatest) params.latest = true

        setSearchParams(params)
    }

    const handlerSearch = (event: any) => {
        setSearch(event.currentTarget.value)
    }

    const handlerCheck = (event: any) => {
        setChecked(event.target.checked)
    }


    return (
        <form autoComplete={'off'} onSubmit={handleSubmit}>
            <input type="search" name={'search'} value={search} onChange={handlerSearch}/>
            <label style={{ padding: '0 1rem' }}>
                <input type="checkbox" name={'latest'}
                       checked={checked}
                       onChange={handlerCheck}/> New only
            </label>
            <input type="submit" name={'Search'}/>
        </form>
    );
};

