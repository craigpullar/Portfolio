import Site from "./Site";
import React from 'react';
import ReactDOM from 'react-dom';

class MyWork extends React.Component {
	render() {
		return (
			<div className="container-fluid light-grey work text-center">	
				<div className="row">
					<div className="col-sm-12">
						<h2 data-animation="fadeInUp">My Work</h2>
					</div>
					<div className="slick">
						<Site 
							link="https://www.homeaway.com/lp/vacation-equation/" 
							class="vacation-equation" 
							animation="fadeInUp"
							animationDelay="0"
						/>
						<Site 
							link="https://www.homeaway.co.uk/info/halloween" 
							class="monstermas" 
							animation="fadeInUp"
							animationDelay="00"
						/>
						<Site 
							link="https://www.homeaway.com/lp/destination-races-VIP-upgrade/?" 
							class="destination-races"
							animation="fadeInUp"
							animationDelay="0"
						/>
						<Site 
							link="https://www.homeaway.co.uk/lp/primary-home/" 
							class="primary-home" 
							animation="fadeInUp"
							animationDelay="00"
						/>
						<Site 
							link="https://yoti.com/" 
							class="yoti" 
							animation="fadeInUp"
							animationDelay="00"
						/>
						<Site 
						link="http://hlnlegal.co.uk/" 
						class="hln-legal" 
						animation="fadeInUp"
						animationDelay="00"/>
					</div>
				</div>
			</div>
			);
		}
	}

	export {MyWork as default};
