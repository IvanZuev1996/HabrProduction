import { memo } from 'react';

export const typedMemo: <T>(c: T) => T = memo;
export type SortOrder = 'asc' | 'desc';
