
import useTranslation from '@/hooks/useTranslation';
import { Link } from 'next-translate-routes';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Button from '../Button';

const Vedio = () => {

    const { t } = useTranslation();


    return (
        <div className='vedio-bg py-12 sm:py-20'>
            <div className='container relative'>
                <div className='block lg:flex sm:gap-10'>
                    <div className=' md:block pt-20 h-[300px] sm:h-[600px]'>
                        <LiteYouTubeEmbed title='rafiky' id="KCgEhNeVhUc" />
                        {/* <Image src={lockUpMobile} height={100} width={100} alt='mobile' /> */}
                    </div>
                    <div className='pt-20 mt-7'>
                        <p className='text-[#FCA497] text-[32px] font-bold pt-20'>{t('videoServiceTitel')}</p>
                        <p className='text-base font-medium text-white pbF-4   py-3'>{t('videoServiceparaOne')}</p>
                        <p className='text-base font-medium text-white pbF-4   pb-3'>{t('videoServiceparaTwo')}</p>
                        <div className='mt-10 flex justify-center'>
                            <Link href={'/come-funziona'}>
                                <Button text={t("services_RemoteBtn")} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                            </Link>
                        </div>
                    </div>
                    <div className='flex md:hidden pt-20 h-[300px] sm:h-[600px]'>
                        <iframe title='rafiky' id="KCgEhNeVhUc"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vedio

