import React, {useState} from "react";

const Searchbar = (props) => {
    const [search, setSearch] = useState(null)
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(null)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar;