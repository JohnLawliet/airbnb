import tw from "twin.macro";

export const BannerContainer = tw.div`
relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]
`

export const BannerTitleDiv = tw.div`
    absolute top-1/2 text-center w-full
`

export const StyledP = tw.p`
    text-sm sm:text-lg
`

export const BannerButton = tw.button`
    text-purple-500 bg-white shadow-md px-10 py-4 rounded-full 
    font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150
`