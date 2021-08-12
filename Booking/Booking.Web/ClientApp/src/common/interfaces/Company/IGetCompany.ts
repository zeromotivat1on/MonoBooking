export default interface ICreateCompany {
  id: number,
  name: string,
  description: string,
  daysOnSite: number,
  owner: string,
  status: number,
  foundationDate: Date | undefined,
  deleted: boolean,
  lastModifiedDate: Date | undefined
}