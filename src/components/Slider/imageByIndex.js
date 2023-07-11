import Image from 'next/image';

import image1 from '../../../public/images/img1.JPG';
import image2 from '../../../public/images/img2.jpg';
import image3 from '../../../public/images/img3.jpg';

export const images = [image1, image2, image3];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
