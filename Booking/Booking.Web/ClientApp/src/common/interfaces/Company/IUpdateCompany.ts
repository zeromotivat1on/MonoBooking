
export default interface IUpdateCompany {
  readonly id: number,
  name: string,
  description: string,
  daysOnSite: number,
  owner: string,
  status: number,
  foundationDate: string | undefined,
  deleted: boolean,
  lastModifiedDate: string | undefined
}