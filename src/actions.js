export const HIDE_EXPERIENCE_GROUP = 'HIDE_EXPERIENCE_GROUP'
export const TOGGLE_VISISBLE_GROUP = 'TOGGLE_VISISBLE_GROUP'

export function hideExperience(experiences) {
  return {
    type: HIDE_EXPERIENCE,
    experience: experience
  }
}
export function toggleVisiblityGroup(group) {
  return {
    type: TOGGLE_VISISBLE_GROUP,
    group: group
  }
}
