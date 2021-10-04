import { MediumCardContainer, MediumCardImageContainer, MediumCardTextContainer } from "./medium-card.styles"
import Image from 'next/image'

const MediumCard = ({img, title}) => {
    return (
        <MediumCardContainer>
            <MediumCardImageContainer>
                <Image 
                    src={img}
                    layout="fill"
                    className="rounded-xl"
                />
            </MediumCardImageContainer>
            <MediumCardTextContainer>{title}</MediumCardTextContainer>
        </MediumCardContainer>
    )
}

export default MediumCard
