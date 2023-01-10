import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    if (params) {
      navigationRef.current?.navigate(name as never, params as never);
    } else {
      navigationRef.current?.navigate(name as never);
    }
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.current?.goBack();
  }
}

export function resetRoute(name: any) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.reset({
      index: 0,
      routes: [name],
    });
  }
}
