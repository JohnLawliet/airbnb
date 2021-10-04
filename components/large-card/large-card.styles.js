import tw from "twin.macro"

export const LargeCardContainer = tw.section`
relative py-16 cursor-pointer
`

export const LargeCardImageContainer = tw.div`
relative h-96 min-w-[300px]
`

export const LargeCardTextContainer = tw.div`
absolute top-32 left-12
`

export const LargeCardTitle = tw.h3`
text-4xl mb-3 w-64
`

export const LargeCardButton = tw.button`
text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5
`