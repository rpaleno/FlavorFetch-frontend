import restaurant from '../assets/restaurant.png'
import delivery from '../assets/delivery.jpg'
import restaurants from '../assets/restaurants1.jpeg'

const Benefits = () => {
    const images = [
        { src: restaurants, alt: 'Image 1', boldText: 'Restaurants at your fingertips', text: "Discover a diverse selection of restaurants in your area, from cozy diners to gourmet eateries. Whether you're craving comfort food or something adventurous, we've got you covered!" },
        { src: delivery, alt: 'Image 2', boldText: 'Track your orders', text: "Stay in the loop with our real-time order tracking feature. Know exactly when your delicious meal is on its way, so you can plan your perfect dining experience at home."},
        { src: restaurant, alt: 'Image 3', boldText: 'Add your restaurant', text: 'Got a favorite spot that isn’t listed? Easily add your own restaurant to our platform and help your local favorites reach more hungry diners. Share the love and connect your community!' },
      ];
    
      return (
        <div className="flex flex-col items-center justify-center w-full px-6">
          <h2 className="text-5xl font-bold mb-4 py-6">Unlock New Possibilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={image.src} alt={image.alt} className="object-cover mb-2" />
                <p className="text-center font-bold text-2xl">{image.boldText}</p>
                <p className="text-center text-md">{image.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
}


export default Benefits;