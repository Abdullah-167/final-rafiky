;
import { IoBulbOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { BsCoin, BsTools, BsEnvelope } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiIdCard } from 'react-icons/bi';
import { CgDanger } from 'react-icons/cg';
import useTranslation from '@/hooks/useTranslation';

const Vantaggi = () => {

    const { t } = useTranslation();


    const cards = [
        {
            icon: <IoBulbOutline />,
            heading: t("remoteInterpreting_FirstcardTitle"),
            para: t("remoteInterpreting_Firstcardpara"),
            bgColor: 'rgba(122,105,230,0.3)',
            color: '#7a69e6'
        },
        {
            icon: <HiOutlineInboxIn />,
            heading: t("remoteInterpreting_SeccardTitle"),
            para: t("remoteInterpreting_Seccardpara"),
            bgColor: 'rgba(250,94,93,0.3)',
            color: '#fa5e5d'
        },
        {
            icon: <BsCoin />,
            heading: t("remoteInterpreting_ThirdcardTitle"),
            para: t("remoteInterpreting_Thirdcardpara"),
            bgColor: 'rgba(249,141,94,0.3)',
            color: '#f98d5e'
        },
        {
            icon: <IoIosCheckmarkCircleOutline />,
            heading: t("remoteInterpreting_ForthcardTitle"),
            para: t("remoteInterpreting_Forthcardpara"),
            bgColor: 'rgba(118,206,68,0.3)',
            color: '#76ce44'
        },

        {
            icon: <BsTools />,
            heading: t("remoteInterpreting_FifthcardTitle"),
            para: t("remoteInterpreting_Fifthcardpara"),
            bgColor: 'rgba(106,154,232,0.3)',
            color: '#6a9ae8'
        },
        {
            icon: <BiIdCard />,
            heading: t("remoteInterpreting_SixcardTitle"),
            para: t("remoteInterpreting_Sixcardpara"),
            bgColor: 'rgba(249,192,67,0.3)',
            color: '#f9c043'
        },
        {
            icon: <CgDanger />,
            heading: t("remoteInterpreting_SeventhcardTitle"),
            para: t("remoteInterpreting_Seventhcardpara"),
            bgColor: 'rgba(247,103,180,0.3)',
            color: '#f767b4'
        },
        {
            icon: <AiTwotoneLike />,
            heading: t("remoteInterpreting_EightcardTitle"),
            para: t("remoteInterpreting_Eightcardpara"),
            bgColor: 'rgba(68,206,176,0.3)',
            color: '#44ceb0'
        },
    ]

    return (
        <div className='bg-[#F5F6FC]'>
            <div className='container'>
                <h2  className="text-[45px] m:text-[45px] text-[#333333] font-bold text-center  pb-7 max-w-[900px] mx-auto" >VANTAGGI </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 py-20'>
                    {cards.map((item, index) => {

                        return (
                            <div
                                className='hero-cards bg-white px-4 py-10 rounded-xl'
                                key={index}
                            >
                                <div
                                    className={`text-4xl rounded-full w-20 h-20 mx-auto px-4 py-3 text-center`}
                                    style={{
                                        backgroundColor: item.bgColor,
                                        color: item.color
                                    }}
                                >
                                    <div className="icon-container"> {item.icon} </div>
                                </div>
                                <h4 className='text-lg text-[#333333] text-center font-bold pt-8 pb-3'>
                                    {item.heading}
                                </h4>
                                <p className='text-base text-[#666666] sm:max-w-[250px] mx-auto text-center'>
                                    {item.para}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Vantaggi;

