import { boot } from 'quasar/wrappers'
import { notif } from './showNotif'

export default boot(async ({ app }) => {
  app.config.globalProperties.$createPaginate = (propsPaginate, id) => {
      const { page, rowsPerPage, rowsNumber } = propsPaginate.pagination
      const filter = propsPaginate.filter
      return {
        params: {
          page: Number(page), 
          resPerPage: rowsPerPage === 0 ? rowsNumber : rowsPerPage
          // sortBy: sortBy,
          // descending: descending,
        }
      }
  }
})

// export default async ({ Vue }) => {
//     Vue.prototype.$createPaginate = (propsPaginate, id) => {
      
//     }
//   }