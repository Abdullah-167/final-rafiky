
import useTranslation from '@/hooks/useTranslation';
import { Link } from 'next-translate-routes';
import Button from '../Button';

const Apri = () => {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className='pt-10 my-10 sm:my-20'>
                <div className='max-w-[800px] mx-auto'>
                    <h2 className='text-3xl sm:text-[45px] text-[#333333] text-center font-bold leading-9 sm:leading-[60px]'>
                        {t('remoteVideo_Heading')}
                    </h2>
                    <p className='text-center text-base font-medium py-3 leading-8'>
                        {t('remoteVideo_para')}
                    </p>
                    <p className='text-center text-base font-medium pb-3 leading-8'>
                        {t('remoteVideo_para2')}
                    </p>
                    <p className='text-center text-base font-medium pb-3 leading-8'>
                        {t('remoteVideo_para3')}
                    </p>
                    <p className='text-center text-base font-medium pb-3 leading-8'>
                        {t('remoteVideo_para4')}
                    </p>
                </div>
                <div className='flex justify-center mt-5'>
                    <Link href={'/richiesta-preventivo'} >
                        <Button text={t('remoteVideo_Btn')} color={'white'} backgroundColor={'#8624E1'} minWidth={undefined} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Apri


