import { useDevice } from '../../../src/shared/lib/hooks/useDevice/useDevice';

const mockedUseDeviceFn = jest.fn(useDevice);

mockedUseDeviceFn.mockReturnValue(false);
