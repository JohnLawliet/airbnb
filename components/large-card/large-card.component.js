import Image from 'next/image'
import { LargeCardButton, LargeCardContainer, LargeCardImageContainer, LargeCardTextContainer, LargeCardTitle } from './large-card.styles'

const LargeCard = ({img, title, description, buttonText}) => {
    return (
        <LargeCardContainer>
            <LargeCardImageContainer>
                <Image 
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </LargeCardImageContainer>
            <LargeCardTextContainer>
                <LargeCardTitle>{title}</LargeCardTitle>
                <p>{description}</p>
                <LargeCardButton>{buttonText}</LargeCardButton>
            </LargeCardTextContainer>
        </LargeCardContainer>
    )
}

export default LargeCard
