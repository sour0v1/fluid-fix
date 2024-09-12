import React, { useEffect, useState } from 'react';

const CoverageLocations = ({isFocused, setIsFocused}) => {
    const [query, setQuery] = useState('');
    const [suggestedLocations, setSuggestedLocations] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleQueryChange = (e) => {
        console.log(e.target.value);
        setQuery(e.target.value);
    }

    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1&limit=5`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSuggestedLocations(data);
            })
            
    }, [query])

    return (
        <div className='flex flex-col gap-1'>
            <span>Coverage Area Location</span>
            <input onChange={handleQueryChange} onFocus={() => setIsFocused(true)} onBlur={() => setTimeout(() => setIsFocused(false), 100)} className='py-2 rounded-full px-6 bg-[#094074] bg-opacity-10 outline-none focus:border-2 focus:border-[#094074]' value={query} type="text" placeholder='Type area' />
            <div className={`bg-white shadow-lg w-full rounded-b-lg space-y-4 py-6 ${isFocused ? 'block' : 'hidden'}`}>
                {
                    suggestedLocations.map(location => 
                        <button onClick={() => setQuery(location.display_name)} type='button' className='hover:bg-[#094074] hover:bg-opacity-10 px-6 text-left' key={location.place_id}>{location.display_name}</button>
                    )
                }
            </div>
        </div>
    );
};

export default CoverageLocations;