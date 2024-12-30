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

/**
 * 根据职位类型获取颜色
 * @param type 职位类型
 * @returns 颜色
 */
export const getColorFromPositionType = (type: string) => {
  switch (type) {
    case 'Full Time':
      return 'lime'
    case 'Part Time':
      console.log(123);
      return 'cyan'
    case 'Contract':
      return 'violet'
    default:
      return 'fuchsia'
  }
}
