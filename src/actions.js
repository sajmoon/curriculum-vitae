export const HIDE_EXPERIENCE = 'HIDE_EXPERIENCE';

export function hideExperience(exp) {
  return {
    type: HIDE_EXPERIENCE,
    experience: exp
  }
}
