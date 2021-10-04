import { SmallCardContainer, SmallCardImageContainer } from "./small-card.styles"
import Image from 'next/image'

const SmallCard = ({img, location, distance}) => {
    return (
        <SmallCardContainer>
            <SmallCardImageContainer>
                <Image src={img} layout="fill" className="rounded-lg"/>
            </SmallCardImageContainer>
            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </SmallCardContainer>
    )
}

export default SmallCard
