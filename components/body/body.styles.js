import tw from "twin.macro";

export const BodyContainer = tw.main`
    mx-auto max-w-7xl px-8 sm:px-16
`

export const SmallCardsContainerList = tw.div`
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
`

export const MediumCardsContainerList = tw.div`
flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3
`