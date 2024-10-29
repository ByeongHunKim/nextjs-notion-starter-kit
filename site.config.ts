import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '6babe93281d6476995372b29f7b1915c',
  rootNotionSpaceId: '924e83e5-b1a4-43f3-a09a-f18dcfc53d26', // 로그에서 발견된 spaceId 추가

  name: 'meiko',
  domain: 'meiko',
  author: 'Meiko',
  description: 'Personal site of Meiko',

  twitter: '',
  github: 'ByeongHunKim',
  linkedin: 'byeonghun-kim-bb19bb236',

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,

  // 페이지가 없는 경우는 제외하고, 유효한 페이지만 매핑
  pageUrlOverrides: {
    '/action-1': 'ade7ff2b8e7a4b39b0a43be96f141359',
    '/action-2': 'bdc2c8d7e64f4dfe99f404bb0e6983bd',
    '/action-3': '60073bb6b8d942f69be451456abe8a3d',
    '/action-4': '11439682877744d0ad529e0aaa9b9ea9',
    '/action-5': 'fab52c7c8a0a46b483a66a8565df9f73',
    '/action-6': 'f06cb58b870d4696b80d5a7f45fc21cb',
    '/action-7': '6885f5c13b3e4ff7b02614e34749bc3e',
    '/action-8': '2551351dd66c4dbfaddc3bdb1721fefa',
    '/action-9': '851c877957f44d56bbcf060336bb18bb',
    '/action-10': 'cac9884ffea64814aa8f88ee74782488',
    '/action-11': '32d8ebaedcaa47a9bfb419c9914d8351',
    '/page-1': '0c8394e9858f4ffe809f50e8c36cc988',
    '/inofi-aws-1': '05757f472dfe4eb8a9d18315240e2b3c',
    '/prisma-1': 'a2cd79a955c345bba5d9f2ace8bef99f'
  },

  navigationStyle: 'default'
})
