import {useState} from "react";

import { Dropdown } from "primereact/dropdown";

export const DropdownHoras = () => {

    const [selectedHora, setSelectedHora] = useState(null);
    const horas = [
        {name: '13:00', code: '13:00'},
        {name: '13:30', code: '13:30'},
        {name: '14:00', code: '14:00'},
        {name: '14:30', code: '14:30'},
        {name: '15:00', code: '15:00'},
        {name: '15:30', code: '15:30'}
    ];
    
    return(
        <Dropdown value={selectedHora} onChange={(e) => setSelectedHora(e.value)} options={horas} optionLabel="name"
                                editable placeholder="Select a Hora" className="w-full md:w-14rem" ></Dropdown>
    ); 
}