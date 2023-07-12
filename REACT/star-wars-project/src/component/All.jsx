import React, {useState} from 'react'
import { useNavigate} from "react-router-dom";

const All = () => {
    const [options, setOption] = useState("people");
    const [givenId, setId] = useState("");
    const navigate = useNavigate();
    const submitOptions = (e) => {
        e.preventDefault();
        navigate(`/${options}/${givenId}`);
    }
    return (
        <div>
            <form onSubmit={submitOptions}>
                <div className="search">
                    Search For:
                    <select id="traits" onChange={(e) => setOption(e.target.value)}>
                        <option value="people">people</option>
                        <option value="planets">planet</option>
                        <option value="starships">starship</option>
                    </select>
                </div>
                <div className="id">ID:<input type="number" onChange={(e) =>setId(e.target.value)}/></div>
                <button>Search</button>
            </form>
        </div>
    )
}

export default All