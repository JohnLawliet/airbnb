import { FooterContainer, FooterSubHeading } from "./footer.styles"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubHeading>
                <h5 className="font-bold">ABOUT</h5>
                <p>How airbnb works</p>
                <p>Newsroom</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </FooterSubHeading>
            <FooterSubHeading>
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Referrals accepted</p>
            </FooterSubHeading>
            <FooterSubHeading>
                <h5 className="font-bold">HOST</h5>
                <p>How airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </FooterSubHeading>
            <FooterSubHeading>
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Centre</p>
                <p>Trust & Safter</p>
                <p>Say Hi</p>
                <p>Easter Eggs</p>
                <p>For the win</p>
            </FooterSubHeading>
        </FooterContainer>
    )
}

export default Footer
