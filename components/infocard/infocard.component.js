import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { BottomText, BottomTextContainer, Description, Divider, ImageContainer, InfoCardContainer, Price, TextContainer, TextLocation, Title, Total } from './infocard.styles'
import Skeleton from 'react-loading-skeleton';

const InfoCard = ({img, location, title, description, star, price, total}) => {
    return (
        <InfoCardContainer>
            <ImageContainer>
                <Image 
                src={img} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-2xl"
                placeholder="blur"
                blurDataURL="/favicon.ico"
                />
            </ImageContainer>

            <TextContainer>
                <TextLocation>
                    <p>{location || <Skeleton />}</p>
                    <HeartIcon className="h-7 cursor-pointer"/>
                </TextLocation>

                <Title>{title || <Skeleton />}</Title>
                <Divider />
                <Description>{description || <Skeleton />}</Description>

                <BottomTextContainer>
                    <BottomText>
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </BottomText>
                    
                    <div>
                        <Price>{price || <Skeleton />}</Price>
                        <Total>{total || <Skeleton />}</Total>
                    </div>
                </BottomTextContainer>

            </TextContainer>
        </InfoCardContainer>
    )
}

export default InfoCard
