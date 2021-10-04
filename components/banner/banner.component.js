import Image from 'next/image'
import { BannerButton, BannerContainer, BannerTitleDiv, StyledP } from './banner.styles'

const Banner = () => {
    return (
        <BannerContainer>
            <Image 
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <BannerTitleDiv>
                <StyledP>Not sure where to go? Perfect.</StyledP>
                <BannerButton>I'm flexible</BannerButton>
            </BannerTitleDiv>
        </BannerContainer>
    )
}

export default Banner
