import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId , token} from '../env'
// let token = "sk1qvW9eOxl6f8VaLDp1E4HOpcFZzhkwQC60qGWVnkf3E9424vn0Uos3AFdmrIEdXchQkEzKYFZqiihIZYMTmknCUVXkkpw5x3PRwtZIjxoKMlE4bQM1EqoVzoawJq5svjNdVuzKNeX4sglN1acO2K7EJsEjKccUi8vzm7ubNE3VKl503UW7H"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
