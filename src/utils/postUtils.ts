/**
 * 根据分类获取颜色
 * @param category 分类
 * @returns 颜色
 */
export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case 'Innovation':
      return 'lime'
    case 'Sustainability':
      return 'cyan'
    case 'Security':
      return 'violet'
    default:
      return 'fuchsia'
  }
}