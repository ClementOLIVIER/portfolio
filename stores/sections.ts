import { defineStore } from 'pinia'

export const useSections = defineStore('sections', () => {
  const multiSectionNames = reactive({})

  // Actions
  const fetchSectionNames = async () => {
    const { data } = await useAsyncData(
      'section-names',
      () => queryContent('section-names').find()
    )
    data.value?.forEach((section) => {
      const language = section._path.split('/')[2]
      multiSectionNames[language] = section
    })
    return data.value
  }

  // Getters
  const getSectionNames = (language: string) => {
    return multiSectionNames[language]
  }

  return {
    multiSectionNames,
    getSectionNames,
    fetchSectionNames
  }
})
