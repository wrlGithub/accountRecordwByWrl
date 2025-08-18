import type { UViewPlus } from 'uview-plus'
declare module 'uview-plus';
declare global {
  interface Uni {
    $u: typeof import('uview-plus').default;
  }
}

declare module '@dcloudio/uni-app' {
  interface Uni {
    $u: any;
  }
}