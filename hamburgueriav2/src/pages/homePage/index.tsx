import HomePageStyles from "./styles"

import losChapasLogo from "../../assets/loschapaslogo.png"
import burgerBanner from "../../assets/burgerBanner.png"

const HomePage = () => {

return(
    <HomePageStyles>
        <main className="homePageMain">
            <section className="bannerSection">
                <img src={burgerBanner} alt="Hamburguer da los chapas" className="bannerImg"/>
            </section>
            <section className="descriptionSection">
                <div className="losChapasLogoDiv">
                    <img src={losChapasLogo} alt="Los Chapas Logo" className="losChapasLogo"/>
                </div>
                <div className="bestBurgerDiv">
                    <p className="bestBurgerParag">O melhor hambúrguer do RS em 2022 segundo o ifood!</p>
                </div>
                <div className="goToSiteDiv">
                    <button className="goToSiteBttn">Acessar o site</button>
                </div>
            </section>
        </main>
    </HomePageStyles>
)

}

export default HomePage