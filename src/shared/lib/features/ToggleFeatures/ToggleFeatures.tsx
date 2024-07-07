import { FC, ReactElement } from 'react';

import { FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlag } from '../featureFlags';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures: FC<ToggleFeaturesProps> = (props) => {
    const {feature, off, on} = props;
    
    if (getFeatureFlag(feature)) return on;

    return off;
}
