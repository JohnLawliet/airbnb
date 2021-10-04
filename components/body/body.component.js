import LargeCard from "../large-card/large-card.component"
import MediumCard from "../medium-card/medium-card.component"
import SmallCard from "../small-card/small-card.component"
import { BodyContainer, MediumCardsContainerList, SmallCardsContainerList } from "./body.styles"

// scrollbar-hide is a utility gotten from tailwind-scrollbar-hide plugin
// to be installed separately and added to tailwind.config.js
const Body = ({exploreData, cardsData}) => {
    return (
        <BodyContainer>
            <section className="pt-6">
                <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
                <SmallCardsContainerList>
                {
                    exploreData?.map(({img, distance, location}) => (
                        <SmallCard 
                            key={img} 
                            img={img} 
                            distance={distance} 
                            location={location}
                        />
                    ))
                }
                </SmallCardsContainerList>
            </section>

            <section>
                <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
                <MediumCardsContainerList>
                {
                    cardsData?.map(({title, img}) => (
                        <MediumCard key={img} img={img} title={title}/>
                    ))
                }
                </MediumCardsContainerList>                
            </section>

            <LargeCard 
                img="https://links.papareact.com/4cj"
                title="The Greatest Outdoors"
                description="Wishlists curated by Airbnb."
                buttonText="Get Inspired"
            />
        </BodyContainer>
    )
}

export default Body
