import tw from "twin.macro";

export const SmallCardContainer = tw.div`
    flex space-x-4 items-center m-2 mt-5 border-2 rounded-xl 
    cursor-pointer hover:bg-gray-100 hover:scale-105 
    transition duration-200 transform ease-out
`

export const SmallCardImageContainer = tw.div`
    flex relative h-16 w-16
`
