import Button from '../Button'
import useTranslation from '@/hooks/useTranslation';
import GetLocale from "@/hooks/getLocale";
import Link from "next-translate-routes/link";
import { howDoesItWorkSlug } from "@/utils";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const NewVideo = () => {

    const { t } = useTranslation();
    const locale = GetLocale();
    //@ts-ignore
    const slug = `/${locale}/${howDoesItWorkSlug[locale]}`;

    const data = [
        {
            heading: t('fuzianaVideoHeading'),
        },
        {
            para: t('fuzianaVideoparaone')
        },
        {
            para2: t('fuzianaVideoparaTwo')
        },
    ]

    return (
        <div className='vedio-bg py-12 sm:py-20'>
            <div className='container relative'>
                <div className='block lg:flex sm:gap-10'>
                    <div className='hidden md:block pt-20'>
                        <LiteYouTubeEmbed id="KCgEhNeVhUc" title='rafiky' />
                    </div>
                    <div className='pt-10'>
                        <div>
                            {data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h2 className='text-[#FCA497] text-[32px] font-bold'>{item.heading}</h2>
                                        <p className='text-base font-medium text-white pbF-4  py-3'>{item.para}</p>
                                        <p className='text-base font-medium text-white pbF-4  pb-3'>{item.para2}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='mt-10'>
                            <Link href={slug}>
                                <Button text={t('REMOTEINTERPRETING_Btn')} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewVideo

