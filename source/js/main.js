import Swiper from 'swiper';
import {EffectFade, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { initButtonNav } from './button-nav';
import { initSwiperHero } from './swiper-hero';

initButtonNav();
initSwiperHero(Swiper, EffectFade, Autoplay);
