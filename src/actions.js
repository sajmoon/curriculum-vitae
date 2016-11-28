export const HIDE_EXPERIENCE_GROUP = 'HIDE_EXPERIENCE_GROUP'
export const HIDE_EXPERIENCE = 'HIDE_EXPERIENCE'
export const TOGGLE_VISISBLE_GROUP = 'TOGGLE_VISISBLE_GROUP'

export function hideExperience(experience) {
  return {
    type: HIDE_EXPERIENCE,
    experience
  }
}
export function toggleVisiblityGroup(group) {
  return {
    type: TOGGLE_VISISBLE_GROUP,
    group
  }
}
