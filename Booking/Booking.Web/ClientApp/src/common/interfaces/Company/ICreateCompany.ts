// companyStatus = 0 | 1, {Inactive | Active}, accordingly

export default interface ICreateCompany {
  name: string,
  description: string,
  daysOnSite: number,
  owner: string,
  status: number,
  foundationDate: Date | undefined,
  deleted: boolean,
  lastModifiedDate: Date | undefined
}