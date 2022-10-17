import React from 'react';
import DisplayType from "../DisplayType/DisplayType";
import SearchBar from "../UI/SearchBar/SearchBar";
import Select from "../UI/Select/Select";
import './HeaderPanel.css';

const HeaderPanel = ({displayTypeOpt, searchOpt, selectOpt}) => {
    return (
        <div className="header-panel">
            <div className="header-panel__search">
                <SearchBar
                    placeholder={searchOpt.placeholder}
                    value={searchOpt.searchQuery}
                    onChange={searchOpt.changeSearchQuery} />
            </div>
            <div className="header-panel__addition">
                <DisplayType
                    onClick={displayTypeOpt.changeDisplayType}
                    currentValue={displayTypeOpt.displayType}/>
                <Select
                    options={selectOpt.sortOptions}
                    labelText={selectOpt.label}
                    onChange={selectOpt.changeSortType} />
            </div>
        </div>
    );
};

export default HeaderPanel;