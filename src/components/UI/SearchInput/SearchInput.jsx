import React, {useMemo, useState} from 'react';
import debounce from "debounce";
import MyInput from "../MyInput/MyInput";

const SearchInput = (props) => {
    const [value, setValue] = useState(props.query);
    const debouncedOnChange = useMemo(() => debounce(props.onChange, 1000), [props.onChange]);

    const onChange = (event) => {
        setValue(event.target.value);
        debouncedOnChange(event.target.value);
    }

    return (
        <MyInput {...props} onChange={onChange} value={value}/>
    );
};

export default SearchInput;