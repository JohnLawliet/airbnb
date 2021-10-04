import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.header`
    ${tw`
        sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
        md:px-10
    `}
`

export const LeftDiv = styled.div`
    ${tw`
        relative flex h-10 items-center cursor-pointer my-auto
    `}
`

export const MiddleDiv = styled.div`
    ${tw`
        flex items-center py-2 rounded-full
        md:border-2 md:shadow-sm
    `}
`

export const SearchInput = tw.input`
    outline-none flex-grow bg-transparent pl-5 text-gray-600 placeholder-gray-400
`

// space-x-4 evenly spaces all inner elements left and right 
export const RightDiv = styled.div`
    ${tw`
        flex space-x-4 items-center justify-end text-gray-500
    `}
`

export const RightIconsContainer = tw.div`
flex items-center space-x-2 rounded-full border-2 p-2
`