import React, {useEffect, useState} from 'react';
import Select from "../UI/Select/Select";

const SortSelect = ({labelText, options, sortSubject, setSortSubject}) => {
    const getSorted = (type, arr) => {
        return [...arr].sort((a, b) => a[type].localeCompare(b[type]));
    };

    const [sortType, setSortType] = useState(options[0].value);
    useEffect(() => {
        console.log('SortSelect');
        const newArr = getSorted(sortType, sortSubject);

        setSortSubject(newArr);
    }, [sortType]);

    return (
        <Select
            labelText={labelText}
            options={options}
            changeHandler={({target}) => setSortType(target.value)} />
    );
};

export default SortSelect;