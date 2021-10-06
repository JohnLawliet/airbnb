import tw from "twin.macro";

export const InfoCardContainer = tw.div`
    flex py-7 px-2 pr-4 border-b cursor-pointer 
    hover:opacity-80 hover:shadow-lg 
    transition duration-200 ease-out first:border-t
`

export const ImageContainer = tw.div`
relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0
`

export const TextContainer = tw.div`
flex flex-col flex-grow pl-5
`

export const TextLocation = tw.div`
flex justify-between
`

export const Divider = tw.div`
border-b w-10 pt-2
`

export const Title = tw.h4`
    text-xl
`

export const Description = tw.div`
pt-2 text-sm text-gray-500 flex-grow
`
export const BottomTextContainer = tw.div`
flex justify-between pt-5
`

export const BottomText = tw.p`
flex items-center
`

export const Price = tw.p`
text-lg font-semibold pb-2 lg:text-2xl
`

export const Total = tw.p`
text-right font-extralight
`