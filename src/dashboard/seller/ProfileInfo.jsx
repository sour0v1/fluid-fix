import React, { useMemo, useState } from 'react';
import ReactCountryDropdown from 'react-country-dropdown';
import ReactFlagsSelect from 'react-flags-select';
import countryList from 'react-select-country-list';
import Select from 'react-select'

const ProfileInfo = () => {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }
    console.log(value);

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'rgba(9, 64, 116, 0.1)',  // bg-red-500 with opacity-10
            borderRadius: '100px',
            border: 'none',  // Remove the border
            boxShadow: 'none',
            padding: '5px',
            '&:hover': {
                borderColor: 'none',  // Ensure no border on hover
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#094074' : 'white',
            color: state.isSelected ? 'white' : 'black',
            padding: 20,
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '10px',
            overflow: 'hidden',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#094074',
            fontWeight: 'bold',
        }),
    };
    return (
        <div>
            {/* heading */}
            <div className='flex justify-between items-center border-b pb-4'>
                <h2 className='text-2xl font-semibold text-[#094074]'>Personal Info</h2>
                <button className='py-2 px-4 bg-[#094074] text-white rounded-full'>Save</button>
            </div>
            <div className='w-full text-[#094074] my-6'>
                <form className='w-full grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-1'>
                        <span>Full Name</span>
                        <input className='py-2 rounded-full px-6 bg-[#094074] bg-opacity-10 outline-none focus:border-2 focus:border-[#094074]' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span>Email</span>
                        <input className='py-2 rounded-full px-6 bg-[#094074] bg-opacity-10 outline-none focus:border-2 focus:border-[#094074]' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span>Address</span>
                        <input className='py-2 rounded-full px-6 bg-[#094074] bg-opacity-10 outline-none focus:border-2 focus:border-[#094074]' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span>Phone</span>
                        <input className='py-2 rounded-full px-6 bg-[#094074] bg-opacity-10 outline-none focus:border-2 focus:border-[#094074]' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span>Country</span>
                        <Select placeholder='Select country' styles={customStyles} options={options} value={value} onChange={changeHandler} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span>Zip Code</span>
                        <input className='py-2 rounded-full px-6 bg-[#094074] bg-opacity-10 outline-none focus:border-2 focus:border-[#094074]' type="text" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileInfo;