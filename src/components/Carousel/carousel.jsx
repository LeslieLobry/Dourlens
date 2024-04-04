import { Carousel } from 'react-responsive-carousel';
import prestation from "../../data/prestation.json"
import "../Carousel/carousel.css"

function Slider (){

	return (
		<Carousel className="carousel-contenan">
			{prestation.map(slide =>(
				<div key={slide.id}>
					<img src={slide.img} alt=""></img>
				</div>
			))}
		</Carousel>
	)
		
}
export default Slider
