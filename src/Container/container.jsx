import React from 'react'
import Header from '../Component/Header/Header'
import Banner from '../Component/Banner/Banner'
import Featured from '../Component/Featured/Featured'
import TravelAgency from '../Component/TravelAgency/TravelAgency'
import Top from '../Component/Top_Destinations/Top'
import FlexibleTours from '../Component/Flexible-Tours/Flexible-Tours'
import WhyChoose from '../Component/WhyChoose/WhyChoose'
import Moliva from '../Component/Moliva/Moliva'
import MolivaRomantic from '../Component/MolivaRomantic/MolivaRomantic'
import Adventure  from '../Component/Adventure/Adventure'
import Adventures from '../Component/Adventures/Adventures '
import Tourists from '../Component/Tourists/Tourists'
import Footer from '../Component/Footer/Footer'
import HeaderDestinations from '../Component/Destinations/HeaderDestinations/HeaderDestinations'
import BannerDestinations from '../Component/Destinations/BannerDestinations/BannerDestinations'
import  DestinationsMoliva from '../Component/Destinations/DestinationsMoliva/DestinationsMoliva'
import AboutDestinations from '../Component/Destinations/AboutDestinations/AboutDestinations'
import FooterDestinations from '../Component/Destinations/footerDestinations/footerDestinations'

function Container() {
  return (
    <div>
      <Header/>
      <Banner/>
        <Featured/>
        <TravelAgency/>
        <Top/>
        <FlexibleTours/>
        <WhyChoose/>
        <Moliva/>
        <MolivaRomantic/>
        <Adventure/>
        <Adventures/>
        <Tourists/>
        <Footer/>

        <HeaderDestinations/>
        <BannerDestinations/>
        <DestinationsMoliva/>
        <AboutDestinations/>
        <FooterDestinations/>
      </div>
  )
}

export default Container
