import { Component } from "react"
import PricingCards from './PricingCard'

class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pricing_data:
                [
            
                {
                    plan: 'FREE',
                    currency: "$",
                    price: 0,
                    duration:'/month',
                    benefits:
                        [
                            {
                                perks: 'Single User',
                                access:true
                            },
                            {
                                perks: '5GB Storage',
                                access:true
                            },
                            {
                                perks: 'Unlimited Public Projects',
                                access:true
                            },
                            {
                                perks: 'Community Access',
                                access:true
                            },
                            {
                                perks: 'Unlimited Private Projects',
                                access:false
                            },
                            {
                                perks: 'Dedicated Phone Support',
                                access:false
                            },
                            {
                                perks: 'Free Subdomain',
                                access:false
                            },
                            {
                                perks: 'Monthly Status Reports',
                                access:false
                            },
                        ]
                },

                {
                    plan: 'PLUS',
                    currency: "$",
                    price: 9,
                    duration:'/month',
                    benefits:
                        [
                            {
                                perks: '5 Users',
                                access:true
                            },
                            {
                                perks: '50GB Storage',
                                access:true
                            },
                            {
                                perks: 'Unlimited Public Projects',
                                access:true
                            },
                            {
                                perks: 'Community Access',
                                access:true
                            },
                            {
                                perks: 'Unlimited Private Projects',
                                access:true
                            },
                            {
                                perks: 'Dedicated Phone Support',
                                access:true
                            },
                            {
                                perks: 'Free Subdomain',
                                access:true
                            },
                            {
                                perks: 'Monthly Status Reports',
                                access:false
                            },
                        ]
                },

                {
                    plan: 'PRO',
                    currency: "$",
                    price: 49,
                    duration:'/month',
                    benefits:
                        [
                            {
                                perks: 'Unlimited Users',
                                access:true
                            },
                            {
                                perks: '150GB Storage',
                                access:true
                            },
                            {
                                perks: 'Unlimited Public Projects',
                                access:true
                            },
                            {
                                perks: 'Community Access',
                                access:true
                            },
                            {
                                perks: 'Unlimited Private Projects',
                                access:true
                            },
                            {
                                perks: 'Dedicated Phone Support',
                                access:true
                            },
                            {
                                perks: 'Unlimited Free Subdomains',
                                access:true
                            },
                            {
                                perks: 'Monthly Status Reports',
                                access:true
                            },
                        ]
                }





                ]
          

        }
    }
    
    render() {
        return (
            <>
               <div class="row">
                {this.state.pricing_data.map((data) => {
                   return <PricingCards {...data}/>
                })}
                </div>
        </>
        )
    }

}
 





export default Pricing;