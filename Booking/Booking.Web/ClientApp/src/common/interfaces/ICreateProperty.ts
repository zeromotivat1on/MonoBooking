export default interface ICreateProperty {
    Name: string,
    ValueType: number,
    Value: string,
    Status: number,
    IsDeleted: boolean,
    CreationDate: Date | undefined,
    LastModifiedDate: Date | undefined
}
