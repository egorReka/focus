import Swiper from 'swiper';
import {EffectFade, Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { initButtonNav } from './button-nav';
import { initSwiperHero } from './swiper-hero';
import { initSwiperTeam } from './swiper-team';
import { initSwiperGallery } from './swiper-gallery';
import { initSwiperReviews } from './swiper-reviews';
import { setModal } from './modal';
import { sendMessage } from './send-form-tg';

const openModalButtons = document.querySelectorAll('.button-modal');

initButtonNav();
initSwiperHero(Swiper, EffectFade, Autoplay);
initSwiperTeam(Swiper);
initSwiperGallery(Swiper, Pagination);
initSwiperReviews(Swiper, Navigation);
openModalButtons.forEach((button) => setModal(button));
