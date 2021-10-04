import Image from 'next/image'
import { HeaderContainer, LeftDiv, MiddleDiv, RightDiv, RightIconsContainer, SearchInput } from './header.styles'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid'

const Header = () => {
    return (
        <HeaderContainer>
            <LeftDiv>
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
                    placeholder="Enter search here"
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
        </HeaderContainer>
    )
}

export default Header
