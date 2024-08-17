import Swiper from 'swiper';
import {EffectFade, Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { initButtonNav } from './button-nav';
import { initSwiperHero } from './swiper-hero';
import { initSwiperTeam } from './swiper-team';
import { initSwiperGallery } from './swiper-gallery';

initButtonNav();
initSwiperHero(Swiper, EffectFade, Autoplay);
initSwiperTeam(Swiper);
initSwiperGallery(Swiper, Pagination);
