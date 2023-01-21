import TitleHeader from '../../atoms/TitleHeader';
import SideNav from '@/components/molecules/sidenav';

const MobileMenu = ({title}) => {
    return (
        <div className="w-full sm:hidden">
            <div className='flex justify-center mt-8'>
                <div class=" font-bold text-2xl">{title}</div>
            </div>
            <div className='bg-white rounded-xl px-8 mb-8'>
                <SideNav />
            </div>
        </div>
    )
}

export default MobileMenu;