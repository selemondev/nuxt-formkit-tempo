export default defineEventHandler((_event) => {
  return useFormat(new Date(), 'YYYY-MM-DD')
})
