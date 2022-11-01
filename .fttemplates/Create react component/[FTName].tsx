import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './<FTName>.module.scss';
 
interface <FTName>Props {
    className?: string;
}
 
export const <FTName>= ({ className }: <FTName>Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.[FTName], {}, [className])}>
            
        </div>
    );
};