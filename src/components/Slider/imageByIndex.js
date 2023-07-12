import image1 from '../../../public/images/img1.JPG';
import image2 from '../../../public/images/img2.jpg';
import image3 from '../../../public/images/img3.jpg';
import image4 from '../../../public/images/booki_cover.jpg';

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
