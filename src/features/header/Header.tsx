import { NavLink } from 'react-router-dom';
import * as FeatherIcon from 'feather-icons-react';
import Icon from './Icon';
import MenuNavHeader from './MenuNavHeader';
import MenuMobileHeader from './MenuMobileHeader';
// import DynamicSvg from '../../utils/DynamicSvg';

const Header = () => {
  const stylesLink =
    '*:desktop-1:inline *:hover:text-white-100 *:min-desktop-3:text-[36px] *:desktop-1:text-[18px] desktop-2:space-x-6 *:desktop-2:text-xl space-x-4 *:font-[Assistant] *:font-semibold *:transition-all *:duration-200 *:text-white-600';

  const styleActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-white-100 hidden' : 'text-white-600 hidden';

  return (
    <header className="desktop-1:items-center z-2 col-span-full row-end-1 flex h-fit w-full items-start justify-between">
      <NavLink
        to={'/'}
        className="text-white-100 min-desktop-3:text-[48px] tablet:text-2xl desktop-2:text-3xl z-2 font-[Bruno_Ace] uppercase"
      >
        Nox
      </NavLink>

      <nav>
        <ul className={stylesLink}>
          <MenuNavHeader />
          <NavLink className={styleActive} to={'/'}>
            Discovery
          </NavLink>
          <NavLink className={styleActive} to={'/collection'}>
            Collection
          </NavLink>
        </ul>
      </nav>
      <div className="desktop-2:gap-6 flex gap-4">
        <Icon styles="tablet:inline hidden">
          <FeatherIcon.Search className="min-desktop-3:h-[36px] min-desktop-3:w-[36px]" />
        </Icon>

        <Icon>
          <FeatherIcon.ShoppingCart className="min-desktop-3:h-[36px] min-desktop-3:w-[36px]" />
        </Icon>

        <div className="tablet:hidden mobile-1:inline">
          <MenuMobileHeader />
        </div>

        <Icon styles="tablet:inline hidden">
          <FeatherIcon.User className="min-desktop-3:h-[36px] min-desktop-3:w-[36px]" />
        </Icon>
      </div>
    </header>
  );
};

export default Header;

//  <DynamicSvg
//         paths={[
//           {
//             d: 'M24.1599 168H0.159912V0H12.1599C23.8399 0 36.4799 2.24 50.0799 6.72C63.8399 11.2 77.5999 17.52 91.3599 25.68C105.12 33.84 118.08 43.6 130.24 54.96C142.56 66.16 153.12 78.64 161.92 92.4V0H185.92V168H161.92C161.92 153.28 158.88 139.2 152.8 125.76C146.88 112.16 138.96 99.68 129.04 88.32C119.12 76.8 108.08 66.64 95.9199 57.84C83.9199 48.88 71.6799 41.6 59.1999 36C46.7199 30.24 35.0399 26.56 24.1599 24.96V168Z',
//             stroke: '#F7F9FF',
//           },
//           {
//             d: 'M426.972 84C426.972 95.68 425.132 106.64 421.452 116.88C417.772 126.96 412.492 135.84 405.612 143.52C398.892 151.2 390.812 157.2 381.372 161.52C371.932 165.84 361.452 168 349.932 168H294.012C282.332 168 271.772 165.84 262.332 161.52C252.892 157.2 244.732 151.2 237.852 143.52C231.132 135.84 225.932 126.96 222.252 116.88C218.572 106.64 216.732 95.68 216.732 84C216.732 72.48 218.572 61.68 222.252 51.6C225.932 41.36 231.132 32.4 237.852 24.72C244.732 16.88 252.892 10.8 262.332 6.48C271.772 2.16 282.332 0 294.012 0H349.932C361.452 0 371.932 2.16 381.372 6.48C390.812 10.8 398.892 16.88 405.612 24.72C412.492 32.4 417.772 41.36 421.452 51.6C425.132 61.68 426.972 72.48 426.972 84ZM402.972 84C402.972 72.96 400.812 62.88 396.492 53.76C392.332 44.64 386.252 37.44 378.252 32.16C370.412 26.72 360.972 24 349.932 24H294.012C282.972 24 273.452 26.72 265.452 32.16C257.612 37.44 251.532 44.64 247.212 53.76C242.892 62.88 240.732 72.96 240.732 84C240.732 95.04 242.892 105.12 247.212 114.24C251.532 123.2 257.612 130.4 265.452 135.84C273.452 141.28 282.972 144 294.012 144H349.932C360.972 144 370.412 141.28 378.252 135.84C386.252 130.4 392.332 123.2 396.492 114.24C400.812 105.12 402.972 95.04 402.972 84Z',
//             stroke: '#F7F9FF',
//           },
//           {
//             d: 'M620.907 168H589.467L523.707 100.32L458.187 168H426.747L508.107 84L426.747 0H458.187L620.907 168ZM620.907 0L547.707 75.36L532.107 59.28L589.467 0H620.907Z',
//             stroke: '#F7F9FF',
//           },
//         ]}
//       />
