import Image from 'next/image'
import { HeaderContainer, LeftDiv, MiddleDiv, RightDiv, RightIconsContainer, SearchInput } from './header.styles'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from 'next/router'

const Header = ({placeholder}) => {
    const router = useRouter()
    const [searchInput, setSearchInput] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput("")
    }

    // toISOString() converts into a string to send over the URL
    const search = () => {
        router.push({
            pathname:"/search",
            query:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: noOfGuests
            }
        })
    }

    return (
        <HeaderContainer>
            <LeftDiv onClick={() => router.push('/')}>
                <Image 
                    src="https://links.papareact.com/qd3" 
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </LeftDiv>

            <MiddleDiv>
                <SearchInput 
                    type="text" 
                    placeholder={placeholder || "Enter search here"}
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
                <SearchIcon className="hidden md:inline-flex text-white bg-red-400 h-8 rounded-full p-2 cursor-pointer mx-2"/>

            </MiddleDiv>

            <RightDiv>
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <RightIconsContainer>
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </RightIconsContainer>
            </RightDiv>

            {
                searchInput && (
                    <div className="flex flex-col col-span-3 mx-auto">
                        <DateRangePicker 
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#FD5B61"]}
                            onChange={handleSelect}
                        />
                        <div className="flex items-center border-b mb-4">
                            <h2 className="text-2xl flex-grow font-semibold">
                                Number of Guests
                            </h2>
                            <UsersIcon className="h-5"/>
                            <input 
                            type="number" 
                            className="w-12 pl-2 text-lg outline-none text-red-400"
                            value={noOfGuests}
                            onChange={e => setNoOfGuests(e.target.value)}
                            min={1}
                            />
                        </div>
                        <div className="flex">
                            <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
                            <button className="flex-grow text-red-400" onClick={search}>Search</button>
                        </div>
                    </div>
                )
            }
        </HeaderContainer>
    )
}

export default Header
