import { defineStore } from 'pinia'

export const useSections = defineStore('sections', () => {
  const multiSectionNames = reactive({})
  const language = useState('language')

  // Actions
  const fetchSectionNames = async () => {
    const { data } = await useAsyncData(
      'section-names',
      () => queryContent('section-names').find()
    )
    data.value?.forEach((section) => {
      const lang = section._path.split('/')[2]
      multiSectionNames[lang] = section
    })
    return data.value
  }

  // Getters
  const getSectionNames = () => {
    return multiSectionNames[language.value]
  }

  const getSectionName = (slug: string) => {
    return getSectionNames(language.value)[slug]
  }

  return {
    multiSectionNames,
    getSectionNames,
    getSectionName,
    fetchSectionNames
  }
})
