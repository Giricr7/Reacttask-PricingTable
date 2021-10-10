import './style.css'


function PricingCards(props)
{

    return (

        <> 
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.plan}</h5>
                        <h6 class="card-price text-center">{props.currency}{ props.price}<span class="period">{ props.duration}</span></h6>
            <hr/>
            <ul class="fa-ul">
                            {props.benefits.map((perk) => {
                                  if(perk.access)
                                  { return <li><span class="fa-li"><i class="fas fa-check"></i></span>{perk.perks}</li>}
                                    else
                                  { return <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{perk.perks}</li>}            
               })}                    
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>


        </>



    )




}


export default PricingCards;