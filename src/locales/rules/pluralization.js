/* eslint-disable no-unused-vars */
function itPluralizationRules(choice, choicesLength) {
  if (choice === 0 || choice === undefined || choice === null) {
    return 0
  }

  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 === 1
  if (!teen && endsWithOne) {
    return 0 // Singular form for 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 1 // Few form for 2, 3, 4
  }

  return 2 // Many form for everything else
}

export default {
  it: itPluralizationRules,
}
