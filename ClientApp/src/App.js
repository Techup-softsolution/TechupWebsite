import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';

import { Website } from './components/Website';
import { Software } from './components/Software';
import { AndroidApps } from './components/AndroidApps';
import { iOSApps } from './components/iOSApps';
import { MaintananceAndSuport } from './components/MaintananceAndSuport';
import { SoftwareArchitecture } from './components/SoftwareArchitecture';
import { UIUXDesign } from './components/UIUXDesign';
import { DigitalMarketing } from './components/DigitalMarketing';
import { SearchEngineOptimization } from './components/SearchEngineOptimization';
import { SocialMediaMarketing } from './components/SocialMediaMarketing';
import { GoogleAdWords } from './components/GoogleAdWords';
import { VirtualTour } from './components/VirtualTour';
import { CommercialPhotography } from './components/CommercialPhotography';
import { GoogleBusinessView } from './components/GoogleBusinessView';
import { GoogleIndoorMap } from './components/GoogleIndoorMap';
import { Walkthrough } from './components/Walkthrough';
import { TVCommercials } from './components/TVCommercials';
import { CorporateFilms } from './components/CorporateFilms';
import { FacebookAdds } from './components/FacebookAdds';
import { CorporateIdentityDesign } from './components/CorporateIdentityDesign';
import { LogoDesignbyusingGoldenRatio } from './components/LogoDesignbyusingGoldenRatio';
import { MailerAndNewsletterDesign } from './components/MailerAndNewsletterDesign';
import { SocialMediaPostsDesign } from './components/SocialMediaPostsDesign';
import { PackagingDesignAndRemodeling } from './components/PackagingDesignAndRemodeling';
import { IndoorAndOutdoorBranding } from './components/IndoorAndOutdoorBranding';
import { CatelogueAndBrochures } from './components/CatelogueAndBrochures';
import { MarketingPresentations } from './components/MarketingPresentations';
import { ArticleAndBlogWriting } from './components/ArticleAndBlogWriting';
import { WebsiteContentWriting } from './components/WebsiteContentWriting';
import { SEOContentWriting } from './components/SEOContentWriting';
import { MVCProgramming } from './components/MVCProgramming';
import { EDiscoveryConsulting } from './components/EDiscoveryConsulting';
import { AngularJSProgramming } from './components/AngularJSProgramming';
import { AndroidAppsDevelopment } from './components/AndroidAppsDevelopment';
import { iOSAppsDevelopment } from './components/iOSAppsDevelopment';
import { GraphicDesignTraining } from './components/GraphicDesignTraining';
import { Contact } from './components/Contact';
import { Carrier } from './components/Carrier';
import { CarrierForm } from './components/CarrierForm';
import { BusinessDeveloperCarrierForm } from './components/BusinessDeveloperCarrierForm';
import { ASPCarrierForm } from './components/ASPCarrierForm';
import { DigitalMarketingCarrierForm } from './components/DigitalMarketingCarrierForm';
import { IOSCarrierForm } from './components/IOSCarrierForm';
import { OpenSourceCarrierForm } from './components/OpenSourceCarrierForm';
import { UIUXCarrierForm } from './components/UIUXCarrierForm';




import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            
            <Route path='/aboutUs' component={AboutUs} />
            
          
            <Route path='/website' component={Website} />
           
            <Route path='/software' component={Software} />
           
            <Route path='/androidApps' component={AndroidApps} />  
            
            <Route path='/iOSApps' component={iOSApps} />  
           
            <Route path='/maintananceAndSuport' component={MaintananceAndSuport} />    
         
            <Route path='/softwareArchitecture' component={SoftwareArchitecture} />  

           
            <Route path='/uIUXDesign' component={UIUXDesign} />  

        
            <Route path='/digitalMarketing' component={DigitalMarketing} />  

           
            <Route path='/searchEngineOptimization' component={SearchEngineOptimization} /> 

           
            <Route path='/socialMediaMarketing' component={SocialMediaMarketing} />  

            
            <Route path='/googleAdWords' component={GoogleAdWords} /> 

            
            <Route path='/virtualTour' component={VirtualTour} />  

          
            <Route path='/commercialPhotography' component={CommercialPhotography} />  

          
            <Route path='/googleBusinessView' component={GoogleBusinessView} />  

          
            <Route path='/googleIndoorMap' component={GoogleIndoorMap} />  

          
            <Route path='/walkthrough' component={Walkthrough} />  

           
            <Route path='/tVCommercials' component={TVCommercials} />  

          
            <Route path='/corporateFilms' component={CorporateFilms} />  
            
           
            <Route path='/facebookAdds' component={FacebookAdds} /> 

           
            <Route path='/corporateIdentityDesign' component={CorporateIdentityDesign} />  

           
            <Route path='/logoDesignbyusingGoldenRatio' component={LogoDesignbyusingGoldenRatio} /> 

             
            <Route path='/mailerAndNewsletterDesign' component={MailerAndNewsletterDesign} />   

           
            <Route path='/socialMediaPostsDesign' component={SocialMediaPostsDesign} />

           
            <Route path='/packagingDesignAndRemodeling' component={PackagingDesignAndRemodeling} />

           
            <Route path='/indoorAndOutdoorBranding' component={IndoorAndOutdoorBranding} />

           
            <Route path='/catelogueAndBrochures' component={CatelogueAndBrochures} />

           
            <Route path='/marketingPresentations' component={MarketingPresentations} />

           
            <Route path='/articleAndBlogWriting' component={ArticleAndBlogWriting} />

           
            <Route path='/websiteContentWriting' component={WebsiteContentWriting} />

           
            <Route path='/sEOContentWriting' component={SEOContentWriting} />

           
            <Route path='/mVCProgramming' component={MVCProgramming} />

           
            <Route path='/eDiscoveryConsulting' component={EDiscoveryConsulting} />

           
            <Route path='/angularJSProgramming' component={AngularJSProgramming} />

           
            <Route path='/androidAppsDevelopment' component={AndroidAppsDevelopment} />

           
            <Route path='/iOSAppsDevelopment' component={iOSAppsDevelopment} />

           
            <Route path='/graphicDesignTraining' component={GraphicDesignTraining} />

           
            <Route path='/contact' component={Contact} />
           
            <Route path='/carrier' component={Carrier} />

           
            <Route path='/carrierForm' component={CarrierForm} />

           
            <Route path='/businessDeveloperCarrierForm' component={BusinessDeveloperCarrierForm} />

          
            <Route path='/aSPCarrierForm' component={ASPCarrierForm} />

           
            <Route path='/digitalMarketingCarrierForm' component={DigitalMarketingCarrierForm} />

          
            <Route path='/iOSCarrierForm' component={IOSCarrierForm} />

          
            <Route path='/openSourceCarrierForm' component={OpenSourceCarrierForm} />

           
            <Route path='/uIUXCarrierForm' component={UIUXCarrierForm} />


            {/*<Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />*/}
      </Layout>
    );
  }
}
