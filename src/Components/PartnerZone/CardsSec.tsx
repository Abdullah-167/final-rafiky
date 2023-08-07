;
import useTranslation from '@/hooks/useTranslation';
import { IoExtensionPuzzleSharp, IoNewspaperSharp } from 'react-icons/io5';
import { MdAnalytics } from 'react-icons/md';
import Button from '../Button';


const CardsSec = () => {

    const { t } = useTranslation()
    const cards = [
        {
            icon: <IoExtensionPuzzleSharp />,
            heading: t('zonessPartner_FirstcardHeading'),
            para: t('zonessPartner_Firstcardpara'),
            bgColor: 'rgba(122,105,230,0.3)',
            color: '#7a69e6'
        },
        {
            icon: <MdAnalytics />,
            heading: t('zonessPartner_SeccardHeading'),
            para: t('zonessPartner_Seccardpara'),
            bgColor: 'rgba(250,94,93,0.3)',
            color: '#fa5e5d'
        },
        {
            icon: <IoNewspaperSharp />,
            heading: t('zonessPartner_ThirdcardHeading'),
            para: t('zonessPartner_Thirdcardpara'),
            bgColor: 'rgba(249,141,94,0.3)',
            color: '#f98d5e'
        },
    ]

    return (
        <div className='bg-[#FFFFFF]  sm:py-20'>
            <div className='container'>
                <h2 className=' text-[35px] sm:text-[45px] text-[#333333] font-bold text-center mb-12'>{t('zonessPartner_Title')}</h2>
                <div className='flex justify-center gap-10 pb-20'>
                    {cards.map((item, index) => {

                        return (
                            <div
                                className='hero-cards bg-white px-5 py-10 rounded-xl w-full'
                                key={index}
                            >
                                <div
                                    className={`text-4xl rounded-full w-16 h-16 mx-auto px-4 py-3 text-center`}
                                    style={{
                                        backgroundColor: item.bgColor,
                                        color: item.color
                                    }}
                                >
                                    <div className="icon-container"> {item.icon} </div>
                                </div>
                                <h4 className='text-lg text-[#333333] text-center font-bold pt-8 pb-5'>
                                    {item.heading}
                                </h4>
                                <p className='text-base text-[#666666] mx-auto text-center px-5 leading-7'>
                                    {item.para}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <span className='flex justify-center'>
                    <a href={'https://www.lingoyouniverse.com/vendors/register'} target='_blank'>
                        <Button text={t('zonessPartner_Btn')} color={'white'} backgroundColor={'#8300E9'} minWidth={'400px'} />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default CardsSec;

