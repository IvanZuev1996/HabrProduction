import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './<FTName>.module.scss';
 
interface <FTName>Props {
    className?: string;
}
 
export const <FTName> = memo((props: <FTName>Props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.[FTName], {}, [className])}>
            
        </div>
    );
});